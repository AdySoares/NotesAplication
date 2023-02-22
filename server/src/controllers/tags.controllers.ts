import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'


const prisma = new PrismaClient()

export class TagsControllers{
  async show(req: Request, res: Response) {
    try {
      const userId = req.user.id
  
      const tags = await prisma.tags.findMany({
        where: {
          usersId: userId
        }
      })

      return res.status(200).json(tags)
      
    } catch (error) {

      console.error(error)
      return res.status(400).json({
        status: "error",
        message: "Ops algo deu errado!!!"
      })
    }
  }
}