import Joi from 'joi'

export const createUserSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().optional(),
  mobile_number: Joi.number().integer().optional(),
  DOB: Joi.date().optional(),
  password: Joi.string().min(6).optional(),
  confirm_password: Joi.string().valid(Joi.ref('password')).optional(),
  isActive: Joi.boolean().optional(),
}).or('email', 'mobile_number')

export const getUserSchema = Joi.object({
  userId: Joi.string().optional(),
  mobile: Joi.string().pattern(/^\d{10}$/).optional(),
  email: Joi.string().email().optional(),
})

export const updateUserSchema = Joi.object({
  name: Joi.string().min(3).max(20).optional(),
  email: Joi.string().email().optional(),
  mobile_number: Joi.number().integer().optional(),
  DOB: Joi.date().optional(),
  isActive: Joi.boolean().optional(),
}).min(1)

export const deleteUserSchema = Joi.object({
  userId: Joi.string().required(),
})
