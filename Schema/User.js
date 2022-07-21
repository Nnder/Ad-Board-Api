import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User = new Schema({
    name: {type: String, required: true},
    phone: {type: Number, required: true},
    login: {type: String, required: true},
    passwd: {type: String, required: true},
    email: {type: String, required: true},
    ads: {type: Array, required: true},
})

export default mongoose.model('user', User);