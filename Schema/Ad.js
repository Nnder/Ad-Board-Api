import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Ad = new Schema({
    user_id: {type: Object, required: true},
    date: {type: Date, required: true},
    description: {type: String, required: true},
    title: {type: String, required: true},
    category: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    status: {type: String, required: true},
    rating: {type: String, required: true},
    photos: {type: Array, required: true},
})

export default mongoose.model('ad', Ad);