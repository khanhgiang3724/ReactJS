import React, { useContext } from "react"
import { CartContextCT } from "../../contexs/CartContex"
import { CartItem } from "./../../interfaces/cart"
import { Link } from "react-router-dom"

const Cart = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    cartQty,
    removeCartItem,
    totalPrice,
  } = useContext(CartContextCT)
  return (
    <div>
      <div className="w-full lg:py-7 mb:py-[18px] bg-[#F4F4F4] grid place-items-center -mt-[1px]">
        <div className="flex -translate-x-[1px] items-center gap-x-4 text-sm">
          <div className="flex items-center gap-x-2">
            <img
              className="w-[30px] h-[30px] p-2 text-white bg-[#05422C] rounded-[50%]"
              src="../../../image/cart_icon.png"
              alt=""
            />
            <span>Shopping Cart</span>
          </div>
          <div className="lg:w-[74.5px] mb:min-w-[39.5px] h-[1px] bg-[#C3D2CC]"></div>
          <div className="flex items-center gap-x-2">
            <img
              className="w-[30px] h-[30px] p-2 text-white bg-white rounded-[50%]"
              src="../../../image/checkout.png"
              alt=""
            />
            <span className="hidden lg:block">Checkout</span>
          </div>
          <div className="lg:w-[74.5px] mb:min-w-[39.5px] h-[1px] bg-[#C3D2CC]"></div>
          <div className="flex items-center gap-x-2">
            <img
              className="w-[30px] h-[30px] p-2 text-white bg-white rounded-[50%]"
              src="../../../image/order.png"
              alt=""
            />
            <span className="hidden lg:block">Order Complete</span>
          </div>
        </div>
      </div>

      {/* <!-- main cart --> */}
      <main className="lg:w-[1170px] mb:w-[342px] lg:mt-8 mb:mt-6 mx-auto grid lg:grid-cols-[686px_420px] mb:grid-cols-[100%] justify-between *:w-full pb-72">
        {/* <!-- left --> */}
        <div>
          <span className="text-xl flex mb-[1px] items-center justify-between pb-6 border-b">
            Your Cart{" "}
            <p className="text-[#9D9EA2] lg:text-base  mb:text-sm">
              ({cartQty})
            </p>
          </span>
          {/* <!-- list items --> */}
          <div className="flex flex-col border-b lg:pb-[22px] mb:pb-3">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item: CartItem) => (
                <section
                  key={item.id}
                  className="flex lg:mt-[23px] mb:mt-[15px] gap-x-4"
                >
                  <img
                    className="border rounded w-12 h-12 p-1"
                    src={item.thumbnail}
                    alt={item.name}
                  />

                  {/* <!-- change quantity, name , price --> */}
                  <div className="relative w-full flex flex-col justify-between gap-y-2.5 lg:gap-y-3">
                    <div className="lg:py-2 mb-0.5 lg:mb-0 flex lg:flex-row flex-col lg:items-center gap-x-4">
                      <span className="text-[#262626] text-sm">
                        {item.name}
                      </span>
                      <div className="relative lg:flex lg:items-center lg:w-full">
                        <div className="flex items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                          <button
                            className="w-6 h-6 flex items-center justify-center"
                            onClick={() => decreaseQty(item.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-minus text-xs"
                            >
                              <path d="M5 12h14" />
                            </svg>
                          </button>
                          <div className="bg-[#F4F4F4] text-sm rounded px-3 py-1 mx-2">
                            {item.quantity}
                          </div>
                          <button
                            className="w-6 h-6 flex items-center justify-center"
                            onClick={() => increaseQty(item.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-plus text-xs"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                          </button>
                        </div>
                        <div className="ml-8">
                          <span className="text-sm">${item.price}</span>
                        </div>

                        {/* <!-- price and remove button --> */}
                        <div className="flex items-center gap-x-2 ml-auto">
                          <span className="text-[#262626] text-sm">
                            ${item.quantity * item.price}
                          </span>
                          <button
                            onClick={() => removeCartItem(item.id)}
                            className="w-6 h-6 rounded-full border text-[#000000] font-light text-xs grid place-items-center"
                          >
                            x
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              ))
            ) : (
              <div className="text-center py-10 text-[#9D9EA2]">
                Your cart is currently empty.
              </div>
            )}
            {/* <!-- subtotal --> */}
            <div className="w-full flex justify-between text-sm pt-4 lg:pt-4 border-t">
              <span className="text-[#262626]">Subtotal</span>
              <span>${totalPrice}</span>
            </div>
          </div>
        </div>

        {/* <!-- right --> */}
        <div className="hidden lg:block">
          <div className="w-full lg:p-6 mb:p-5 border rounded-2xl flex flex-col gap-y-[3px]">
            <div className="flex flex-col gap-y-4">
              <section className="flex justify-between text-sm">
                <span className="text-[#9D9EA2]">Subtotal </span>
                <p>${totalPrice}</p>
              </section>
              <section className="flex justify-between text-sm">
                <span className="text-[#9D9EA2]">Shipping Costs </span>
                <p>$50.00</p>
              </section>
            </div>
            {/* <!-- voucher --> */}
            <div className="flex items-center justify-between gap-x-3 *:h-12 *:border border-b py-[19px]">
              <input
                type="text "
                placeholder="Coupon code"
                className="px-3 py-2 rounded-lg"
              />
              <button className="text-[#17AF26] font-medium bg-[#F3FBF4] whitespace-nowrap text-sm rounded-[100px] px-5 py-2">
                Apply Coupon
              </button>
            </div>
            {/* <!-- *** --> */}
            <div className="my-3">
              <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow={60}
                className="block rounded-full bg-[#F4F4F4]"
              >
                <span
                  className="block h-[7px] rounded-full bg-[#17AF26]"
                  style={{ width: "58%" }}
                ></span>
              </span>
            </div>

            <Link
              to={`/shop`}
              className="font-semibold text-sm underline cursor-pointer my-1 tracking-[-0.1px]"
            >
              Continue Shopping
            </Link>

            <Link to={`/checkout`} className="bg-[#C8C9CB] px-10 h-14 rounded-[100px] text-white flex my-[13px] gap-x-4 place-items-center justify-center">
              <span>Checkout</span>|<span>${totalPrice}</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Cart
