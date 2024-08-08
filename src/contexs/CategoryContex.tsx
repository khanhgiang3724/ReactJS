import React, { createContext, useEffect, useState } from 'react'
import { Category } from '../interfaces/category'
import { CategoryAdd, CategoryList, deleteCategory, editCategory } from '../services/category'
import { useNavigate } from 'react-router-dom'

type Props = {
    children: React.ReactNode
}
interface TypeCategory {
    delCate: (id: number) => void
    addCate: (data: Category) => void
    editCate: (data: Category) => void
    categorys: Category[]
}
export const CategoryCT = createContext<TypeCategory>({} as TypeCategory)
const CategoryContex = ({children}: Props) => {
    const navigate = useNavigate()
  const [categorys, setCategorys] = useState<Category[]>([])
  useEffect(() => {
    (async () => {
      const data = await CategoryList()
      setCategorys(data)
    })()
  }, [])
  const addCate = (data: Category) => {
    (async () => {
      const category = await CategoryAdd(data)
      setCategorys([...categorys, category])
      alert("Thêm danh mục thành công")
      navigate("/admin/listCategory")
    })()
  }
  const editCate = (data: Category) => {
    (async () => {
      const cate = await editCategory(data);
      setCategorys(categorys.map((item) => (item.id === cate.id ? cate : item)));
      alert("Cập nhật danh mục thành công")
      navigate("/admin/listCategory")
    })();
  };

  const delCate = (id: number) => {
    (async () => {
      if (confirm("Ban co muon xoa khong")) {
        await deleteCategory(id)
        setCategorys(categorys.filter((item) => item.id !== id && id))
        alert("Xóa danh mục thành công")
      }
    })()
  }
  return (
    <CategoryCT.Provider value={{categorys,addCate,editCate,delCate}}>{children}</CategoryCT.Provider>
  )
}

export default CategoryContex
