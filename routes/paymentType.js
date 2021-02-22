const Router = require('express').Router
const router = Router()
import {getPaymentType,insertPaymentType,updatePaymentType,deletePaymentType} from '../controllers/paymentTypeController'

router.get('/',getPaymentType)
router.post('/',insertPaymentType)
router.put('/',updatePaymentType)
router.delete('/',deletePaymentType)

export default router