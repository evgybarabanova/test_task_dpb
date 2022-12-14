import React from 'react'
import { Link } from 'react-router-dom'
import './Converter.css'
import { retrieveConvert } from '../logic'

export default function Converter() {

    const handleConverterCurrency = (event)=> {
        event.preventDefault();

        const currency = event.target.currency.value
        const crypto = event.target.crypto.value

        try {
            retrieveConvert(currency, crypto)
              .then(() => {})
              .catch((error) => {
                alert(error.message);
              });
          } catch (error) {
            alert(error.message);
          }
    }

    return (
        <>
            <h1>Currency Converter</h1>
            <h3>Amount</h3>
            <form>
                <div className='currency'>
                    <input
                    name='currency'
                     type='text' />
                    <select>
                        <option value='usd'>USD</option>
                        <option value='eur'>EUR</option>
                        <option value='rub'>RUB</option>
                    </select>
                </div>
                <img></img>
                <div className='crypto'>
                    <input
                     type='text' 
                     name='crypto'
                     />
                    <select>
                        <option value='eth'>ETH</option>
                        <option value='btc'>BTC</option>
                    </select>
                </div>
                <Link to='/current'>Current exchange rates</Link>
            </form>
        </>
    )
}
