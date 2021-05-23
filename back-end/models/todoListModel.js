import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    task_name : {
        type : String , 
        required : true
    } , 
    start_date : {
        type : Date ,
        required : true
    } , 
    end_date : {
        type : Date , 
        required : true , 
        description : {
            type : String , 
            required : true
        }
    }
});

const TODO = mongoose.model("todo" , TodoSchema)

export default TODO