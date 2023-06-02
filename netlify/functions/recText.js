const axios = require("axios")
const mongoDBPassword = process.env.mongoDBPassword
const mongoServerLocation = process.env.mongoServerLocation
const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = "mongodb+srv://main:" + mongoDBPassword + "@"+ mongoServerLocation + "/?retryWrites=true&w=majority"
exports.handler = async (event) => {
try {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
  const collection = client.db("demo").collection("demo")
  const docInfo = { messageArray: [] }
  const doc = docInfo
  await collection.insertOne(doc)
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