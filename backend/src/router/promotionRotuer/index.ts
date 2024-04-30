import { Router } from 'express'
import { PromotionController } from '../../controllers/promotionController'

export const promotionRouter = Router()

promotionRouter.get('/', PromotionController.getAllPromotions)