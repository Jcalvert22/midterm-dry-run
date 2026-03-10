import express from 'express';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

const app = express();
const mongoClient = new MongoClient(process.env.MONGO_URI);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

async function run(){

}

app.post('/api/send-name', (req, res) => {

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

run().catch(console.error);

