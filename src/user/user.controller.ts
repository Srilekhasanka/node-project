import { Response, NextFunction } from 'express'
import ResponseService from '../utils/response.handler'
import { userService } from './user.service'
import { createUserSchema, getUserSchema, updateUserSchema, deleteUserSchema } from './user.validator'
import { BadRequestError } from '../errors/api-errors/BadRequestError'

export class UserController extends ResponseService {
  constructor() {
    super()
  }

  create = async (req: any, res: Response, next: NextFunction) => {
    try {
      const { error, value } = createUserSchema.validate(req.body)

      if (error) {
        throw new BadRequestError(error.details[0]?.message || 'Validation error')
      }

      const resp = await userService.create(value)

      const { statusCode, payload, message } = resp
      return this.sendResponse(res, statusCode, payload, message)
    } catch (err) {
      next(err)
    }
  }

  get = async (req: any, res: Response, next: NextFunction) => {
    try {
      const { error, value } = getUserSchema.validate(req.query)

      if (error) {
        throw new BadRequestError(error.details[0]?.message || 'Validation error')
      }

      const userId = value.userId as string
      const mobileNum = value.mobile as string
      const email = value.email as string

      let resp
      if (!userId && !mobileNum && !email) {
        resp = await userService.getAllUsers()
      } else {
        resp = await userService.getOne(userId, mobileNum, email)
      }

      const { statusCode, payload, message } = resp
      return this.sendResponse(res, statusCode, payload, message)
    } catch (err) {
      next(err)
    }
  }

  update = async (req: any, res: Response, next: NextFunction) => {
    try {
      const { error, value } = updateUserSchema.validate(req.body)

      if (error) {
        throw new BadRequestError(error.details[0]?.message || 'Validation error')
      }

      const userId = req.params.userId || req.userId

      if (!userId) {
        throw new BadRequestError('User ID is required')
      }

      const resp = await userService.update(userId, value)

      const { statusCode, payload, message } = resp
      return this.sendResponse(res, statusCode, payload, message)
    } catch (err) {
      next(err)
    }
  }

  delete = async (req: any, res: Response, next: NextFunction) => {
    try {
      const { error, value } = deleteUserSchema.validate(req.params)

      if (error) {
        throw new BadRequestError(error.details[0]?.message || 'Validation error')
      }

      const userId = value.userId

      const resp = await userService.delete(userId)

      const { statusCode, payload, message } = resp
      return this.sendResponse(res, statusCode, payload, message)
    } catch (err) {
      next(err)
    }
  }
}

export const userController = new UserController()
