import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Product } from '../interfaces/product'
import { addProduct, deleteProduct, editProduct, getAllProduct } from '../services/product'
type Props = {
    children: React.ReactNode
}
interface TypeProduct {
    onDel: (id: number) => void
    onAdd: (data: Product) => void
    onEdit: (data: Product) => void
    products: Product[]
}
export const ProductCT = createContext<TypeProduct>({} as TypeProduct)
const ProductContex = ({children}: Props) => {
    const navigate = useNavigate()
    const [products,setProducts] = useState<Product[]>([])
    useEffect(() => {
        (async () => {
          const data = await getAllProduct()
          setProducts(data)
          console.log(data)
        })()
      }, [])
      const onDel = (id: number) => {
        (async () => {
          if (confirm("Ban co muon xoa khong")) {
            await deleteProduct(id)
            setProducts(products.filter((item) => item.id !== id && id))
            alert("Xóa thành công")
          }
        })()
      }
    
      const onAdd = (data: Product) => {
        (async () => {
          const newProduct = await addProduct(data);
          setProducts([...products, newProduct]);
          alert("Thêm thành công")
          navigate("/admin/list")
        })();
      };
    
      const onEdit = (data: Product) => {
        (async () => {
          const product = await editProduct(data);
          setProducts(products.map((item) => (item.id === product.id ? product : item)));
          navigate("/admin/list")
          alert("Cập nhật thành công")
        })();
      };
  return (
    <ProductCT.Provider value={{products,onAdd,onDel,onEdit}}>{children}</ProductCT.Provider>
  )
}

export default ProductContex
