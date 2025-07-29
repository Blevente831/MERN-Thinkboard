import  express  from "express"
import { createNote, deleteNote, getAllNotes, updateNote, getANoteById } from "../controllers/NotesController.js";

const router = express.Router();
router.get("/", getAllNotes);
router.get("/:id", getANoteById);

router.post("/", createNote);
router.put("/:id", updateNote); 

router.delete("/:id", deleteNote);
export default router