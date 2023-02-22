import { verify } from "jsonwebtoken";
import authConfig from "../config/authConfig";
import { NextFunction, Request, Response } from "express";


export function authenticator(req: Request, res: Response, next: NextFunction){
  const authHeader = req.headers.authorization

  if(!authHeader){
    return res.status(401).json({
      "status": "Error",
      "Message": "Você não está autenticado"
    })
  }

  const [, token] = authHeader.split(' ')

  try {
   const {sub: userID} = verify(token, authConfig.jwt.secret)

   req.user  = {
    id: String(userID)
   }

   return next()
   
  } catch{
    return res.status(401).json({
      "status": "Error",
      "Message": "Token inválido"
    })
  }

}