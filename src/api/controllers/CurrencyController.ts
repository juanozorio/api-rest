import CurrencyRepository from "../../repositories/CurrencyRepository";
import { Request, Response } from 'express';

class CurrencyController {
    listAllCurrencies = async (req: Request, res: Response): Promise<Response> => {
        const currencies = await CurrencyRepository.getAllCurrencies();
        return res.json(currencies);
    }

    listCurrency = async (req: Request, res: Response): Promise<Response> => {
        const code = req.params.code
        const currency = await CurrencyRepository.getCurrency({code});

        return res.json(currency);
    }
}

export default new CurrencyController();