import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import { validateCreateProduct } from './validators/CreateProductValidator';

const router = Router();

router.post('/', validateCreateProduct, ProductController.create);
router.get('/', ProductController.list)
router.delete('/:id', ProductController.delete);

export default router;
