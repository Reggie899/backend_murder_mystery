// import { isObjectIdOrHexString } from "mongoose"
import Emails from "../models/Emails.js"
// --------- READ --------

export const read = async (req, res) => {
    // console.log(req.user);
  const userid = req.user.id // <--- here is the user payload info that we received from the payload after auth process of token and it s saved in "user" 
    // res.json({username: req.user.username})}
    try {
      const searchID = await Emails.findOne({id: userid}, {blue: 1, read: 1});
    //   const searchID = await Emails.findOne({id: userid});

      if(searchID == null) return res.json({message: "invalid credentials"})
    //   const blue =  await Emails.findOne({ blue: "moon" });
      res.json(searchID)
    }
    catch (err)  {
      if(err) res.json({message: err.message})
    }
    }