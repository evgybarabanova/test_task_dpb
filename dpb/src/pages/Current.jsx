import React, { useEffect, useState } from "react"
import './Current.css'
import { retrieveConvert } from "../logic"

export default function Current() {
  const [rates, setRates] = useState([])

  useEffect(() => {
    try {
      retrieveConvert()
        .then((rates) => {
          setRates(rates);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }, [])

  return (
    <>
      <h1>Today's Cryptocurrency Prices</h1>
      <h2>Currency crypto price in 1 USD</h2>
      <div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select id="Currency" name="currency" className="h-full px-4 py-2 pl-2 text-gray-500 bg-transparent border-t border-b border-r border-transparent border-gray-300 focus:ring-indigo-500 bo focus:border-indigo-500 pr-7 sm:text-sm rounded-r-md">
            <option>
              USD
            </option>
            <option>
              EUR
            </option>
          </select>
        </div>
      </div>
      <table className="table p-4 bg-white rounded-lg shadow">
        <thead>
          <tr>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              #
            </th>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Coin
            </th>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
           <tr className="text-gray-700">
              <td className="border-b-2 p-4 dark:border-dark-5">
                1
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">
               ETH
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">
                11111
              </td>
            </tr> 
        </tbody>
      </table>

    </>
  )
}