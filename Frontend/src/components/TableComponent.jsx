import React, { useEffect, useState } from 'react'
import axios from 'axios'

function TableComponent() {

  const [tableData, setTableData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/api/table')
      .then((response) => {
        setTableData(response.data)
      })
      .catch((err) => {
        console.error('Error Fetching Table data', err)
      })

  }, [])


  return (
    <div className="sm:rounded-lg bg-white p-4 md:p-6 shadow-lg rounded-md w-full md:w-2/3 lg:w-3/4 mt-4 overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

          <tr >
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.id}
              </th>
              <td className="px-6 py-4">
                {item.name}
              </td>
              <td className="px-6 py-4">
                {item.quantity}
              </td>
              <td className="px-6 py-4">
                {item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}

export default TableComponent
