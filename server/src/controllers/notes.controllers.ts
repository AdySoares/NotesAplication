import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { z } from "zod";

const prisma = new PrismaClient

export class NotesControllers {
  async create(req: Request, res: Response) {
    try {
      const NotesProps = z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        links: z.array(z.string())
      })

      const { userId } = req.params
      const { title, description, tags, links } = NotesProps.parse(req.body)

      await prisma.notes.create({
        data: {
          usersId: userId,
          title: title,
          description: description,
          tags: {
            create: tags.map(tags => {
              return {
                title: tags,
                usersId: userId
              }
            })
          },
          links: {
            create: links.map(link => {
              return {
                url: link,
              }
            })
          }
        }
      })

      return res.status(200).json('Nota criada com sucesso')

    } catch (error) {
      console.log(error)
      return res.status(400).json({
        status: "error",
        message: "Ops algo deu errado!!!"
      })
    }
  }
}