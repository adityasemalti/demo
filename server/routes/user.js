import express from 'express'
import { create, getAllUsers } from '../controller/user.js'


const router = express.Router()

router.post('/create',create)
router.get('/users', getAllUsers)

export default router;