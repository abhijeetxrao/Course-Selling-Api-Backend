import z from 'zod'
import type { Request, Response, NextFunction } from 'express'

const singupSchema = z.object({
  name:z.string().trim().min(4,{message:"Name must be of atleast 4 characters!"}).max(50,{message:"Name must be of atmost 50 characters!"}),
  email: z.email({message:"Must be a valid Email!"}),
  password:z.string().min(8,{message:"Password must be of atleast 8 characters!"}).max(50,{message:"Password must be of atmost 50 characters!"}),
  role:z.enum(["STUDENT","INSTRUCTOR"]).default("STUDENT"),
})



export const validateLogin = (req:Request, res:Response, next:NextFunction)=>{
  const result = singupSchema.safeParse(req.body)
  if(!result){
    res.status(400).json({})
  }
  
}