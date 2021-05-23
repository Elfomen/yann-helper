import mongoose from 'mongoose'

const TotalSchema = new mongoose.Schema({
    bank_total : {
        type : Number 
    } , 
    current_total : {
        type : Number
    }
});

const Total = mongoose.model('total' , TotalSchema)

export default Total