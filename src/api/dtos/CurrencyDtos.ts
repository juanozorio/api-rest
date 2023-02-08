interface ICurrency {
    "code": string
    "codein": string
    "name": string
    "high": number
    "low": string
    "varBid": string,
    "pctChange": string
    "bid": string
    "ask": string
    "timestamp": number
    "create_date": Date
}

export interface ICurrencyList {
    "USD": ICurrency
    "USDT": ICurrency
    "CAD": ICurrency
    "GBP": ICurrency
    "ARS": ICurrency
    "BTC": ICurrency
    "LTC": ICurrency
    "EUR": ICurrency
    "JPY": ICurrency
    "CHF": ICurrency
    "AUD": ICurrency
    "CNY": ICurrency
    "ILS": ICurrency
    "ETH": ICurrency
    "XRP": ICurrency
    "DOGE": ICurrency

}

export interface ISingleCurrency {
    code: string;
}