import { Router } from 'express';
import CurrencyController from '../controllers/CurrencyController';

const router = Router();

router.get('/', CurrencyController.listAllCurrencies);
router.get('/:code', CurrencyController.listCurrency);

export default router;