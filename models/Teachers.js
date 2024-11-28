import mongoose, { mongo } from "mongoose";
const schema = await mongoose.Schema({
    'userId' : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    'isActive': {
        type:Boolean,
    },
    'isDeleted': {
        type:Boolean
    },
    'code': {
        type:String,
        unique:true
    },
    'startDate': {
        type:Date
    },
    'endDate': {
        type:Date
    },
    'teacherPositionsId':{
        type:mongoose.Schema.Types.ObjectId,
        ref:'teacherpositions'
    },
    'degrees':[
        {
            'type': {
                type:String
            },
            'school':{
                type:String
            },
            'major':{
                type:String
            },
            'year':{
                type:String
            },
            'isGraduated':{
                type:Boolean
            }
        }
    ],
    'createdAt':{
        type:Date
    },
    'updatedAt':{
        type:Date
    }
},
{versionKey:false});
const TeachersModel =  new mongoose.model('teachers',schema);
export default TeachersModel