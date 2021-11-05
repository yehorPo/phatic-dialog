import mongoose from "mongoose";

const Person = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    phone: { type: String, required: true },
    order: { type: String, required: true },
    problem: { type: String, required: true },
    descr: { type: String, required: true },
});

export default mongoose.model('Person', Person);