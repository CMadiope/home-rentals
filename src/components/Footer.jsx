import React from "react";
import wilson from "../assets/img/wilson.png";
import ReactPlayer from "react-player";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill, BsPinterest } from "react-icons/bs";
import {
  AiFillPrinter,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineGooglePlus,
  AiFillLinkedin,
} from "react-icons/ai";
import {MdRssFeed} from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='md:flex bg-[#F4511E12] pl-16 md:pl-20 '>
        <div className='pt-16 md:pt-20 pr-8 md:pr-16'>
          <p className=' md:text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
            pellentesque est. Curabitur at odio sit amet libero vulputate
            efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
            faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
            fringilla finibus.
          </p>
          <div className='flex items-center gap-4 pt-10'>
            <img src={wilson} alt='/' />
            <div className='font-inter md:text-lg'>
              <h1 className=' font-semibold text-orange-500 '>Harry Wilson</h1>
              <p>Property Owner</p>
            </div>
          </div>
          <div className='flex py-10 gap-2 cursor-pointer'>
            <span className='w-2 h-2 md:w-4 md:h-4 rounded-full bg-orange-500'></span>
            <span className='w-2 h-2 md:w-4 md:h-4 rounded-full bg-gray-300'></span>
            <span className='w-2 h-2 md:w-4 md:h-4 rounded-full bg-gray-300'></span>
          </div>
        </div>
        <div className=''>
          <ReactPlayer url='https://youtu.be/dEnyG5Gsi2c' />
        </div>
      </div>
      <div className='bg-white'>
        <hr className='w-[full] h-1 bg-orange-500 my-28 mx-[10%]' />
        <div className='md:flex p-16'>
          <h1 className='font-inter font-semibold text-4xl md:text-7xl md:w-1/2'>
            Logo
          </h1>
          <div className='py-8'>
            <div className=' md:flex items center gap-2'>
              <HiLocationMarker
                className='text-orange-500 font-bold mb-2'
                size={25}
              />
              <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
            </div>
            <div className='md:flex justify-between pt-4'>
              <div className='pb-4 md:pb-0'>
                <BsFillTelephoneFill
                  className='text-orange-500 font-bold mb-2'
                  size={25}
                />
                <p>(123) 456-7890</p>
              </div>
              <div className=''>
                <AiFillPrinter
                  className='text-orange-500 font-bold mb-2'
                  size={25}
                />
                <p>(123) 456-7890</p>
              </div>
            </div>
            <div className='md:flex gap-2 pt-4'>
              <p className='text-gray-400 md:pr-8'>Social Media</p>
              <AiFillFacebook
                className='text-orange-500 font-bold mb-2'
                size={25}
              />
              <AiOutlineTwitter
                className='text-orange-500 font-bold mb-2'
                size={25}
              />
              <AiFillLinkedin
                className='text-orange-500 font-bold mb-2'
                size={25}
              />
              <AiFillYoutube
                className='text-orange-500 font-bold mb-2'
                size={25}
              />
              <AiOutlineInstagram
                className='text-orange-500 font-bold mb-2'
                size={25}
              />
              <AiOutlineGooglePlus
                className='text-orange-500 font-bold mb-2'
                size={25}
              />
              <BsPinterest
                className='text-orange-500 font-bold mb-2'
                size={25}
              />
              <MdRssFeed className='text-orange-500 font-bold mb-2' size={25} />
            </div>
          </div>
        </div>
      </div>
      <hr className='w-[full] h-[2px] bg-sky-300 mx-[15%]' />
      <div className='md:flex py-12 md:gap-24'>
        <div className='md:w-1/2 uppercase font-inter md:flex md:justify-between pl-16'>
          <p>About us</p>
          <p>Contact us</p>
          <p>Help</p>
          <p>Privacy Policy</p>
          <p>Disclaimer</p>
        </div>
        <div className="pt-8 md:pt-0">
          <p className="text-sm text-gray-400">Copyright © 2020 Minimumlivingcost. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
