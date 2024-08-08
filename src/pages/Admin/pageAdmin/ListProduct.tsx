import React, { useContext } from 'react'
import { ProductCT } from '../../../contexs/ProductContex'
import { Link } from 'react-router-dom'
import { Product } from '../../../interfaces/product'

const ListProduct = () => {
    const {products,onDel} = useContext(ProductCT)
  return (
    <div>
        <div className='w-auto '>
            <div className="overflow-x-auto">
            <Link to="/admin/add"
                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 ml-10 mt-4"
            >
                Add Product
            </Link>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                <tr >
                    <th className=" px-4 py-2 font-medium text-gray-900">Name</th>
                    <th className=" px-4 py-2 font-medium text-gray-900">Price</th>
                    <th className=" px-4 py-2 font-medium text-gray-900">Image</th>
                    <th className=" px-4 py-2 font-medium text-gray-900">Description</th>
                    <th className=" px-4 py-2 font-medium text-gray-900">Category</th>
                    <th className="px-4 py-2"></th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {products.map((item: Product) => (
                         <tr key={item.id}>
                         <td className=" px-4 py-2 font-medium text-gray-900">{item.name}</td>
                         <td className=" px-4 py-2 text-gray-700">{item.price}</td>
                         <td className=" px-4 py-2 text-gray-700">
                             <img src={item.thumbnail} alt="" />
                         </td>
                         <td className=" px-4 py-2 text-gray-700">{item.short_description}</td>
                         <td className=" px-4 py-2 text-gray-700">{item.category}</td>
                         <td className="whitespace-nowrap px-4 py-2">
                             <Link
                             to={`/admin/edit/${item.id}`}
                             className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                             >
                             View
                             </Link>
                             <button
                             onClick={() => onDel(Number(item.id))}
                             className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                             >
                             Delete
                             </button>
                         </td>
                         </tr>
                    ))}
                   

                </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}

export default ListProduct
