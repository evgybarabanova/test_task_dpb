import axios from "axios"

export default function retrieveRate(from, to) {

  const url = `https://rest.coinapi.io/v1/exchangerate/${from}/${to}`

  return axios.get(url, {
    headers: {
      'X-CoinAPI-Key': 'FC9F038B-402F-4CE0-898B-A27CD84E5A72',
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
