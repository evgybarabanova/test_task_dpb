import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import './Converter.css'
import { retrieveRate } from '../logic'

export default function Converter() {
    const [rate, setRate] = useState();
    const [selectedFiatSymbol, setSelectedFiatSymbol] = useState('');
    const [selectedCryptoSymbol, setSelectedCryptoSymbol] = useState('');
    const [fiatValue, setFiatValue] = useState('');
    const [cryptoValue, setCryptoValue] = useState('');

    useEffect(() => {
        if (selectedFiatSymbol && selectedCryptoSymbol)
            try {
                retrieveRate(selectedFiatSymbol, selectedCryptoSymbol)
                    .then((rate) => setRate(rate))
                    .catch((error) => {
                        alert(error.message);
                    });
            } catch (error) {
                alert(error.message);
            }

        return () => {

        }
    }, [selectedFiatSymbol, selectedCryptoSymbol])


    const handleCurrencySelectorChanged = event => {
        setSelectedFiatSymbol(event.target.value);
    };

    const handleCurrencyInputChanged = event => {
        setFiatValue(event.target.value)

        if (rate)
            setCryptoValue(event.target.value * rate)
    };

    const handleCryptoSelectorChanged = event => {
        setSelectedCryptoSymbol(event.target.value);
    };

    const handleCryptoInputChanged = event => {
        setCryptoValue(event.target.value)

        if (rate)
            setFiatValue(event.target.value / rate)
    }

    return (
        <>
            <h1>Currency Converter</h1>

            <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                </div>
                <input type="text"
                    id="currency"
                    name="currency"
                    value={fiatValue}
                    onChange={handleCurrencyInputChanged}
                    className="block w-full px-4 py-2 pr-12 border-t border-b border-l border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
                    placeholder="0.00" />
                <div className="absolute inset-y-0 right-0 flex items-center">

                    <select name="from" id="from" onChange={handleCurrencySelectorChanged} className="h-full px-4 py-2 pl-2 text-gray-500 bg-transparent border-t border-b border-r border-transparent border-gray-300 focus:ring-indigo-500 bo focus:border-indigo-500 pr-7 sm:text-sm rounded-r-md">
                        <option value="">--Choose and option--</option>
                        <option value="USD">
                            USD
                        </option>
                        <option value="EUR">
                            EUR
                        </option>
                        <option value="EUR">
                            CNY
                        </option>
                        <option value="EUR">
                            GBP
                        </option>
                    </select>
                </div>
            </div>
            <br />
            <div>

                <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    </div>
                    <input type="text"
                        id="crypto"
                        name="crypto"
                        value={cryptoValue}
                        onChange={handleCryptoInputChanged}
                        className="block w-full px-4 py-2 pr-12 border-t border-b border-l border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
                        placeholder="0.00" />
                    <div className="absolute inset-y-0 right-0 flex items-center">

                        <select name="to" id="to" onChange={handleCryptoSelectorChanged} className="h-full px-4 py-2 pl-2 text-gray-500 bg-transparent border-t border-b border-r border-transparent border-gray-300 focus:ring-indigo-500 bo focus:border-indigo-500 pr-7 sm:text-sm rounded-r-md">
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
            <Link to='/current'>Current exchange rates</Link>
        </>
    )
}
