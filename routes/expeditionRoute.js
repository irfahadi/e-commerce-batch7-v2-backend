import {Router} from 'express';
import expeditionRouteCtrl from '../controllers/expeditionRoute.controller'

const router = Router()

router.get('/', expeditionRouteCtrl.readExpeditionRouteMethod);
router.get('/:exroId', expeditionRouteCtrl.findExpeditionRouteMethod);
router.post('/', expeditionRouteCtrl.addExpeditionRouteMethod);
router.delete('/:exroId', expeditionRouteCtrl.deleteExpeditionRouteMethod);
router.put('/:exroId', expeditionRouteCtrl.editExpeditionRouteMethod);

export default router;