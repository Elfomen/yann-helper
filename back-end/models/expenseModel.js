import mongoose from 'mongoose'

const ExpenseSchema = new mongoose.Schema({
    amount : {
        type : Number , 
        required : true
    } , 
    spend_date : {
        type: Date , 
        default : Date.now 
    } , 

    reason : {
        type : String ,  
        required : true
    } 

});

const Expense = mongoose.model("expense" , ExpenseSchema)
export default Expense;