const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 5000


app.use(express.json())
app.use(cors())


const uri = "mongodb+srv://tajbir:gjdO2kmHD95p0zwM@cluster0.g1xrt1f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");


    const coffeeDb = await client.db("CoffeeDB");
    const coffeeCollection = await coffeeDb.collection("CoffeeCollection");

    app.post('/add_coffee', async(req, res) => {
        const newCoffee = req.body;

        const result = await coffeeCollection.insertOne(newCoffee)
        
        res.send(result.insertedId);
    })

    app.get('/coffees', async(req, res) => {
        const coffees = await coffeeCollection.find().toArray();
        res.send(coffees);
    })

    app.get('/coffee/:id', async(req, res) => {
        const {id} = req.params
        console.log(id)
        const query = {_id: new ObjectId(id)}

        const coffee = await coffeeCollection.findOne(query);
        console.log(id, 'search result', coffee)

        res.send(coffee);
    })

    app.put('/update_coffee/:id', async(req, res) => {
        const {id} = req.params
        const updatedCoffee = req.body;
        const filter = { _id: new ObjectId(id) }

        const result = await coffeeCollection.updateOne(filter, { $set: updatedCoffee });
        console.log(id, result.matchedCount, result.acknowledged)
        res.send(result)
    })

    app.delete('/delete_coffee', async(req, res) => {
      const data = req.body
      const result = await coffeeCollection.deleteOne({_id: new ObjectId(data._id)})
      res.send(result)
      console.log(data)
    })
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {console.log(`server is running at http://localhost:${port}`)});