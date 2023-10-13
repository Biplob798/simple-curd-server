/***
 * 
 * Mongodb Connection
 * -------------------------
 * 1.create account
 * 2.create an user with password
 * 3. whitelist api address
 * 4.database > connect > drive > node > view full code
 * 5. change the password the uri
 * ---------------------------
 *  CREATE---- POST
 * 1.app.post('/users'/async (req, res)=>{})
 * 2.make the function async to  use await inside it
 * 3.make sure  you use the express.json() middleware
 * 4. access data from the body : const user = req.body
 * 5.const result = await userCollection.insertOne(user)
 * res.send(user)
 * --------------------------
 * 
 * CLIENT---------------SIDE
 * 
 * 1.create fetch
 * 2.add second parameter as an object
 * 3.provide method: 'POST'
 * 4.add headers: {'content-type': 'application/json'}
 * 5.add body: JSON.stringify(user)
 * 
 * -------------------------
 * 
 * 
 * Read/Get--MANY
 * ----------------------------
 *1.create a cursor = 
   userCollection.find()
  2.const result = await 
    cursor.toArray()

 ------------------------------

   DELETE
  ----------------------------- 
  
 * 1.create app.delete('/users/:id', async(req,res)=>{})
  2.specify unique objectId to delete the right user
  3.const query = { _id: new ObjectId(id)}
  4.const result= await  userCollection.deleteOne(query)
  -----------------------------
  client side
  -----------------------------------
  1.create dynamic url with id
  2.mention the delete method
 * 
 * 
 * 
 * 
 * 
 */