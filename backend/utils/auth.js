 import jwt from 'jsonwebtoken';

 export const verify = jwt.verify;

 export const generateToken = (user) => {
   return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
     expiresIn: '1h',
   });
 };
 export const verifyToken = (token) => {
   return jwt.verify(token, process.env.JWT_SECRET);
 };

   
   export const authenticateToken = (req, res, next) => {
     const token = req.headers.authorization;
     if (!token) {
       return res.status(401).json({ message: 'Unauthorized' });
     }
     try {
       const decoded = verifyToken(token);
       req.user = decoded;
       next();
     } catch (err) {
       return res.status(401).json({ message: 'Unauthorized' });
     }
   };
   export const authenticateAdmin = (req, res, next) => {
     const token = req.headers.authorization;
     if (!token) {
       return res.status(401).json({ message: 'Unauthorized' });
     }
     try {
       const decoded = verifyToken(token);
       req.user = decoded;
       next();
       if (req.user.role !== 'admin') {
         return res.status(403).json({ message: 'Forbidden' });
       }
       next();       
      }
       catch (err) {
       return res.status(401).json({ message: 'Unauthorized' });
     }
   }

   export const authenticateUser = (req, res, next) => {
     const token = req.headers.authorization;
     if (!token) {
       return res.status(401).json({ message: 'Unauthorized' });
     }
     try {
       const decoded = verifyToken(token);
       req.user = decoded;
       next();
       if (req.user.role !== 'user') {
         return res.status(403).json({ message: 'Forbidden' });
       }
       next();
      }
       catch (err) {
       return res.status(401).json({ message: 'Unauthorized' });
     }
   }
   
   export const authorizeRole = (role) => {
     return (req, res, next) => {
       if (req.user.role !== role) {
         return res.status(403).json({ message: 'Forbidden' });
       }
       next();
     };
   };
