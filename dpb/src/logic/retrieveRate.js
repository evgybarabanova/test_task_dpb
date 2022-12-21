import axios from "axios"

export default function retrieveRate(from, to) {

  const url = `https://rest.coinapi.io/v1/exchangerate/${from}/${to}`

  return axios.get(url, {
    headers: {
      'X-CoinAPI-Key': 'A0837D95-FD2D-477E-B933-BFE1F873ECF2',
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
