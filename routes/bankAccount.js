const Router = require('express').Router
const router = Router()
import {getBankAccount,insertBankAccount,updateBankAccount,deleteBankAccount} from '../controllers/bankAccountController'
router.get('/',getBankAccount)
router.post('/',insertBankAccount)
router.put('/',updateBankAccount)
router.delete('/',deleteBankAccount)

export default router