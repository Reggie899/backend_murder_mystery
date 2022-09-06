import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    id: {type: String}, 
    read: {type: Array}, 
    blue: {type: String}, 
});

export default mongoose.model('Emails', userSchema);