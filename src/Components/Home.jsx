import React from 'react'
import "../styles.css";
import logo from "../assets/tc_logo.png"
import map from '../assets/World-Map.png'
import pic1 from '../assets/part1.png'
import pic2 from '../assets/part2.png'
import pic3 from '../assets/part3.png'
import pic4 from '../assets/part4.png'
const Home = () => {
  return (
    <div className='py-4 flex flex-col items-center lg:gap-12  lg:py-[100px] bg-[#121619] '>

        <div className="logo flex flex-col items-center text-center gap-6 ">
                <img src={logo} className='w-[320px] lg:w-[350px]' />
            <p className= ' text-white custom-font-style lg:w-10/12 '>Empowering Security <span className='text-[#42BE65]'>Defending</span> Tomorrow</p>

        </div>


        <div className="services flex flex-col gap-4 justify-between p-5 sm:flex-row w-4/5  ">

            <div className="edr flex flex-col  gap-2 items-center text-center text-white sm:w-[300px] lg:w-[350px] p-2">
                <image src = ""></image>
                <p className='text-base font-bold text-[#42BE65]'>EDR</p>
                <p className='text-sm '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum aspernatur facilis exercitationem eum laudantium optio expedita nihil debitis modi placeat, saepe omnis pariatur molestiae quam fugit impedit ut aperiam! Suscipit?
                Consequatur et reprehenderit iste fugit aut quia ut atque nihil a tempora, blanditiis nisi magni laudantium quidem, amet labore velit ullam! Sequi quam recusandae ea harum expedita architecto? Accusantium, nam!</p>
            </div>
            <div className="Siem flex flex-col  gap-2 items-center text-center  text-white sm:w-[300px] lg:w-[350px] p-2">
                <image src = ""></image>
                <p className='text-base font-bold text-[#42BE65]'>SIEM</p>
                <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing eeum laudantium optio expedita nihil debitis modi plas pariatur molestiae quam fugit impedit ut aperiam! Suscipit?
                Consequatur et reprehenderit iste fugit aut quia ut aium quidem, amet labore velit ullam! Sequi quam recusandae ea harum expedita architecto? Accusantium, nam!</p>
            </div>
            <div className="edr flex flex-col  gap-2 items-center text-center  text-white sm:w-[300px] lg:w-[350px] p-2">
                <image src = ""></image>
                <p className='font-bold text-[#42BE65]'>E-mail security</p>
                <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum aspernatur facilis exercitationem euexpedita architecto? Accusantium, nam!</p>
            </div>

        </div>



        <div className="partners section flex flex-col gap-2 items-center py-3  mb-[40px]">

            <p className='font-inter text-2xl font-bold lg:text-4xl text-white'>Proud to be Partnered With</p>

            <div className="partners_images flex flex-col w-4/5 gap-8 items-center md:flex-row md:justify-center md:mt-8">
                    <div className="img1 mt-2">
                        <img className='w-[200px] lg:w-[250px]' src={pic1} alt="" srcset="" />
                    </div>
                    <div className="img2">
                        <img className='w-[120px] lg:w-[200px]' src={pic2} alt="" srcset="" />
                    </div>
                    <div className="img3">
                        <img className='w-[100px] lg:w-[150px]' src={pic3} alt="" srcset="" />
                    </div>
                    <div className="img4 mb-4 md:mb-0">
                        <img className='w-[120px] lg:w-[200px]' src={pic4} alt="" srcset="" />
                    </div>
            </div>

        </div>



        <div className="our_global_community w-11/12 flex flex-col items-center gap-2 ">
        <p className='font-inter text-2xl font-bold lg:text-4xl text-white'>Our Global Community</p>
            <div className="photo m-auto">
                <img src={map} alt="" srcset="" />
            </div>

        </div>


    </div>
  )
}

export default Home