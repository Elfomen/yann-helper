import mongoose from 'mongoose'

const BorrowSchema = new mongoose.Schema({
    amount : {
        type : Number , 
        required : true
    } , 
    from : {
        type : String , 
        required : true
    } , 
    for : {
        type : String , 
        required : true
    } , 
    borrowed_date : {
        type : Date , 
        default : Date.now
    } , 
    return_date : {
        type : Date , 
        required : true
    } , 
    resolved : {
        type : Boolean , 
        default : false
    }
});

const Borrow = mongoose.model('borrow' , BorrowSchema)

export default Borrow