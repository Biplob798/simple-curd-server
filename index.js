const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middle were 
app.use(cors())
app.use(express.json())



// mdbiplop798
// aghioZNP94ekF8Sf




// const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mdbiplop798:aghioZNP94ekF8Sf@cluster0.vsymadz.mongodb.net/?retryWrites=true&w=majority";

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

    const database = client.db("usersDB");
    const userCollection = database.collection("users");

    // loader theke data akhane hit korbe 

    app.get('/users', async (req, res) => {
      const cursor = userCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })


    // single data get/read koarar jonno 

    app.get('/users/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const user = await userCollection.findOne(query);
      res.send(user)
    })

    // data create thyake data collect kora 

    app.post('/users', async (req, res) => {
      const user = req.body;
      console.log('new user', user);
      const result = await
        userCollection.insertOne(user);
      res.send(result);
    })

    // data update korar jonno 

    app.put('/users/:id', async (req, res) => {
      const id = req.params.id
      const user = req.body
      console.log(id, user)
      const filter = { _id: new ObjectId(id) }
      const options = { upsert: true }
      const updateUser = {
        $set: {
          name: user.name,
          email: user.email
        }
      }
      const result = await userCollection.updateOne(filter, updateUser, options);
      res.send(result)

    })

    // delete korar jonno 

    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      console.log('please delete from database',
        id);
      const query = { _id: new ObjectId(id) }
      const result = await userCollection.deleteOne(query);
      res.send(result)


    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log);


app.get('/', (req, res) => {
  res.send('SIMPLE CURD IS RUNNING')
})

app.listen(port, () => {
  console.log(`simple curd is running on port, ${port}`)
})





// try{

// }
// catch{

// }
// finally{

// }