import { PrismaClient } from '@prisma/client'
import { hash, compare } from 'bcrypt'
import { Request, Response } from 'express'
import { z } from 'zod'

const prisma = new PrismaClient()

export class UserController {

  async create(req: Request, res: Response) {
    try {
      const UserProps = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string()
      })

      const { name, email, password } = UserProps.parse(req.body)

      const CheckedEmail = await prisma.users.findFirst({
        where: {
          email: email
        }
      })

      if (CheckedEmail) {
        return res.status(400).json({
          status: "error",
          message: "Este email já está sendo usado"
        })
      }

      const hashedPassword = await hash(password, 8)

      await prisma.users.create({
        data: {
          name,
          email,
          password: hashedPassword,
        }
      })

      return res.status(200).send({
        message: "Usuário criado com sucesso"
      })

    } catch (error) {
      console.error(error)
      return res.status(400).json({
        status: "error",
        message: "Ops algo deu errado!!!"
      })
    }
  }

  async update(req: Request, res: Response) {
    try {
      const UserProps = z.object({
        name: z.string().nullish(),
        email: z.string().nullish(),
        newPassword: z.string().nullish(),
        oldPassword: z.string().nullish(),
        avatar: z.string().nullish()
      })

      const { id } = req.params
      const { name, email, oldPassword, newPassword, avatar } = UserProps.parse(req.body)

      const user = await prisma.users.findUnique({
        where: {
          id: id
        }
      })

      if (newPassword && !oldPassword) {
        return res.status(400).json({
          status: "Error",
          message: "Você precisa digitar a senha antiga"
        })
      } else if (newPassword && oldPassword) {
        const comparePassword = await compare(oldPassword!, user!.password)

        if (!comparePassword) {
          return res.status(400).json({
            status: "Error",
            message: "Sua senha antiga está errada"
          })
        }
        const newPasswordHashed = await hash(newPassword!, 8)

        await prisma.users.update({
          where: {
            id
          },
          data: {
            password: newPasswordHashed || user?.password,
          }
        })

      }

      await prisma.users.update({
        where: {
          id
        },
        data: {
          name: name || user?.name,
          email: email || user?.email,
          avatar: avatar || user?.avatar
        }
      })

      return res.status(200).json(" Seu cadastrado foi atualizado com sucesso")


    } catch (error) {
      console.error(error)
      return res.status(400).json({
        status: "error",
        message: "Ops algo deu errado!!!"
      })
    }
  }

}