import axios from "axios"

export default function convertCurrencies(amount, symbol) {
 
     const url = 'https://pro-api.coinmarketcap.com/v2/tools/price-conversion?CMC_PRO_API_KEY=b9c31903-777f-4b31-ba23-cbc84230c61b' 

    // if (typeof amount !== number) throw new Error('amount is not a number')

    // else if (!amount.trim().length) throw new Error('amount is empty or blank')

    // else if (typeof symbol !== number) throw new Error('symbol is not a number')

    // else if (!symbol.trim().length) throw new Error('symbol is empty or blank')

    return axios.get(url, {
        params: {
            amount: amount,
            symbol: symbol
          },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    }
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err.response);
  })
}
