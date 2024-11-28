import mongoose from "mongoose";
const schema = await mongoose.Schema({
    'name': {
        type:String,
        required:true
    },
    'code': {
        type:String,
        required:true
    },
    'des' : {
        type:String,
        required:true
    },
    'isActive': {
        type:Boolean,

    },
    'isDeleted' : {
        type:Boolean
    }
}, {timestamps: true});
const TeacherpositionModel = new mongoose.model('teacherpositions',schema);
export default TeacherpositionModel;