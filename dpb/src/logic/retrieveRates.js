import axios from "axios";

export default function retrieveRates(base) {

  const url = `https://rest.coinapi.io/v1/exchangerate/${base}`

  return axios.get(url, {
    headers: {
      'X-CoinAPI-Key': 'A0837D95-FD2D-477E-B933-BFE1F873ECF2',
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

