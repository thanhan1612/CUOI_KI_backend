import TeachersModel from "../models/Teachers.js";
import TeacherpositionModel from "../models/Teachersposition.js";
import mongoose from "mongoose";
const AdminControllers = {
    getTeachers: async (req,res) => {
        const totalItems = await TeachersModel.countDocuments();
        const totalPages = Math.ceil(totalItems/5);
        const skip = 20;
        const teachersusers = await TeachersModel.find().skip(skip).limit(5);
        try {
        const teachersusers= await TeachersModel.find().populate({path: 'userId',select:"name address+"}).populate({ path: 'teacherPositionsId', select: 'name' });
        res.status(200).send({
            
        teachersusers
        })}
        catch(err){
            res.status(404).send({
                message:err.message,
            })
        }
    },
    createTeacher: async (req,res) => {
        try {
            const newTeacher = await TeachersModel.create({
                userId: req.body.userId,             // userId should be an ObjectId from the 'users' collection
                isActive: req.body.isActive,         // Assuming this is passed in the body
                isDeleted: req.body.isDeleted,       // Assuming this is passed in the body
                code: req.body.code,                 // Assuming code is passed in the body
                startDate: req.body.startDate,       // Assuming start date is passed in the body
                endDate: req.body.endDate,           // Assuming end date is passed in the body
                teacherPositionsId: req.body.teacherPositionsId, // Assuming teacher position ID is passed in the body
                degrees: req.body.degrees,           // Assuming degrees array is passed in the body
                createdAt: new Date(),               // Automatically setting the created date
                updatedAt: new Date(),               // Automatically setting the updated date
            });
            res.status(200).send({
                
                 newTeacher
            })
        } catch (err) {
            res.status(400).send({
                message:err.message
            })
        }
    },
    getTeacherPositions: async (req,res) => {
        try {
          const teacherspositions = await TeacherpositionModel.find();
          res.status(200).send({
           
            teacherspositions
          })
        } catch(err) {
            res.status(400).send({
                message: err.message,
                data: null
            })
        }
    },
    createTeacherPosition: async (req,res) => {
        try {
            const newTeacherPosition = await TeacherpositionModel.create({code : req.body.code, des: req.body.des, isActive: req.body.isActive, isDeleted: false, name : req.body.name });
            res.status(200).send({
               
                 newTeacherPosition
            })
        } catch(err) {
            res.status(400).send({
                message:err.message
            }
            )
        }
    }
}
export default AdminControllers;