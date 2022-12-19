import axios from "axios";

export default function retrieveConvert() {

    const url = "http://api.coinlayer.com/live?access_key=7e444fc79c597903f0050b547a62bfc4"
    
    if (typeof url !== 'string') throw new Error('url is not a string')

    else if (!url.trim().length) throw new Error('url is empty or blank')
  
    return axios.get(url)
      .then(response => {
        const { data: rates } = response

        return rates
  
      })
      .catch(error => {
        const message = error.response.data.error
  
        throw new Error(message)
      })
}
