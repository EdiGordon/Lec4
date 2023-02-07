import mongoose from 'mongoose';
import { notFound } from '../../middleware/not-found.js';
const { Schema } = mongoose;

const cardsSchema = new Schema({
    name: String, // String is shorthand for {type: String}
    description: String,
    address: String,
    phone: Number,
    image: String,
    bizNumber: Number,

});

export { cardsSchema }