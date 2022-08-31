import { Router} from "express";
import  {register, login}  from "../controllers/userController.js";
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


router.post('/login', login);

router.post('/register', register);


export default router;