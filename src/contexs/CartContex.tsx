import React, { createContext, useEffect, useState } from "react"
import { Product } from "../interfaces/product"
import { CartItem } from "../interfaces/cart"
import instance from "../apis"
import api from "../apis"

type Props = {
  children: React.ReactNode
}

interface ShoppingContextType {
  cartQty: number
  totalPrice: number
  cartItems: CartItem[]
  increaseQty: (id: number | string) => void
  decreaseQty: (id: number | string) => void
  addCartItem: (item: Product) => void
  removeCartItem: (id: number | string) => void
  clearCart: () => void
}

export const CartContextCT = createContext<ShoppingContextType>(
  {} as ShoppingContextType
)

const CartContext = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const cartQty = cartItems.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  )
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  )

  useEffect(() => {
    (async () => {
      const { data } = await instance.get(`carts`)
      setCartItems(data)
    })()
  }, [])
  const updateCartItem = async (item: CartItem) => {
    try {
      await api.put(`/carts/${item.id}`, item)
    } catch (error) {
      console.error("Failed to update cart item:", error)
    }
  }

  const increaseQty = async (id: number | string) => {
    const currentCartItem = cartItems.find((item) => item.id === id)
    if (currentCartItem) {
      const updatedItem = {
        ...currentCartItem,
        quantity: currentCartItem.quantity + 1,
      }
      const newItems = cartItems.map((item) =>
        item.id === id ? updatedItem : item
      )
      setCartItems(newItems)
      await updateCartItem(updatedItem)
    }
  }

  const decreaseQty = async (id: number | string) => {
    const currentCartItem = cartItems.find((item) => item.id === id)
    if (currentCartItem) {
      if (currentCartItem.quantity === 1) {
        removeCartItem(id)
      } else {
        const updatedItem = {
          ...currentCartItem,
          quantity: currentCartItem.quantity - 1,
        }
        const newItems = cartItems.map((item) =>
          item.id === id ? updatedItem : item
        )
        setCartItems(newItems)
        await updateCartItem(updatedItem)
      }
    }
  }

  const addCartItem = async (product: Product) => {
    if (product) {
      const currentCartItem = cartItems.find((item) => item.id === product.id)
      if (currentCartItem) {
        const updatedItem = {
          ...currentCartItem,
          quantity: currentCartItem.quantity + 1,
        }
        const newItems = cartItems.map((item) =>
          item.id === product.id ? updatedItem : item
        )
        setCartItems(newItems)
        await updateCartItem(updatedItem)
      } else {
        const newItem: CartItem = {
          ...product,
          id: product.id!,
          name: product.name!,
          price: product.price,
          quantity: product.quantity || 1, // Default to 1 if quantity is not provided
        }
        setCartItems([...cartItems, newItem])

        try {
          await api.post("/carts", newItem)
        } catch (error) {
          console.error("Failed to add new cart item:", error)
        }
      }
    }
  }

  const removeCartItem = (id: number | string) => {
    (async () => {
      if (confirm("Bạn có muốn xóa không?")) {
        await api.delete(`carts/${id}`)
        setCartItems(cartItems.filter((item) => item.id !== id && id))
        alert("Xóa thành công")
      }
    })()
  }
  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContextCT.Provider
      value={{
        cartItems,
        cartQty,
        totalPrice,
        increaseQty,
        decreaseQty,
        addCartItem,
        clearCart,
        removeCartItem,
      }}
    >
      {children}
    </CartContextCT.Provider>
  )
}

export default CartContext
