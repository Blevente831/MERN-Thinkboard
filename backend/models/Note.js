import mongoose from "mongoose";
const schemaNote = new mongoose.Schema(
{
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },

}, 
{timestamps: true} //createdAt, updatedAt
);

const Note = mongoose.model("Note", schemaNote);

export default Note;