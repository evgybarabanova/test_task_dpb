import axios from "axios"

export default function retrieveRate(from, to) {

  const url = `https://rest.coinapi.io/v1/exchangerate/${from}/${to}`

  return axios.get(url, {
    headers: {
      'X-CoinAPI-Key': '4F117BC9-4800-4CAF-8401-C382862613A0',
    }
  })
    .then(res => {

      const { rate } = res.data

      return rate
    })
    .catch(error => {
      const message = error.response.data.error

      throw new Error(message)
    })
}
