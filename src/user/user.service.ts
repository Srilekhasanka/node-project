import mongoose, { FilterQuery } from 'mongoose'
import { User, IUser } from './user.model'
import ResponseService from '../utils/response.handler'
import { BadRequestError } from '../errors/api-errors/BadRequestError'
import { NotFoundError } from '../errors/api-errors/NotFoundError'
import { ConflictError } from '../errors/api-errors/ConflictError'

export class UserService extends ResponseService {
  constructor() {
    super()
  }

  create = async (payload: Partial<IUser>) => {
    const { email, mobile_number } = payload

    if (email) {
      const existingUserByEmail = await User.findOne({ email })
      if (existingUserByEmail) {
        throw new ConflictError('User with this email already exists.')
      }
    }

    if (mobile_number) {
      const existingUserByMobile = await User.findOne({ mobile_number })
      if (existingUserByMobile) {
        throw new ConflictError('User with this mobile number already exists.')
      }
    }

    const newUser = await User.create(payload)
    const userObject = newUser.toObject()

    return this.serviceResponse(201, { user: userObject }, 'User created successfully.')
  }

  getAllUsers = async () => {
    const users = await User.find().select('-password -confirm_password')

    return this.serviceResponse(200, { users }, 'Found all users successfully.')
  }

  getOne = async (userId?: string, mobile?: string, email?: string) => {
    const whereClause: FilterQuery<IUser> = {}

    if (userId) {
      // if (!mongoose.Types.ObjectId.isValid(userId)) {
      //   throw new BadRequestError('Invalid user ID format.')
      // }
      whereClause._id = userId
    }
    if (mobile) {
      whereClause.mobile_number = Number(mobile)
    }
    if (email) {
      whereClause.email = email
    }

    const user = await User.findOne(whereClause).select('-password -confirm_password')

    if (!user) {
      throw new NotFoundError('User was not found.')
    }

    const userObject = user.toObject()

    return this.serviceResponse(200, { user: userObject }, 'Found user successfully.')
  }

  update = async (userId: string, payload: Partial<IUser>) => {
    // if (!mongoose.Types.ObjectId.isValid(userId)) {
    //   throw new BadRequestError('Invalid user ID format.')
    // }

    const { email, mobile_number } = payload

    if (email) {
      const existingUserByEmail = await User.findOne({ email, _id: { $ne: userId } })
      if (existingUserByEmail) {
        throw new ConflictError('Another user with this email already exists.')
      }
    }

    if (mobile_number) {
      const existingUserByMobile = await User.findOne({ mobile_number, _id: { $ne: userId } })
      if (existingUserByMobile) {
        throw new ConflictError('Another user with this mobile number already exists.')
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: payload },
      { new: true, runValidators: true }
    ).select('-password -confirm_password')

    if (!updatedUser) {
      throw new NotFoundError('User was not found.')
    }

    const userObject = updatedUser.toObject()

    return this.serviceResponse(200, { user: userObject }, 'User updated successfully.')
  }

  delete = async (userId: string) => {
    // if (!mongoose.Types.ObjectId.isValid(userId)) {
    //   throw new BadRequestError('Invalid user ID format.')
    // }

    const deletedUser = await User.findByIdAndDelete(userId)

    if (!deletedUser) {
      throw new NotFoundError('User was not found.')
    }

    return this.serviceResponse(200, { user: deletedUser.toObject() }, 'User deleted successfully.')
  }
}

export const userService = new UserService()
