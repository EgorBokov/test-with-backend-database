import { Router } from 'express'
import { promotionRouter } from './promotionRotuer'

export const router = Router()

router.use('/promotion', promotionRouter)
