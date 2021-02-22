import {getWallet,insertWallet,updateWallet,deleteWallet} from '../controllers/walletController'
const Router = require('express').Router
const router = Router()

router.get('/',getWallet)
router.post('/',insertWallet)
router.put('/',updateWallet)
router.delete('/',deleteWallet)

export default router