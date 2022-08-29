import { Router} from "express";

const router = Router(); 




const login = (req, res) => {
    res.json("This is the login xxx")
}



router.get('/login', login);

export default router;