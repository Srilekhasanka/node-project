import { Router } from 'express'
import { userController } from './user.controller'

const router = Router()

router.post('/', userController.create)
router.get('/', userController.get)
router.put('/:userId', userController.update)
router.delete('/:userId', userController.delete)

export { router as userRoutes }
