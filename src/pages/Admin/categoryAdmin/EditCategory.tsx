import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Category } from '../../../interfaces/category';
import { useForm } from 'react-hook-form';
import { getIdCategory } from '../../../services/category';
import { CategoryCT } from '../../../contexs/CategoryContex';

const EditCategory = () => {
    const [category, setCategory] = useState<Category | null>(null);
    const {editCate} = useContext(CategoryCT)
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<Category>({});

    const onSubmit = (data: Category) => {
            editCate({ ...data, id })
    }

    useEffect(() => {
            (async () => {
                    const data = await getIdCategory(`${id}`);
                    setCategory(data);
                    reset(data);
                })()
    },[])
  return (
    <div>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Edit Category</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label htmlFor="name">Name</label>
                        <div className="relative">
                            <input
                                id="name"
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter category"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className='text-red-700 text-[12px]'>Tên danh mục không được bỏ trống</span>}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            Update Category
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default EditCategory
