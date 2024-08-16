import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { CartContextCT } from "../contexs/CartContex";


const Header = () => {
  const {register,handleSubmit} = useForm()
  const {cartQty} = useContext(CartContextCT)
  const navigate = useNavigate()
  const onSubmit = (data: any) => {
    const { searchKeywords } = data; 
    navigate(`/search?keyword=${searchKeywords}`);
}
  return (
    <div>
      <header>
        {/* <!-- top header --> */}
        <div className="w-full bg-[#05422c] lg:h-[37px] h-[34px] text-white flex justify-center items-center text-sm gap-x-4">
          <span className="opacity-75 w-auto truncate">LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.</span>
          <span>23 : 15 : 00</span>
        </div>

        {/* <!-- logo, search and cart --> */}
        <div className="w-full flex justify-center items-center border-b">
          <div className="container mx-auto px-4 lg:h-[76px] h-[56px] flex justify-between items-center">
            {/* <!-- icon menu --> */}
            <div className="lg:hidden block">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-menu">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </div>
            <img className="lg:w-[167px] w-[119px] lg:h-[40px] h-[28px]" src="../../image/logo.png" alt="Logo" />

            {/* <!-- form desktop --> */}
            <div className="hidden lg:block h-[48px]">
              <form onSubmit={handleSubmit(onSubmit)} className="w-[456px] flex h-[48px] justify-between">
                <input type="text" {...register('searchKeywords')} className="border rounded-full w-[400px] px-6" placeholder="Search" />
                <button className="rounded-full bg-[#17af26] w-[48px]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="size-6 text-white mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </button>
              </form>
            </div>

            <div className="flex gap-x-4 items-center">
              <span className="text-sm">Your Account</span>
              |
              <Link to={`/cart`} className="relative h-[24px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor" className="w-[24px]">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <span className="absolute bg-red-500 top-0 right-0 rounded-full w-[16px] h-[16px] text-xs text-white flex items-center justify-center">{cartQty}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* <!-- menu --> */}
        <div className="w-full hidden lg:flex justify-center items-center">
          <div className="flex gap-x-6 h-[56px] items-center">
            <Link to={`/`}>Shop All</Link>
            <Link to={`/shop`}>Shop</Link>
            <Link to={``}>Edibles</Link>
            <Link to={``}>Concentrates</Link>
            <Link to={``}>Mushrooms</Link>
            <Link to={``}>Promotions/Bundles</Link>
            <Link to={``}>Support</Link>
            <Link to={``}>Rewards</Link>
            <Link to={``}>Blog</Link>
          </div>
        </div>

        {/* <!-- form mobile --> */}
        <div className="w-full h-[58px] lg:hidden flex justify-center items-center my-1">
          <form  className="flex h-[36px] justify-center items-center gap-x-2 w-full px-4">
            <input type="text" className="border rounded-full w-full px-5" placeholder="Search" />
            <button className="rounded-full bg-[#17af26] w-[36px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" className="size-6 text-white mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Header;
