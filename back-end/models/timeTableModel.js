import mongoose from 'mongoose'

const TimeTableSchema = new mongoose.Schema({
    subject_name : {
        type : String , 
        required : true
    } , 
    learning_date : {
        type : Date , 
        required : true
    } , 
    start_time : {
        type : String , 
        required : true
    } , 
    end_time : {
        type : String , 
        required : true
    } , 

    completed : {
        type : Boolean , 
        defaul : false
    }
});

const TimeTable = mongoose.model("timetable" , TimeTableSchema)

export default TimeTable