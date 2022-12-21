import React, { useEffect, useState } from "react"
import './Current.css'
import { retrieveRates } from "../logic"

export default function Current() {
  const [rates, setRates] = useState([])
  const [selectedFiatSymbol, setSelectedFiatSymbol] = useState('');

  useEffect(() => {
    if (selectedFiatSymbol)
      try {
        retrieveRates(selectedFiatSymbol)
          .then((rates) => {
            setRates(rates);
          })
          .catch((error) => alert(error.message));
      } catch (error) {
        alert(error.message);
      }
  }, [selectedFiatSymbol])

  const handleCurrencySelectorChanged = event => {
    setSelectedFiatSymbol(event.target.value);
  };

  return (
    <>
      <h1>Today's Cryptocurrency Prices</h1>
      <h2>Currency crypto price in 1 USD</h2>
      <div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="base"
            name="base"
            onChange={handleCurrencySelectorChanged}
            className="h-full px-4 py-2 pl-2 text-gray-500 bg-transparent border-t border-b border-r border-transparent border-gray-300 focus:ring-indigo-500 bo focus:border-indigo-500 pr-7 sm:text-sm rounded-r-md">
            <option value="">--Choose and option--</option>
            <option value="USD">1 USD</option>
            <option value="EUR">1 EUR</option>
            <option value="ETH">1 ETH</option>
            <option value="BCH">1 BCH</option>
          </select>
        </div>
      </div>

      <table className="table p-4 bg-white rounded-lg shadow">
        <thead>
          <tr>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Coin
            </th>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate, index) => {
            return (
              <tr key={index} className="text-gray-700">
                <td className="border-b-2 p-4 dark:border-dark-5">
                  {rate.asset_id_quote}
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                  {rate.rate}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </>
  )
}