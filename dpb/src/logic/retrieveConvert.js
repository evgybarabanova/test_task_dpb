import axios from "axios";

export default function retrieveConvert() {

    const url = "http://api.coinlayer.com/live?access_key=9a1377ea5ba119859e066dab9148b6be"
    
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
