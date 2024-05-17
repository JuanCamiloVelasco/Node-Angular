"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = exports.OrderItemSchema = exports.LatLngSchema = void 0;
var mongoose_1 = require("mongoose");
var order_status_1 = require("../constants/order_status");
var comida_model_1 = require("./comida.model");
exports.LatLngSchema = new mongoose_1.Schema({
    lat: { type: String, required: true },
    lng: { type: String, required: true },
});
exports.OrderItemSchema = new mongoose_1.Schema({
    comida: { type: comida_model_1.ComidaSchema, required: true },
    precio: { type: Number, required: true },
    cantidad: { type: Number, required: true }
});
var orderSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    direccionLatLng: { type: exports.LatLngSchema, required: true },
    paymentId: { type: String },
    totalPrice: { type: Number, required: true },
    items: { type: [exports.OrderItemSchema], required: true },
    status: { type: String, default: order_status_1.OrderStatus.NEW },
    user: { type: mongoose_1.Schema.Types.ObjectId, required: true }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.OrderModel = (0, mongoose_1.model)('order', orderSchema);
