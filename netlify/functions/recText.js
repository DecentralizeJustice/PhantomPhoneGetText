exports.handler = async (event) => {
      try {
        console.log(event)
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