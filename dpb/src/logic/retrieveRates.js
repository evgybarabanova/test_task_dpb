import axios from "axios";

export default function retrieveRates(base) {

  const url = `https://rest.coinapi.io/v1/exchangerate/${base}`

  return axios.get(url, {
    headers: {
      'X-CoinAPI-Key': 'FC9F038B-402F-4CE0-898B-A27CD84E5A72',
    }
  })
    .then(res => {

      const rates = res.data.rates

      return rates

      //console.log(res.data.rates);

    })
    .catch(error => {
      const message = error.response.data.error

      throw new Error(message)
    })
}

