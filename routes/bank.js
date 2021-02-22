import {getBank,insertBank,updateBank,deleteBank} from '../controllers/bankController'
const Router = require('express').Router
const router = Router()

router.get('/',getBank)
router.post('/',insertBank)
router.put('/',updateBank)
router.delete('/',deleteBank)

export default router