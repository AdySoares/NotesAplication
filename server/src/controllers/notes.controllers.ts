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

      const { usersId } = req.params
      const { title, description, tags, links } = NotesProps.parse(req.body)

      await prisma.notes.create({
        data: {
          usersId: usersId,
          title: title,
          description: description,
          tags: {
            create: tags.map(tags => {
              return {
                title: tags,
                usersId: usersId
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

  async search(req: Request, res: Response) {
    try {
      const SearchProps = z.object({
        title: z.string(),
        tags: z.string().nullish()
      })

      const UserProps = z.object({
        usersId: z.string()
      })

      const { usersId } = UserProps.parse(req.params)

      const { title, tags } = SearchProps.parse(req.query)

      let result
      
      if (tags) {
        result = await prisma.notes.findMany({
          where: {
            tags: {
              some: {
                title: tags
              }
            },
            usersId: usersId
          },
          select: {
            id: true,
            title: true,
            description: true,
            tags: {
              select: {
                title: true,
              },
            },
            links: {
              select: {
                url: true
              }
            },
            createdAt: true,
  
          }
        })
      }else{
        result = await prisma.notes.findMany({
          where: {
            title: {
              contains: `${title}`
            },
            usersId: usersId
          },
          select: {
            id: true,
            title: true,
            description: true,
            tags: {
              select: {
                title: true,
              },
            },
            links: {
              select: {
                url: true
              }
            },
            createdAt: true,
  
          }
        })
      }


      return res.status(200).json(result)

    } catch (error) {
      console.log(error)
      return res.status(400).json({
        status: "error",
        message: "Ops algo deu errado!!!"
      })
    }

  }

  async show(req: Request, res: Response) {
    try {

      const NotesProps = z.object({
        usersId: z.string(),
        noteId: z.string()
      })

      const { usersId, noteId } = NotesProps.parse(req.params)

      const note = await prisma.notes.findFirst({
        where:{
         usersId: usersId,
         id: noteId 
        },
        include: {
          tags: true,
          links: true,
        }
      })

      return res.status(200).json(note)

    } catch (error) {
      console.log(error)
      return res.status(400).json({
        status: "error",
        message: "Ops algo deu errado!!!"
      })
    }
  }

  async delete(req: Request, res: Response){
   try {
    const NotesProps = z.object({
      noteId: z.string()
    })

    const { noteId } = NotesProps.parse(req.params)

    await prisma.notes.delete({
      where: {
        id: noteId,
      }
    })
    
    return res.status(200).json('Sua nota foi deletada com sucesso')
   } catch (error) {
    console.log(error)
    return res.status(400).json({
      status: "error",
      message: "Ops algo deu errado!!!"
    })
   }
  }
}