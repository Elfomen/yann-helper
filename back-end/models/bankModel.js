import mongoose from 'mongoose'

const BankSchema= new mongoose.Schema({
    status : {
        type : String , 
        require : true, 
        default : "sealed"
    } , 
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
    }
});

const Bank = mongoose.model("bank" , BankSchema);

export default BankSchema