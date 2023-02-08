import { connection as database } from '../database/connection';
import { ICreateProduct } from '../api/dtos/ProductDtos';

class ProductRepository {
  async create(params: ICreateProduct): Promise<string | undefined> {
    const [product] = await database.table('product')
      .insert({
        name: params.name,
        price: params.price
      })
      .returning("id");

    return product.id;
  }

  async list() {
    return database.select().table('product');
  }

  async delete(id:string) {
    return database.table('product').where('id', id).delete();
  }

  async findById(id: string) {
    return database.table('product')
      .where('id', id)
      .first();
  }
}

export default new ProductRepository();