import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    id: {type: String}, 
    read: {type: Array}, 
    blue: {type: String}, 
    unread: {type: Array},
    spam: {type: Array},
    deleted: {type: Array},
    sent: {type: Array},
});

export default mongoose.model('Emails', userSchema);