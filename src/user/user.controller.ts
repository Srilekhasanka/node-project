import { Request, Response } from 'express'

let users: any[] = []

export const getUsers = (req: Request, res: Response) => {
  res.json(users)
}

export const getUserById = (req: Request, res: Response) => {
  const id = req.params.id
  if (!id) return res.status(400).json({ message: 'ID parameter is required' })
  const user = users.find(u => u.id === parseInt(id))
  if (!user) return res.status(404).json({ message: 'User not found' })
  res.json(user)
}

export const createUser = (req: Request, res: Response) => {
  const newUser = { id: Date.now(), ...req.body }
  users.push(newUser)
  res.status(201).json(newUser)
}

export const updateUser = (req: Request, res: Response) => {
  const id = req.params.id
  if (!id) return res.status(400).json({ message: 'ID parameter is required' })
  const index = users.findIndex(u => u.id === parseInt(id))
  if (index === -1) return res.status(404).json({ message: 'User not found' })
  users[index] = { ...users[index], ...req.body }
  res.json(users[index])
}

export const deleteUser = (req: Request, res: Response) => {
  const id = req.params.id
  if (!id) return res.status(400).json({ message: 'ID parameter is required' })
  users = users.filter(u => u.id !== parseInt(id))
  res.status(204).send()
}
