import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true
    } , 
    description : {
        type : String , 
        required  : true
    } , 

    start_date : {
        type : Date , 
        required : true
    } , 
    expected_end_date : {
        type : Date , 
        required : true
    } , 

    waiting_list : {
        type : Boolean , 
        default : true
    } , 
    started : {
        type : Boolean , 
        default : false
    } , 
    completed : {
        type : Boolean , 
        default : false
    } , 
    personal : {
        type : Boolean , 
        required : true
    }
});

const Project  = mongoose.model('project' , ProjectSchema)

export default Project;