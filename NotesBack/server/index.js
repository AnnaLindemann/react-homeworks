import dotenv from "dotenv"
dotenv.config()
import express from "express"
import { connectToDatabase, getDb } from "./db.js"
import { ObjectId } from "mongodb"
import cors from "cors";

const uri = process.env.MONGO_URI;
const PORT = process.env.PORT || 3333
const app = express()
app.use(cors())
app.use(express.json());


app.get("/notes", async (req,res) => {
  try{
    const db = getDb()
  const notes = await db.collection("notes").find().toArray()
 
   res.status(200).json({data:notes})
   return
  } catch(error){
res.status(500).json({ error: "Internal error" });
  }
})


app.post("/notes", async (req, res) => {
  try{
    const db = getDb();
    const notes = req.body;
    if(!notes.title || !notes.text){
      return res.status(400).json({message: "All fields are required"});
          }  
const newNote = await db.collection("notes").insertOne(notes)
res.status(201).json({message: "New notes successfully added", data: newNote})
  } catch(error){
    res.status(500).json({ error: "Failed to create note" });
  }
})

app.put("/notes/:id", async (req, res) => {
try{ 
  const db = getDb()
  const {id} = req.params;
  const {title, text} = req.body

  if(!ObjectId.isValid(id)){
    return res.status(400).json({ message: "Invalid note id" })
  }

if(!title || !text){
  return res.status(400).json({message: "Title and text are required"})
}

const result = await db.collection("notes").updateOne(
  {_id: new ObjectId(id)},
{ $set: {title, text}})

if(result.matchedCount === 0){
   return res.status(404).json({ message: "Note not found" })
}

return res.status(200).json({message: "Note was updated", data: {
  _id: id,
  title,
  text
}})

}catch(error){
   return res.status(500).json({message:"Server error"})
}
})


app.delete ("/notes/:id", async (req, res)=> {
 try{ const db = getDb()


  const {id} = req.params
   if(!ObjectId.isValid(id)){
    return res.status(400).json({ message: "Invalid note id" })
  }

  const result = await db.collection("notes").deleteOne({_id: new ObjectId(id)})

  if(!result.deletedCount === 0){
    return res.status(404).json({ message: "Note not found" })
  }

  res.status(200).json({message:"Note was deleted"})
} catch(error){
   return res.status(500).json({message:"Server error"})
}
})

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start server because MongoDB connection failed", error);
  });

