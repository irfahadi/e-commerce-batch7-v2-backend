import { Router} from 'express'
import statusController from '../controller/status.controller'

const router = Router()
router.get('/', statusController.readStatus)

export default (router)