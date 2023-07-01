import express from "express";

const router = express.Router()

router.get("/",(req, res)=>{
  res.send("User route is displaying data")
})

export default router