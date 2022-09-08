import { Router} from "express";
import authenticateToken from '../middlewares/auth.js';
import  {read, unread, spam, deleted, sent}  from "../controllers/emailviewController.js";
import dotenv from "dotenv";
dotenv.config();

const router = Router(); 




// const login = (req, res) => {
//     res.json("This is the login xxx")
// }


// const register = (req, res) => {
//     console.log(req.body, process.env.MONGO_URI);
//     res.json("This is the registration");
// }
 const read1 = async (req, res) => {
res.json("test")
}


router.get('/read', authenticateToken, read); 
router.get('/unread', authenticateToken, unread); 
router.get('/spam', authenticateToken, spam); 
router.get('/deleted', authenticateToken, deleted); 
router.get('/sent', authenticateToken, sent); 


export default router;