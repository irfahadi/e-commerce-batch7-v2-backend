import {Router} from 'express';
import expeditionCtrl from '../controllers/expedition.controller'

const router = Router()

router.get('/', expeditionCtrl.readExpeditionMethod);
router.get('/:expeId', expeditionCtrl.findExpeditionMethod);
router.post('/', expeditionCtrl.addExpeditionMethod);
router.delete('/:expeId', expeditionCtrl.deleteExpeditionMethod);
router.put('/:expeId', expeditionCtrl.editExpeditionMethod);

export default router;