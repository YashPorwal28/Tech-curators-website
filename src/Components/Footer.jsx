import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#121619]">
      <div className="w-3/5 m-auto  ">
        <div className="footer_top flex flex-col gap-6 px-6 py-3 bg-[#0F2127] rounded-lg lg:flex-row  h-[260px] lg:px-[100px] lg:items-center lg:justify-between">
          <div className="contactUs flex flex-col gap-4 mt-3  w-[500px]  ">
            <div className="contact_us_box py-1 px-1 rounded-md bg-[#42BE65] w-[90px]">
              <p className="text-sm">Contact us:</p>
            </div>
            <p className="text-sm text-white">Email: info@techcurators.com</p>
            <p className="text-sm text-white">Phone : +91 9990084440</p>
            <p className="text-sm text-white w-2/4">
              T-93 Second Floor, DK House Gautam Nagar, Near Gulmohar Park
              Community Center New Delhi-110049
            </p>
          </div>

          <div className="subscribe_box  flex flex-col lg:flex-row gap-4 items-center   ">
            <input type="text" placeholder="Email" className="px-1 py-2 rounded-md" />
            <div className="subscribe_button bg-[#42BE65] rounded-lg ">
              <p className="text-sm px-2 py-2 ">Subscribe</p>
            </div>
          </div>


        

        </div>
        <div className="right_reserved h-[40px] border-t border-black bg-[#0F2127]">

        <p className="text-white px-[30px] mt-3">@ 2024 Techcurators. All Rights Reserved.</p>
        </div>




        


      </div>



    </div>
  );
};

export default Footer;
