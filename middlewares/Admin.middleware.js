import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const AdminMiddleware = {
    ifAdmin: async (req, res, next) => {
        const authHeaders = req.headers['authorization'];

        if (authHeaders) {
            const token = authHeaders.split(' ')[1];

            jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ message: 'Token is invalid' });
                } else {
                    req.user = decoded; 
                    console.log(req.user);
                    if (req.user.role == 'ADMIN') {
                        next()
                    }
                    else {
                        return res.status(401).json({message: 'You cannot access this !'})
                    } 
                }
            });
        } else {
            return res.status(403).json({ message: 'Authorization header is missing' });
        }
    }
};
export default AdminMiddleware;
