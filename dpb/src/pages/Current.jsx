import React, { useEffect, useState } from "react"
import './Current.css'
import {retrieveConvert} from "../logic"

export default function Current() {
  const [rates, setRates] = useState([])

  useEffect(() => {
    try {
      retrieveConvert()
        .then((rates) => {
          setRates(rates);
          console.log(rates);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <>  
    </>
  )
}
