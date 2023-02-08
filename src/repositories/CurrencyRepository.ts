import axios from "axios";
import { CurrencyInterface } from "../api/interfaces/CurrencyInterface";
import { ICurrencyList, ISingleCurrency } from "../api/dtos/CurrencyDtos";

class CurrencyRepository implements CurrencyInterface {
  async getAllCurrencies(): Promise<ICurrencyList> {
    try {
        const response = await axios.get("https://economia.awesomeapi.com.br/all");
        return response.data;
      } catch (error) {
        return error;
      }
  }

  async getCurrency(params: ISingleCurrency): Promise<Response> {
    try {
      const response = await axios.get(`https://economia.awesomeapi.com.br/${params.code}`);
      return response.data;
    } catch(error) {
      return error;
    }
  }
}

export default new CurrencyRepository();