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
    console.log(collection)
    return collection
}

app.get('/api', async function (req, res) {
    const collection = await dbConnect("comment"); 
    let data = await collection.find().toArray();

    res.send(data)
})

app.post(`/api/insert`, async function(req, res) {
    const collection = await dbConnect("comment"); 
    await collection.insertOne(req.body);
    const dataGet = await collection.find().toArray();

    res.send(dataGet)
})


app.listen(3050)