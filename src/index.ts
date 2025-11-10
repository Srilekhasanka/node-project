import express, { Application } from 'express'
import { userRoutes } from '../src/user/user.routes'

const app: Application = express()
const PORT = 3000

app.use(express.json())
app.use('/api/users', userRoutes)

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
