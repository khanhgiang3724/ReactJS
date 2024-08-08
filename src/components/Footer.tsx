import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="w-full lg:-mt-1 bg-gradient-to-b from-[#1A1E26] to-[#01100B]">
        <div className="relative lg:pt-[403px] pt-[271px] lg:w-[1200px] w-[95vw] mx-auto">
          {/* UNLOCK VOUCHER 20% */}
          <div className="lg:w-[1200px] lg:left-0 lg:translate-x-0 w-full left-1/2 transform -translate-x-1/2 absolute top-0 -translate-y-[40.5%]">
            <div className="bg-[#05422C] pb-[70px] px-6 py-[26px] lg:pt-[45px] lg:px-16 rounded-3xl">
              <h2 className="text-[31px] lg:text-[64px] text-white font-semibold uppercase -tracking-[0.8px] lg:-tracking-[4px] lg:mt-5">
                UNLOCK 20% OFF YOUR <br className="hidden lg:block" />FIRST ORDER
              </h2>
              <p className="lg:text-xl text-[14px] text-[#C3D2CC] lg:my-6 mt-[14px]">
                Reveal coupon code by entering your email
              </p>
              <form className="border-t border-[#346654] lg:pt-8 pt-1 flex flex-col lg:flex-row gap-y-[14px] lg:gap-y-0 items-center lg:space-x-8">
                <input type="text" className="w-full border border-[#346654] rounded-full py-4 pr-4 pl-6 lg:py-6 lg:px-11" placeholder="Email Address" />
                <button className="btn lg:h-[72px] w-full lg:w-auto text-left lg:text-center pl-11 py-4 lg:px-[45px] lg:py-6 bg-[#17AF26] whitespace-nowrap text-white rounded-full">
                  Reveal coupon
                </button>
              </form>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row lg:gap-x-16 gap-y-8 lg:gap-y-0 w-full mt-72 lg:mt-0">
            {/* Left Column */}
            <div className="lg:w-[385px]">
              <img className="w-[173px] h-[42px]" src="../../image/logo.png" alt="Top Shelf BC Logo" />
              <p className="text-[#9D9EA2] mt-6 font-normal lg:w-full w-[276px]">
                #1 Canadian top rated online dispensary that meets the customers needs in every single medical marijuana aspect. The team here at TopShelfBC is heavily involved in the Canadian cannabis industry for over 15 years. We strive to provide the top quality products, service and care at the lowest prices you'll ever find.
              </p>
            </div>
            {/* Right Columns */}
            <div className="lg:pl-[77px]">
              {/* Quick Links */}
              <div className="mb-6">
                <h2 className="text-xl text-white tracking-[0.2px] uppercase mb-6">Quick Link</h2>
                <ul className="grid grid-cols-2 gap-x-8">
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Track Your Order</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Shop All</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Flower</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Edibles</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Concentrates</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Refunds</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Mushrooms</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Promotions / Bundles</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Support</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Reward</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Blog</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Shipping Faq</a></li>
                </ul>
              </div>
              {/* Contact Us */}
              <div className="mb-4">
                <h2 className="text-xl text-white uppercase tracking-[0.3px] mb-6">Contact Us</h2>
                <ul>
                  <li><a href="mailto:info@topshelfbc.cc" className="text-[#9D9EA2] text-sm">info@topshelfbc.cc</a></li>
                </ul>
              </div>
              {/* More Links */}
              <div className="mt-10">
                <h2 className="text-xl text-white uppercase mb-6">More</h2>
                <ul className="grid grid-cols-2 gap-x-8">
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Buy weed online in Canada</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Buy weed online in New Brunswick</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Buy weed online in Prince Edward Island</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Buy weed online in Northwest Territories</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Buy weed online in Saskatchewan</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Buy weed online in Manitoba</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Buy weed online in Quebec</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Buy weed online in British Columbia</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Buy weed online in Ontario</a></li>
                  <li><a href="#" className="text-[#9D9EA2] text-sm">Buy weed online in Alberta</a></li>
                </ul>
              </div>
              {/* Payment Methods */}
              <div className="hidden lg:block mt-8">
                <div className="flex gap-x-4">
                  <img src="../../image/mastercard_v1.png" alt="Mastercard" />
                  <img src="../../image/mastercard_v2.png" alt="Mastercard" />
                  <img src="../../image/mastercard_v3.png" alt="Mastercard" />
                  <img src="../../image/mastercard_v4.png" alt="Mastercard" />
                </div>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="flex flex-col lg:flex-row items-center lg:justify-between border-[#46494F] border-t pt-10 pb-8 mt-16">
            <p className="order-2 lg:order-1 text-[#9D9EA2] text-base">
              © 2022 Top Shelf BC. All Rights Reserved.
            </p>
            <ul className="order-1 lg:order-2 flex items-center gap-x-8">
              <li><a href="#" className="text-[#9D9EA2] text-sm">Out Of Stock</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
