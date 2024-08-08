import api from "../apis"
import { Category } from "../interfaces/category"

export const CategoryAdd = async (category:Category) => {
    try {
        const {data} = await api.post(`/categorys`,category)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const CategoryList = async () => {
    try {
        const {data} = await api.get(`/categorys`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const editCategory = async (category:Category) => {
    try {
        const {data} = await api.put(`/categorys/${category.id}`,category)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const deleteCategory = async (id: number) => {
    try {
        const {data} = await api.delete(`/categorys/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getIdCategory = async (id:string) => {
    try {
        const {data} = await api.get(`/categorys/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}