import React from 'react'

const Banner = () => {
  return (
    <div>
        <div className="w-full flex justify-center bg-gradient-to-r from-[#386957] to-[#134d38]">
            <div className="lg:w-[1440px] mb:w-[342px] md:w-[95vw] md:h-[720px] mb:h-[694px] justify-between">
            {/* <!-- about --> */}
            <div className="flex flex-col *:flex *:flex-col md:pl-16 md:py-[120px] mb:py-[57px]">
                <div>
                <span className="text-[#F2BC1B] mb:text-sm md:text-base tracking-[4px] mb:-translate-y-0.5 lg:translate-y-0">BEST
                    SELLER</span>
                <strong
                    className="lg:text-[64px] lg:w-[664px] mb:text-[32px] font-medium lg:leading-[70.4px] mb:leading-[38px] lg:tracking-[-3.4px] mb:tracking-[-1.2px] lg:my-4 mb:my-[10.5px] text-white">BEST
                    DISPENSARY TO BUY WEED ONLINE</strong>
                <span className="text-white lg:text-[22px] lg:mt-2 mb:mt-1.5 lg:tracking-[0.5px]">Vitamins & Supplements</span>
                </div>

                <div className="flex flex-col *:text-white lg:mt-[105px] mb:mt-[39px]">
                <div
                    className="flex items-center lg:w-[356px] lg:justify-between lg:gap-x-0 mb:gap-x-[22px] *:lg:text-2xl *:mb:text-lg mb:tracking-[0.2px] lg:tracking-0">
                    <span>Get 25% off</span>
                    |
                    <span>Free Shipping</span>
                </div>
                <a className="bg-[#17AF26] lg:mt-11 mb:mt-6 lg:text-lg lg:w-[185px] mb:w-[145px] grid place-items-center lg:h-[64px] mb:h-[56px] rounded-[100px] border-none"
                    href="">Shop All</a>
                </div>
            </div>
            </div>
        </div>

        <div className="w-full flex justify-center bg-[#F2F6F4] pb-2 lg:pb-0 mb:-mt-0.5 lg:mt-0">
      <div className="lg:w-[1440px] md:w-[95vw] w-full lg:h-[356px] md:h-auto mb:h-[645px] grid md:grid-cols-2 lg:grid-cols-3 gap-y-[31px] lg:gap-y-0 justify-between lg:px-16 py-16 lg:py-20">
        {/* <!-- left --> */}
        <div className="flex items-start gap-x-4">
          <img className="w-16 h-16 lg:w-[100px] lg:h-[100px] bg-white rounded-full p-2.5 lg:p-5" src="../../image/truck-fast.png" alt="Reliable Shipping" />
          <div className="flex flex-col mt-[0.5px]">
            <strong className="text-[20px] lg:text-2xl font-medium tracking-tight">Reliable Shipping</strong>
            <p className="text-[14px] lg:text-base leading-[21px] mt-[12px] lg:mt-[19px] text-[#717378]">
              Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping
              insurance. For orders over $149, shipping is free!
            </p>
          </div>
        </div>
        {/* <!-- center --> */}
        <div className="flex items-start gap-x-4">
          <img className="w-16 h-16 lg:w-[100px] lg:h-[100px] bg-white rounded-full p-2.5 lg:p-5" src="../../image/safe-home.png" alt="Safe with Us" />
          <div className="flex flex-col mt-[0.5px]">
            <strong className="text-[20px] lg:text-2xl font-medium tracking-tight">You're Safe With Us</strong>
            <p className="text-[14px] lg:text-base leading-[21px] mt-[12px] lg:mt-[19px] text-[#717378]">
              Our secure payment system accepts the most common forms of payments making the checkout process quicker! The
              payments we accept are debit, all major credit cards, and cryptocurrency.
            </p>
          </div>
        </div>
        {/* <!-- right --> */}
        <div className="flex items-start gap-x-4">
          <img className="w-16 h-16 lg:w-[100px] lg:h-[100px] bg-white rounded-full p-2.5 lg:p-5" src="../../image/coin.png" alt="Best Quality & Pricing" />
          <div className="flex flex-col mt-[0.5px]">
            <strong className="text-[20px] lg:text-2xl font-medium tracking-tight">Best Quality & Pricing</strong>
            <p className="text-[14px] lg:text-base leading-[21px] mt-[12px] lg:mt-[19px] text-[#717378]">
              Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you
              receive your medication at a reasonable price and safely.
            </p>
          </div>
        </div>
      </div>
</div>

    </div>
  )
}

export default Banner
