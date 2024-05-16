"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComidaModel = exports.ComidaSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ComidaSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    tags: { type: [String] },
    favorito: { type: Boolean, default: false },
    estrellas: { type: Number, required: true },
    urlImagen: { type: String, required: true },
    origen: { type: [String], required: true },
    tiempoComida: { type: String, required: true },
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.ComidaModel = (0, mongoose_1.model)('comida', exports.ComidaSchema);
