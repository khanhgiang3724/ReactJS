import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Product } from "../../interfaces/product"
import { getIdProduct } from "../../services/product"
import { CartContextCT } from "../../contexs/CartContex"
import { CartItem } from "../../interfaces/cart"
import api from "../../apis"

const ProductDetail = () => {
  const [activeSection, setActiveSection] = useState("description")
  const navigate = useNavigate()
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  useEffect(() => {
    (async () => {
      const data = await getIdProduct(`${id}`)
      setProduct(data)
    })()
  }, [])

  const [quantity, setQuantity] = useState(1)
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }
  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }
  const totalPrice = product ? (product.price * quantity).toFixed(2) : ""

  const { addCartItem, increaseQty } = useContext(CartContextCT)
  const handleAddToCart = async () => {
    if (product) {
      const cartItem: CartItem = {
        ...product,
        name: product.name,
        quantity,
        price: product.price,
        thumbnail: product.thumbnail,
      }

      try {
        // Fetch current cart items
        const cartResponse = await api.get("carts")
        const cartItems = cartResponse.data

        // Check if the item already exists in the cart
        const existingItem = cartItems.find(
          (item: CartItem) => item.id === product.id
        )

        if (existingItem) {
          // Update quantity of the existing item
          await api.patch(`carts/${existingItem.id}`, {
            quantity: existingItem.quantity + cartItem.quantity,
          })
          increaseQty(existingItem.id)
        } else {
          // Add new item to the cart
          await api.post("carts", cartItem)
          addCartItem(cartItem)
        }

        // Navigate to cart page
        navigate("/cart")
      } catch (error) {
        console.log(error)
        alert("An error occurred while adding to cart.")
      }
    }
  }

  return (
    <div>
      {/* <!-- main --> */}
      <main className="w-full *:lg:w-[1312px] *:w-[342px] *:mx-auto *:h-full lg:pt-10 mb:py-6 lg:mt-0 mb:mt-0.5 lg:pb-56">
        <div className="lg:grid lg:grid-cols-[573px_640px] justify-between border-b">
          {/* <!--  desktop : left  , mobile : row 1 --> */}
          <div className="w-full h-full">
            <div className="w-full flex flex-col lg:items-center lg:gap-y-6 gap-y-3.5">
              <div className="handle_show_img_product relative cursor-pointer w-full lg:h-[520px] mb:h-[342px] bg-white border grid place-items-center mb:rounded-xl lg:rounded-3xl">
                <img
                  className="lg:w-[400px] lg:h-[400px] mb:w-[240px] mb:h-[240px]"
                  src={product?.thumbnail}
                  alt=""
                />
                <div className="absolute bottom-0 cursor-pointer hover:scale-110 duration-300 right-0 -translate-x-1/2 -translate-y-1/2 lg:w-10 lg:h-10 mb:w-8 mb:h-8 lg:p-2.5 mb:p-2 rounded-[50%] bg-white grid place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-external-link"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </div>
              </div>
              <div className="*:lg:w-16 *:lg:h-16 *:mb:w-14 *:mb:h-14 *:p-2 *:bg-[#fafafa] *:rounded-lg *:duration-300 *:cursor-pointer flex items-center gap-x-4">
                {product?.images &&
                  product.images.map((item) => (
                    <img src={item} alt="" className="hover:scale-110" />
                  ))}
              </div>
            </div>
          </div>

          {/* <!--desktop: right, mobile : row 2 --> */}
          <div className="h-full w-full *:w-full lg:mt-0 mb:mt-[42px]">
            <div className="flex flex-col lg:gap-y-5">
              {/* <!-- row 1 --> */}
              <div className="lg:h-[211px] flex flex-col lg:gap-y-4">
                <span className="text-[#9D9EA2] lg:text-sm mb:text-xs lg:tracking-[4px] mb:tracking-[2px]">
                  CONCENTRATES
                </span>
                <strong className="lg:text-[32px] lg:mt-[1px] mb:mt-3.5 mb:text-[20px] lg:tracking-[-1.2px] font-medium lg:leading-[38.4px]">
                  {product?.name}
                </strong>
                <div className="*:bg-[#F2F6F4] *:lg:rounded-lg *:lg:px-4 *:lg:py-2.5 *:text-[#05422C] flex items-center lg:gap-x-4 *:text-xs lg:my-0 mb:mt-3 mb:mb-2 *:mb:px-2.5 *:mb:py-[5.5px] mb:gap-2 *:mb:rounded">
                  {/* <button>Indica</button>
                  <button>Sativa 100%</button> */}
                </div>
                <div className="flex lg:items-center mb:items-end justify-between">
                  <span className="font-medium text-[#EB2606] lg:text-xl lg:tracking-[0.7px] mb:text-base flex items-center lg:gap-x-3 lg:mt-0.5 mb:gap-x-2">
                    ${product?.price}
                  </span>
                  <section className="lg:w-[163px] mb:w-[157px] mb:mt-[8px] lg:mt-0 h-[21px] *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                    <div className="flex items-start lg:gap-x-0 mb:gap-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <strong>4.6/5</strong>
                    </div>
                    <div className="flex gap-x-2">
                      <strong>135</strong>
                      <span className="text-[#C8C9CB]">Reviews</span>
                    </div>
                  </section>
                </div>
              </div>

              {/* <!-- row 3 --> */}
              <div className="flex flex-col lg:gap-y-3 mb:gap-y-2 lg:mt-[2px] mt-[3px] lg:pb-0 mb:pb-[21px]">
                <span className="text-xs tracking-[1px] text-[#717378]">
                  DESCRIPTION
                </span>
                <p className="text-[14px] text-[#46494F]">
                  {product?.short_description}
                </p>
              </div>

              {/* <!-- row 5 --> */}
              <div className="lg:p-6 mb:py-5 mb:px-5 rounded-lg *:w-full border rounded-xl lg:-mt-5 -mt-1">
                {/* <!-- price --> */}
                <div className="flex flex-col gap-y-3.5 lg:pb-0 mb:pb-6 tracking-[-0.2px]">
                  <section className="flex justify-between *:font-medium *:text-sm">
                    <span className="flex gap-x-4 text-[#46494F]">
                      {product?.name}
                    </span>
                    <strong>${product?.price}</strong>
                  </section>
                </div>
                {/* <!-- quantity --> */}
                <div className="py-5 flex lg:flex-row mb:flex-col lg:gap-y-0 gap-y-[17px] justify-between lg:items-center mb:items-start border-y lg:mt-[22px]">
                  {/* <!-- up , dow quantity --> */}
                  <div className="border lg:py-2.5 lg:pr-6 lg:pl-4 mb:py-1 mb:pl-2 mb:pr-[18px] *:text-xs flex items-center gap-x-3 rounded-xl">
                    <div className="flex items-center *:w-9 *:h-9 gap-x-1 *:grid *:place-items-center">
                      <button onClick={handleDecrement}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-minus"
                        >
                          <path d="M5 12h14" />
                        </svg>
                      </button>
                      <div className="bg-[#F4F4F4]">{quantity}</div>
                      <button onClick={handleIncrement}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-plus"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* <!-- add cart --> */}
                  <button
                    onClick={handleAddToCart}
                    className="lg:text-base mb:text-sm font-medium flex place-items-center gap-x-4 text-white bg-[#17AF26] rounded-[100px] lg:px-[30px] mb:px-[22px] lg:h-14 mb:h-12"
                  >
                    <span>Add to Cart</span> | <span>${totalPrice}</span>
                  </button>
                </div>
              </div>
            </div>
            {/* 
        <!-- description --> */}
            <div className="flex flex-col border-t lg:py-10 lg:mt-10 mb:py-[34px] mb:mt-8">
              {/* <!-- menu description --> */}
              <ul className="flex items-center justify-between border-b lg:pb-6 mb:pb-5 *:lg:w-[197.33px] *:mb:w-[106px] *:lg:py-2.5 *:mb:py-[7px] *:rounded-[100px] *:border *:place-items-center *:lg:text-base *:mb:text-xs">
                <button
                  className={`grid hover:border-[#05422C] ${
                    activeSection === "description"
                      ? "bg-[#F2F6F4] text-[#05422C] border-[#05422C]"
                      : "text-black border-[#F1F1F1]"
                  }`}
                  onClick={() => setActiveSection("description")}
                >
                  Mô tả
                </button>
                <button
                  className={`flex items-center justify-center gap-x-1 hover:border-[#05422C] ${
                    activeSection === "review"
                      ? "bg-[#F2F6F4] text-[#05422C] border-[#05422C]"
                      : "text-black border-[#F1F1F1]"
                  }`}
                  onClick={() => setActiveSection("review")}
                >
                  Đánh giá
                  <p>(350)</p>
                </button>
                <button
                  className={`grid hover:border-[#05422C] ${
                    activeSection === "refer"
                      ? "bg-[#F2F6F4] text-[#05422C] border-[#05422C]"
                      : "text-black border-[#F1F1F1]"
                  }`}
                  onClick={() => setActiveSection("refer")}
                >
                  Giới thiệu bạn bè
                </button>
              </ul>
              {/* <!-- text description --> */}
              {activeSection === "description" && (
                <div className="show_description">
                  <section className="flex flex-col text-sm text-[#46494F] leading-[21px] gap-y-4 lg:py-6 mb:pt-[19px]">
                    <p>
                      Jungle Diamonds is a slightly indica dominant hybrid
                      strain
                    </p>
                  </section>
                </div>
              )}

              {/* Detail comment */}
              {activeSection === "review" && (
                <section className="show_review">
                  <div className="flex flex-col text-sm text-[#46494F] leading-[21px] gap-y-4 lg:pt-6 mb:pt-5 mb:pb-0">
                    {/* User and time comment */}
                    <div className="border rounded-2xl lg:p-6 mb:p-5">
                      <div className="flex items-center gap-x-4 border-b border-[#F4F4F4] pb-4 mb-4">
                        <img
                          width="36"
                          height="36"
                          src="../Images/vikki_user_icon.png"
                          alt=""
                        />
                        <strong className="text-base text-[#1A1E26] font-medium gap-x-4">
                          Terry Baskey{" "}
                          <span className="text-sm text-[#9D9EA2] font-light">
                            |
                          </span>{" "}
                          <span className="text-sm text-[#9D9EA2] font-light">
                            January 15, 2023
                          </span>
                        </strong>
                      </div>
                      {/* Text comment */}
                      <section className="flex flex-col gap-y-4">
                        <nav className="flex items-center gap-x-1">
                          <img src="../../../image/star.png" alt="" />
                          <img src="../../../image/star.png" alt="" />
                          <img src="../../../image/star.png" alt="" />
                          <img src="../../../image/star.png" alt="" />
                          <img src="../../../image/star.png" alt="" />
                        </nav>
                        <p className="text-[#1A1E26] text-base">
                          Best damn place to buy your cannabis at great prices.
                        </p>
                      </section>
                    </div>
                    {/* Button show more */}
                    <div className="flex justify-center my-1">
                      <button className="px-5 py-2 text-[#17AF26] text-sm rounded-[100px] border hover:bg-[#F9F9F9] cursor-pointer duration-300">
                        Show More
                      </button>
                    </div>
                    {/* Add comment */}
                    <div className="flex flex-col gap-y-6 border-t lg:pt-7 lg:pb-[22px]">
                      <strong className="lg:text-lg">Add A Review</strong>
                      <section className="flex items-center gap-x-4">
                        <span className="mt-0.5">Your rating</span>
                        <span>:</span>
                        <div className="flex items-center w-5 h-5 gap-x-1 cursor-pointer">
                          <img src="../../../image/star_no_color.png" alt="" />
                          <img src="../../../image/star_no_color.png" alt="" />
                          <img src="../../../image/star_no_color.png" alt="" />
                          <img src="../../../image/star_no_color.png" alt="" />
                          <img src="../../../image/star_no_color.png" alt="" />
                        </div>
                      </section>
                      <form className="-mt-1.5">
                        <span>Your Review</span>
                        <div className="overflow-hidden lg:p-4 rounded-lg border border-gray-200 shadow-sm focus-within:border-none focus-within:ring-1 mt-2">
                          <textarea
                            id="OrderNotes"
                            className="w-full resize-none outline-none border-none align-top focus:ring-0 sm:text-sm"
                            rows={3}
                            placeholder="Enter your review"
                          ></textarea>
                        </div>
                        <button className="px-10 py-4 bg-[#17AF26] rounded-[100px] text-base text-white mt-4">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </section>
              )}

              {/* Detail refer a friend */}
              {activeSection === "refer" && (
                <div className="show_refer">
                  <div className="rounded-2xl lg:px-6 lg:pt-7 lg:pb-4 mb:p-5 border flex flex-col gap-y-5 mt-5 mb-[23px]">
                    <form>
                      <div className="grid mt-1 lg:grid-cols-[42%_42%_auto] items-end justify-between gap-y-4">
                        <div className="flex flex-col items-start gap-y-2">
                          <span className="text-sm">Email</span>
                          <input
                            type="text"
                            placeholder="Enter your email"
                            className="border rounded-lg w-full p-3 outline-none placeholder:text-[#C8C9CB] text-[#C8C9CB]"
                          />
                        </div>
                        <div className="flex flex-col items-start gap-y-2">
                          <span className="text-sm">Name</span>
                          <input
                            type="text"
                            placeholder="Enter your name"
                            className="border rounded-lg p-3 w-full outline-none placeholder:text-[#C8C9CB] text-[#C8C9CB]"
                          />
                        </div>
                      </div>
                      {/* Button send emails */}
                      <div className="flex justify-start my-1.5">
                        <button className="px-[42px] py-4 bg-[#17AF26] rounded-full text-base text-white mt-4">
                          Send Emails
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductDetail
