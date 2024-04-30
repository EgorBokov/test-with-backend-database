import { Request, Response } from 'express'

class ApiPromotionController<Req extends Request, Res extends Response> { 
    getAllPromotions(req: Req, res: Res) { 
        res.json({ message: '123' })
    }
}

export const PromotionController = new ApiPromotionController()