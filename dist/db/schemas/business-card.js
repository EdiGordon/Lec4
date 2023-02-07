import mongoose from 'mongoose';
const { Schema } = mongoose;
const businessCard = new Schema({
    businessName: String,
    buinessDescription: String,
    adress: String,
    phone: Number,
    pic: String,
    numBusiness: Number,
});
export { businessCard };
