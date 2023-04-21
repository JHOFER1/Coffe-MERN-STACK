import mongoose from "mongoose";
'my first post'
const postSchema =new mongoose.Schema({
    topic:{
        type: String,
        required: true,
        trim:true,//quita los espacions de ambos lados
    },
    rango:{
        type: String,
        required: true,
        trim:true,//quita los espacions de
    },
    language:{
        type: String,
        required: true,
        trim:true,//quita los espacions de   
    },
    userId:{
        type: String,
        required: true,
        trim:true,//quita los espac
    }
});
export default mongoose.model('Post',postSchema);