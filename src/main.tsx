import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./App.css"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import ProductContex from "./contexs/ProductContex.tsx"
import CategoryContex from "./contexs/CategoryContex.tsx"
import CartContext from "./contexs/CartContex.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContex>
        <CategoryContex>
          <CartContext>
            <App />
          </CartContext>
        </CategoryContex>
      </ProductContex>
    </BrowserRouter>
  </React.StrictMode>
)
