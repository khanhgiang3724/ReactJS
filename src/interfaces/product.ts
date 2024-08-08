export interface Product {
    id?: number | string
    name: string
    description: string
    price: number 
    sale?: number
    short_description?: string
    rating?: number
    category?: string
    thumbnail: string
    images: string[]
}