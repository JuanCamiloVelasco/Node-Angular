import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import express from "express";
import cors from "cors";
import comidaRouter from "./routers/comida.router";
import userRouter from "./routers/user.router";
import orderRouter from './routers/order.router';
import dbConnect from './configs/database.config';
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/comidas", comidaRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

// Especifico las rutas al crear la carpeta public para el despliegue
app.use(express.static(path.join('public', 'browser')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname,'public', 'browser', 'index.html'));
    })

const port = 5000;
app.listen(port, () => {
    console.log("website served on http://localhost:" + port);
})