import mongoose from "mongoose";
const schema = await mongoose.Schema({
    'name': {
        type:String,
        required:true
    },
    'email': {
        type:String,
        unique:true,
    },
    'phoneNumber': {
        type:String,
        unique:true,
        required:true
    },
    'address': {
        type:String
    },
    'identity': {
        type:String
    },
    'dob': {
        type:Date
    }
    ,
    'isDeleted': {
        type:Boolean,
        default:false
    },'role': {
        type:String,
        enum: ['ADMIN','STUDENT','TEACHER']
    }, 
    "accountId": {
        type: String, // No reference to another collection
    },
    
}, {timestamps: true}
)
const UserModel = new mongoose.model('users',schema);
export default UserModel;