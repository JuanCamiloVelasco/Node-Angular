import { Router } from "express";
import { prueba_comidas } from "../data";
import asyncHandler from "express-async-handler";
import { ComidaModel } from "../models/comida.model";

const router = Router();

router.get("/seed", asyncHandler( async (req, res) => {
    const comidasCount = await ComidaModel.countDocuments();
    if(comidasCount>0) {
        res.send("La seed ya fue completa!");
        return;
    }
    await ComidaModel.create(prueba_comidas);
    res.send("Seed completa!")
}));

router.get("/", asyncHandler( async (req, res) => {
    const comidas = await ComidaModel.find()
    res.send(comidas);
}) );

router.get("/buscar/:searchTerm", asyncHandler( async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const comidas = await ComidaModel.find({nombre: {$regex:searchRegex}});
    res.send(comidas);
}));

router.get("/tags", asyncHandler(async (req, res) => {
    const tags = await ComidaModel.aggregate([{
        $unwind:'$tags'
    },{
        $group:{
            _id: '$tags',
            count: {$sum: 1}
        }
    },{
        $project:{
            _id: 0,
            nombre:'$_id',
            count:'$count'
        }
    }]).sort({count:-1});

    const todo = {
        nombre: 'Todo',
        count: await ComidaModel.countDocuments()
    }

    tags.unshift(todo);
    res.send(tags);
}));

router.get("/tag/:tagName", asyncHandler(async (req, res) => {
    const comidas = await ComidaModel.find({tags:req.params.tagName})
    res.send(comidas);
}));

router.get("/:comidaId", asyncHandler(async (req, res) => {
    const comida = await ComidaModel.findById(req.params.comidaId);
    res.send(comida);
}));

export default router;