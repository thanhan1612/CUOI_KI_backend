import jwt from 'jsonwebtoken';
import UserModel from '../models/users.js';
import dotenv from 'dotenv';

dotenv.config();

const RegisterControllers = {
    register: async (req, res) => {
        const { name, email, phoneNumber, address, identity, dob, isDeleted, role, accountId } = req.body;

        try {
            // Create user in the database
            const user = await UserModel.create({ name, email, phoneNumber, address, identity, dob, isDeleted, role, accountId });

            // Generate JWT token
            const token = jwt.sign(
                { id: user._id, name: user.name, role: user.role },
                process.env.SECRET_KEY,
                { expiresIn: '1h' }
            );
            
            // Respond with success message and token
            res.status(201).json({
                message: 'Registration successful',
                token: token
            });
        } catch (error) {
            // Handle any errors (e.g., validation issues)
            res.status(400).json({
                message: 'Registration failed',
                error: error.message
            });
        }
    }
};

export default RegisterControllers;
