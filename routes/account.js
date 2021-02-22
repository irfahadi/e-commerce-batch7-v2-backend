import { Router } from "express";
import accountCtrl from "../controller/account.controller";

const router = Router()
router.get('/', accountCtrl.readAccount)

export default (router)