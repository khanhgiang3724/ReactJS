import { useContext, useEffect, useState } from "react";
import { CategoryCT } from "../../contexs/CategoryContex";
import api from "../../apis";
import { Product } from "../../interfaces/product";
import { Link, useNavigate, useParams } from "react-router-dom";

const Shop = () => {
  // const { products } = useContext(ProductCT)
  const { categorys } = useContext(CategoryCT);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate()
  useEffect(() => {
    (async () => {
      if (id) {
        const { data } = await api.get(`products?category=${id}`);
        setProducts(data);
      } else {
        const { data } = await api.get("products");
        setProducts(data);
      }
    })();
  }, [id]);

  useEffect(() => {
    if (id) {
      const selected = categorys.find((category) => category.id === id);
      if (selected) {
        setSelectedCategory(selected.name);
      }
    } else {
      setSelectedCategory("");
    }
  }, [id, categorys]);

  const filteredProducts = products.filter(
    (product: Product) =>
      selectedCategory === "" || product.category === selectedCategory
  );

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = categorys.find((cat) => cat.name === e.target.value);
    if (selected) {
      setSelectedCategory(selected.name);
      navigate(`/category/${selected.id}`);
    } else {
      setSelectedCategory("");
      navigate("/category");
    }
  };

  return (
    <div className="w-full lg:pb-64 lg:pt-9 py-4 border pb-[199px]">
      <div className="lg:container lg:mx-auto lg:w-[1315px] mb:w-full grid lg:grid-cols-[304px_1fr] mb:grid-cols-1 gap-6">
        {/* <!-- filter --> */}
        <div className="lg:block hidden py-3 mt-0.5">
          <span className="lg:text-xl tracking-[-0.4px]">Filters</span>
          {/* <!-- category --> */}
          <section className="flex flex-col pt-[47px] pb-6">
            <span className="text-[#717378] text-xs tracking-[1px]">
              PRODUCT CATEGORY
            </span>
            <ul className="space-y-3 py-3 border-b">
              <li>
                <input id="sale1" className="w-5 h-5 invisible" type="radio" />
                <label
                  htmlFor="sale1"
                  className="relative sale2 before:w-5 before:h-5 before:border active:before:border-[6px] before:top-[10%] before:left-[-90%] active:before:border-[#17AF26] before:rounded-[50%] before:absolute"
                >
                  Sale
                </label>
                <span className="text-[#9D9EA2] font-light ml-[7px]">12</span>
              </li>
            </ul>
          </section>
          {/* <!-- price --> */}
          <section className="flex flex-col pr-7 pb-6 border-b">
            <span className="text-[#717378] text-xs tracking-[1px]">
              FILTER BY PRICE
            </span>
            <div className="flex justify-between py-5">
              <div>$0</div>
              <div>$50,000.00</div>
            </div>
            <input type="range" className="h-[2px] bg-black" />
            <button className="w-[103px] mt-6 h-[40px] rounded-[1000px] bg-[#17AF26] text-white">
              Apply
            </button>
          </section>
          {/* <!-- order --> */}
          <section className="flex flex-col py-6">
            <span className="text-[#717378] text-xs tracking-[1px]">
              ORDER BY
            </span>
            <ul className="space-y-3 py-2 border-b">
              <li>
                <input className="w-[20px] h-[20px]" type="radio" /> Sale
              </li>
            </ul>
          </section>
          <button className="bg-[#F3FBF4] rounded-[100px] text-[14px] leading-[21px] text-[#17AF26] mt-5 h-10 px-8">
            Clear Filters
          </button>
        </div>

        {/* <!-- product --> */}
        <div className="w-full flex flex-col mb:items-center lg:items-start">
          <div className="w-full flex justify-between items-center border-b pb-6">
            <strong className="lg:text-2xl text-base font-normal">Shop</strong>
            <div className="flex gap-x-[10px]">
              <div className="relative lg:hidden group w-[78px] flex items-center gap-x-2 h-[34px] border rounded-[100px] px-3 cursor-pointer border-gray-300 text-gray-700 text-xs tracking-[-0.5px]">
                Filter
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down group-hover:rotate-180 duration-300"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <ul className="absolute hidden group-hover:block top-full bg-white shadow-xl p-3 left-0 columns-2">
                  <li className="hover:text-[#17AF26]">John Mayer</li>
                  <li className="hover:text-[#17AF26]">John Mayer</li>
                </ul>
              </div>
              <select
                className="relative flex gap-x-3 items-center py-2 border rounded-[100px] px-[14px] cursor-pointer border-gray-300 text-gray-700 text-sm"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Danh mục</option>
                {categorys.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>

              {/* <div className="relative group flex gap-x-3 items-center py-2 border rounded-[100px] px-[14px] cursor-pointer border-gray-300 text-gray-700 text-sm">
                Sort By Latest
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down group-hover:rotate-180 duration-300 w-[22px] h-[22px]">
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <ul className="absolute hidden group-hover:block top-full right-0 bg-white shadow-xl py-2 px-3 w-[50vw]">
                  <li>John Mayer</li>
                  <li>John Mayer</li>
                </ul>
              </div> */}
            </div>
          </div>

          {/* <!-- products --> */}
          <div className="w-full grid mt-8 lg:gap-y-8 gap-y-[29px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center">
            {filteredProducts.map((item) => (
              <div className="grid grid-cols-1 snap-center auto-rows-[240px_auto] gap-y-4 overflow-hidden h-full rounded-xl">
                {/* <!-- img --> */}
                <div className="relative group w-full h-[240px] bg-[#f4f4f4] rounded-xl grid place-items-center">
                  <Link to={`/detail/${item.id}`}>
                    <img
                      className="w-[164px] h-[164px]"
                      src={item.thumbnail}
                      alt=""
                    />
                  </Link>

                  <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] w-[152px] h-[64px] rounded-[100px] bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                    Out Of Stock
                  </button>
                  <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                    $60 ounce
                  </section>
                </div>
                {/* <!-- about --> */}
                <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                  <div className="flex flex-col gap-y-2 items-center">
                    <strong className="uppercase font-light text-sm text-[#9D9EA2]">
                      FLOWER
                    </strong>
                    <Link to={`/detail/${item.id}`}>
                      <strong className="text-lg text-center line-clamp-2 font-normal text-[#1A1E26]">
                        {item.name}
                      </strong>
                    </Link>

                    <section className="w-[163px] h-[21px] flex justify-between items-start">
                      <div className="flex items-start">
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
                        <strong>{item.rating}/5</strong>
                      </div>
                      <div className="flex gap-x-2">
                        <strong>135</strong>
                        <span className="text-[#C8C9CB]">Reviews</span>
                      </div>
                    </section>
                    <section className="bg-[#F2F6F4] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                      Sativa 100%
                    </section>
                  </div>
                  <div className="flex flex-col gap-y-2 items-center">
                    <div className="flex text-sm">
                      <span className="text-[#EB2606]">${item.price}</span>
                    </div>
                    <div className="flex gap-x-2 border rounded">
                      <button>28g</button>
                      <button>1/2lb</button>
                      <button>1/4lb</button>
                    </div>
                    <button className="w-[160px] h-[40px] rounded-[1000px] bg-[#17AF26] text-white">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:items-end items-center w-full mt-8 gap-y-3">
            <div className="grid gap-3 grid-cols-[repeat(7,1fr)] mb:grid-cols-[repeat(2,1fr)] w-full mb:w-auto justify-items-center mb:justify-items-stretch">
              <button className="w-[38px] h-[38px] bg-[#F3FBF4] text-[#17AF26] rounded-[8px]">
                1
              </button>
              <button className="w-[38px] h-[38px] bg-[#17AF26] text-white rounded-[8px]">
                2
              </button>
              <button className="w-[38px] h-[38px] bg-[#F3FBF4] text-[#17AF26] rounded-[8px]">
                3
              </button>
              <button className="w-[38px] h-[38px] bg-[#F3FBF4] text-[#17AF26] rounded-[8px]">
                4
              </button>
              <button className="w-[38px] h-[38px] bg-[#F3FBF4] text-[#17AF26] rounded-[8px]">
                5
              </button>
              <button className="w-[38px] h-[38px] bg-[#F3FBF4] text-[#17AF26] rounded-[8px]">
                6
              </button>
              <button className="w-[38px] h-[38px] bg-[#F3FBF4] text-[#17AF26] rounded-[8px]">
                7
              </button>
            </div>
            <button className="bg-[#17AF26] text-white w-[170px] h-[50px] rounded-[100px]">
              Show All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
