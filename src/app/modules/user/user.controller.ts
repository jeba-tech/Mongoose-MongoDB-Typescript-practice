import { NextFunction, Request, Response } from "express";
import { createUserDB, getUserByIdFromDB, getUsersFromDB } from "./user.service";

export const create = async(req:Request, res:Response, next : NextFunction) => {
      // res.send('Hello World!')
      // next()
      //step1:Interface creation
      //Step2: schema 
      //step3: model
      //step4: database query



// createUserDB()
const data = req.body;

const user = await createUserDB(data)

res.status(200).json({
      status:'success',
      data: user,
});

}

export const getUserById = async(req:Request, res:Response, next : NextFunction) => {
     const {id}=req.params;
      const user = await getUserByIdFromDB(id);

      res.status(200).json({
            status:'success',
            data: user,
      });
}





//pattarn 

// route-> controller-> service




export const getUsers = async(req:Request, res:Response, next : NextFunction) => {

const user = await getUsersFromDB()

res.status(200).json({
      status:'success',
      data: user,
});

}