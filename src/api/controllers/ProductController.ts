import { Request, Response } from 'express';
import ProductRepository from '../../repositories/ProductRepository';

class ProductController {
  create = async (req: Request, res: Response) => {
    const { name, price } = req.body;

    const productId = await ProductRepository.create({ name, price })

    return res.json({ message: "Product created", id: productId }).status(201);
  }

  list = async (req: Request, res: Response) => {
    const getProducts = await ProductRepository.list();

    return res.json( getProducts ).status(201);
  }

  delete = async (req: Request, res: Response) => {
    const id = req.params.id
    
    const product = await ProductRepository.findById(id);
    
    if (!product) {
        return res.status(404).send("Product not found");
    }

    await ProductRepository.delete(id);

    return res.json({ message: "Product Deleted!"})
  }
}

export default new ProductController();