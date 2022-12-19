import React, { useState } from "react"
import { Link } from 'react-router-dom'
import './Converter.css'
import { convertCurrencies } from '../logic'

export default function Converter() {
    const [rates, setRates] = useState([])
    const [symbol, setSymbol] = useState(null)
    const [amount, setAmount] = useState(null)
    const [result, setResult] = useState(null)
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [selectedCrypto, setSelectedCrypto] = useState('');

    const handleConverterCurrency = (event) => {
        event.preventDefault();

        const amount = event.target.amount.value
        const symbol = event.target.symbol.value

        try {
            convertCurrencies(amount, symbol)
                .then((rates) => setRates(rates))
                .catch((error) => {
                    alert(error.message);
                });
        } catch (error) {
            alert(error.message);
        }
    }

    const handleChangeCurrency = event => {
        console.log('Label 👉️', event.target.selectedOptions[0].label);
        console.log(event.target.value);
        setSelectedCurrency(event.target.value);
    };

    const handleChangeCrypto = event => {
        console.log('Label 👉️', event.target.selectedOptions[0].label);
        console.log(event.target.value);
        setSelectedCrypto(event.target.value);
    };

    const handleCalculate = (event) => {
        setResult(rates)
       };

    return (
        <>
            <h1>Currency Converter</h1>
            <form onSubmit={handleConverterCurrency}>

                <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    </div>
                    <input type="number" name="amount" id="amount" value={amount} className="block w-full px-4 py-2 pr-12 border-t border-b border-l border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm" placeholder="0.00" />
                    <div className="absolute inset-y-0 right-0 flex items-center">

                        <select value={symbol} onChange={handleChangeCurrency} className="h-full px-4 py-2 pl-2 text-gray-500 bg-transparent border-t border-b border-r border-transparent border-gray-300 focus:ring-indigo-500 bo focus:border-indigo-500 pr-7 sm:text-sm rounded-r-md">
                            <option value="USD">
                            USD
                            </option>
                            {/* <option value="EUR">
                                EUR
                            </option> */}
                        </select>
                    </div>
                </div>
                <br />
                <div>

                    <div className="relative mt-1 rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        </div>
                        <input type="number" onChange={handleCalculate} className="block w-full px-4 py-2 pr-12 border-t border-b border-l border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm" placeholder="0.00" />
                        <div className="absolute inset-y-0 right-0 flex items-center">

                            <select value={symbol} onChange={handleChangeCrypto} id="symbol" name="symbol" className="h-full px-4 py-2 pl-2 text-gray-500 bg-transparent border-t border-b border-r border-transparent border-gray-300 focus:ring-indigo-500 bo focus:border-indigo-500 pr-7 sm:text-sm rounded-r-md">
                                <option value="">--Choose and option--</option>
                                <option value="ETH">
                                    ETH
                                </option>
                                <option value="BCH">
                                    BCH
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <br />
                <button type="submit">Convert</button>
                <br />
                <Link to='/current'>Current exchange rates</Link>
            </form>
        </>
    )
}
