const express = require('express')
const app = express()
var cors= require('cors')
var bodyParser = require('body-parser')
require('dotenv').config();

app.use(express.static(`dist`));

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dbConnect = async (str) => {
    const { MongoClient } = require('mongodb');
    const client = await MongoClient.connect(process.env.S_HOST);
    const db = client.db("portfolio")
    const collection = db.collection(str)
    // console.log(collection)
    return collection
}

app.get('/api', async function (req, res) {
    const collection = await dbConnect("comment"); 
    let data = await collection.find().toArray();

    res.send(data);
})

app.post(`/api/insert`, async function(req, res) {
    const collection = await dbConnect("comment"); 
    await collection.insertOne(req.body);
    // const dataGet = await collection.find().toArray();

    res.send("글쓰여짐");
})

app.put(`/api/put`, async function(req, res) {
    const collection = await dbConnect("comment");
    const qData = await req.body;
    await collection.updateOne({name: qData.name, email: qData.email}, {$set:{text: qData.text}});
    // const dataGet = await collection.find().toArray();

    res.send("글수정됨");
})

app.delete(`/api/delete`, async function(req, res) {
    const collection = await dbConnect("comment");
    const qData = req.query;
    await collection.deleteOne({name: qData.name, email: qData.email});

    res.send("지워짐");
})



app.listen(3050)