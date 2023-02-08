import { Application, Request, Response } from 'express';

import ProductRoutes from './ProductRoutes';
import CurrencyRoutes from './CurrencyRoutes';

import { ensureDatabaseConnection } from '../../database/connection';

export default (app: Application) => {
  app.get('/', async (req: Request, res: Response) => {
    const dbConnection = await ensureDatabaseConnection();

    const response = {
      status: 'Running: ' + new Date(),
      database_status: dbConnection
    }

    return res.send(response).status(200);
  });

  app.use('/product',ProductRoutes)
  app.use('/currency',CurrencyRoutes)
};
