import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import { Request, Response } from "express";
import { z } from "zod";
import authConfig from "../config/authConfig";
import { sign } from "jsonwebtoken"

const prisma = new PrismaClient

export class SessionsControllers{
  async create(req: Request, res: Response){
    try {
      const UserProps = z.object({
        email: z.string(),
        password: z.string(),
      })

      const { email, password } = UserProps.parse(req.body)

      const user = await prisma.users.findFirst({
        where: {
          email
        }
      })

      if(!user){
        return res.status(400).json({
          status: "error",
          message: "Email ou senha inválidos"
        })
      }

      const passwordMatch = await compare(password, user.password)

      if(!passwordMatch){
        return res.status(400).json({
          status: "error",
          message: "Email ou senha inválidos"
        })
      }

      const { secret, expiresIn } = authConfig.jwt

      const token = sign({}, secret, {
        subject: String(user.id),
        expiresIn
      })

      return res.status(200).json({
        user, 
        token
      })

      
    } catch (error) {
      console.error(error)
    }
  }
}