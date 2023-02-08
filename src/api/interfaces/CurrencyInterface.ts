import { ICurrencyList } from "../dtos/CurrencyDtos";

export interface CurrencyInterface {
    getAllCurrencies(): Promise<ICurrencyList> 
}