import express from "express";
import mongoose from "mongoose";
import router from "./endpoints.js";
import path from 'path';
const __dirname = path.resolve();
const url = `mongodb+srv://admin:admin@persons.nwpmv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api', router);
app.use(express.static(__dirname));

async function start() {
    try {
        await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
        app.get('/', function(req, res){
            res.sendFile(__dirname+"/front/index.html");
        });
        app.listen(5000, () => console.log("server is running on port " + 5000));
    } catch (e) {
        console.log(e);
    }
}
start();