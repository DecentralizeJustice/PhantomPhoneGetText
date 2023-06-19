const mongoDBPassword = process.env.mongoDBPassword
const mongoServerLocation = process.env.mongoServerLocation
const apiPassword = process.env.apiPassword
const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = "mongodb+srv://main:" + mongoDBPassword + "@"+ mongoServerLocation + "/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
const collection = client.db("demo").collection("demo")
exports.handler = async (event) => {
  try {
    if (event.headers.specpassword === apiPassword) {
      // const docInfo = {_id: 69, messageArray: [] }
      // await collection.insertOne(docInfo)
/*       await collection.updateOne(
        { _id: 69 },
        { $push: { messageArray: JSON.parse(event.body) } }
      ) */
      //await client.close()
      // console.log('info entered')
      console.log(event.body)
      return {
        statusCode: 200,
        body: ''
      }
    } else {
      console.log('wrong password')
      return {
        statusCode: 200,
        body: ''
      }
    }
  } 
  catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: ''
    }
  }
}
