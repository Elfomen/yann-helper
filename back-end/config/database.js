import mongoose from 'mongoose'

const URI  = "mongodb://localhost/yann-helper"

const connect = async () => {
    try {
       await mongoose.connect(URI , {
            useNewUrlParser : true , 
            useUnifiedTopology : true , 
            useCreateIndex : true
        })
    
        console.log("Successfully connected to the database")
    } catch (error) {
        console.log("Error!!!! cant connect to the database for : " + error.message)
    }
}

export default connect;