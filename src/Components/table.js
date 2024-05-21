import React from 'react';

export const currentRateDate = [
  {
    currency: 'BTCUSDT',
    digital_currency: 'Bitcoin',
    amount: '$23,495',
    commission: '+23.4%',
  },
  {
    currency: 'AXSUSDT',
    digital_currency: 'Axie Infinity',
    amount: '$15.9',
    commission: '-7.8%',
  },
  {
    currency: 'ETHUSDT',
    digital_currency: 'Ethereum',
    amount: '$15,978',
    commission: '-0.3%',
  },
  {
    currency: 'SOLUSDT',
    digital_currency: 'Solana',
    amount: '$495',
    commission: '+11.1%',
  }
];

function Table() {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Currency
            </th>
            <th scope="col" className="px-6 py-3">
              Digital Currency
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Commission
            </th>
          </tr>
        </thead>
        <tbody>
          {currentRateDate.map((data, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {data.currency}
              </th>
              <td className="px-6 py-4">{data.digital_currency}</td>
              <td className="px-6 py-4">{data.amount}</td>
              <td className="px-6 py-4">{data.commission}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
