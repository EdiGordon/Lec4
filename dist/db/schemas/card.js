import mongoose from 'mongoose';
const { Schema } = mongoose;
const cardsSchema = new Schema({
    name: String,
    description: String,
    address: String,
    phone: Number,
    image: String,
    bizNumber: Number,
});
export { cardsSchema };
