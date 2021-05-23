import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const MoneyReceivedSchema = new Schema({
    amount : {
        type : Number , 
        required : true 
    } , 
    received_date : {
        type : Date , 
        default : Date.now
    } , 

    from : {
        type : String , 
        required : true
    } , 
    for : {
        type : String , 
        required : true
    } , 
    status : {
        type : String , 
        required : true
    }
});

const Money_Received = mongoose.model("money__received" , MoneyReceivedSchema)

export default Money_Received