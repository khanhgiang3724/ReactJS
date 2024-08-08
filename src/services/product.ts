import api from "../apis"
import { Product } from "../interfaces/product"

export const addProduct = async (product:Product) => {
    try {
        const {data} = await api.post(`/products`,product)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const editProduct = async (product:Product) => {
    try {
        const {data} = await api.put(`/products/${product.id}`,product)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getIdProduct = async (id:string) => {
    try {
        const {data} = await api.get(`/products/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getAllProduct = async () => {
    try {
        const {data} = await api.get(`/products`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = async (id: number) => {
    try {
        const {data} = await api.delete(`/products/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}