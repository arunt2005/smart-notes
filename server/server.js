import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/notes");

app.get("/api/health", (req,res)=>res.json({status:"OK"}));

app.listen(5000, ()=>console.log("Backend running"));
