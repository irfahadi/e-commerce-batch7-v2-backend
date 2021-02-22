const Router = require('express').Router
const router = Router()
import {getWalletTransaction,insertWalletTransaction,updateWalletTransaction,deleteWalletTransaction} from '../controllers/walletTransactionController'

router.get('/',getWalletTransaction)
router.post('/',insertWalletTransaction)
router.put('/',updateWalletTransaction)
router.delete('/',deleteWalletTransaction)

export default router