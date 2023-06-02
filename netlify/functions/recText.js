const axios = require("axios")
const mongoDBPassword = process.env.mongoDBPassword
const mongoServerLocation = process.env.mongoServerLocation
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
const uri = "mongodb+srv://main:" + mongoDBPassword + "@"+ mongoServerLocation + "/?retryWrites=true&w=majority"
exports.handler = async (event) => {
try {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
  const collection = client.db("demo").collection("demo")
  // create array const docInfo = { messageArray: [] }
  const docInfo = JSON.parse(event.body)
  // await collection.insertOne(doc)
  await collection.updateOne(
    { _id: ObjectId.toString("64795846bbff92df43d432bb") },
    { $push: { messageArray: { hi: true} } }
  )
  await client.close()
  console.log('info entered')
  return {
    statusCode: 200,
    body: ''
  }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: ''
    }
  }

}