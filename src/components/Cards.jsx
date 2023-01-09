import React from "react";
import card1 from "../assets/img/card1.png";
import card2 from "../assets/img/card2.png";
import card3 from "../assets/img/card3.png";
import card4 from "../assets/img/card4.png";
import card5 from "../assets/img/card5.png";
import card6 from "../assets/img/card6.png";
import { AiFillCar } from "react-icons/ai";
import { FaBath } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";

const Cards = () => {
  return (
    <div className='pt-10 pl-20 md:p-8 '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className='w-[250px] md:w-[350px] shadow-lg bg-white  rounded-3xl cursor-pointer hover:scale-105'>
          <img src={card1} alt='/' />

          <p className='font-bold font-dm_sans pl-6 pr-8 pt-8'>
            2578 Folsom Street, San Francisco, CA, 94110
          </p>
          <div className='py-6'>
            <span className='pl-6 pt-8 text-sm text-gray-400'>
              Private Room
            </span>
            <h1 className='pl-6 text-xl font-semibold font-dm_sans text-orange-500'>
              $1200/Month
            </h1>
          </div>
          <div className='flex'>
            <div className='py-4 px-6 md:px-10 border flex items-center gap-2'>
              <IoIosBed />
              <p className=' text-sm md:text-xl font-bold'>4</p>
            </div>
            <div className='py-4 px-6 md:px-10 border flex items-center gap-2'>
              <FaBath />
              <p className='md:text-xl font-bold'>2</p>
            </div>
            <div className='py-4 px-6 md:px-10 border flex items-center gap-2'>
              <AiFillCar />
              <p className='md:text-xl font-bold'>2</p>
            </div>
          </div>
        </div>
        <div className='w-[250px] md:w-[350px] shadow-lg bg-white  rounded-3xl cursor-pointer hover:scale-105'>
          <img src={card2} alt='/' />

          <p className='font-bold font-dm_sans pl-6 pr-8 pt-8'>
            2578 Folsom Street, San Francisco, CA, 94110
          </p>
          <div className='py-6'>
            <span className='pl-6 pt-8 text-sm text-gray-400'>
              Private Room
            </span>
            <h1 className='pl-6 text-xl font-semibold font-dm_sans text-orange-500'>
              $1200/Month
            </h1>
          </div>
          <div className='flex'>
            <div className='py-4 px-6 md:px-10 border flex items-center gap-2'>
              <IoIosBed />
              <p className='text-sm md:text-xl font-bold'>4</p>
            </div>
            <div className='py-4 px-6 md:px-10 border flex items-center gap-2'>
              <FaBath />
              <p className='text-sm md:text-xl font-bold'>2</p>
            </div>
            <div className='py-4 px-6 md:px-10 border flex items-center gap-2'>
              <AiFillCar />
              <p className='text-sm md:text-xl font-bold'>2</p>
            </div>
          </div>
        </div>
        <div className='w-[250px] md:w-[350px] shadow-lg bg-white  rounded-3xl cursor-pointer hover:scale-105'>
          <img src={card3} alt='/' />

          <p className='font-bold font-dm_sans pl-6 pr-8 pt-8'>
            2578 Folsom Street, San Francisco, CA, 94110
          </p>
          <div className='py-6'>
            <span className='pl-6 pt-8 text-sm text-gray-400'>
              Private Room
            </span>
            <h1 className='pl-6 text-xl font-semibold font-dm_sans text-orange-500'>
              $1200/Month
            </h1>
          </div>
          <div className='flex'>
            <div className='py-4 px-6 md:px-10 border flex items-center gap-2'>
              <IoIosBed />
              <p className='text-sm md:text-xl font-bold'>4</p>
            </div>
            <div className='py-4 px-6 md:px-10 border flex items-center gap-2'>
              <FaBath />
              <p className='text-sm md:text-xl font-bold'>2</p>
            </div>
            <div className='py-4 px-6 md:px-10 border flex items-center gap-2'>
              <AiFillCar />
              <p className='text-sm md:text-xl font-bold'>2</p>
            </div>
          </div>
        </div>
        <div className='w-[250px] md:w-[350px] shadow-lg bg-white  rounded-3xl cursor-pointer hover:scale-105'>
          <img src={card4} alt='/' />

          <p className='font-bold font-dm_sans pl-6 pr-8 pt-8'>
            2578 Folsom Street, San Francisco, CA, 94110
          </p>
          <div className='py-6'>
            <span className='pl-6 pt-8 text-sm text-gray-400'>
              Private Room
            </span>
            <h1 className='pl-6 text-xl font-semibold font-dm_sans text-orange-500'>
              $1200/Month
            </h1>
          </div>
          <div className='flex'>
            <div className='py-4 px-6 md:px-10 border flex items-center gap-2'>
              <IoIosBed />
              <p className='text-sm md:text-xl font-bold'>4</p>
            </div>
            <div className='py-4 px-6 md:px-10 border flex items-center gap-2'>
              <FaBath />
              <p className='text-sm md:text-xl font-bold'>2</p>
            </div>
            <div className='py-4 px-6 md:px-10 border flex items-center gap-2'>
              <AiFillCar />
              <p className='text-sm md:text-xl font-bold'>2</p>
            </div>
          </div>
        </div>
        <div className='w-[250px] md:w-[350px] shadow-lg bg-white  rounded-3xl cursor-pointer hover:scale-105'>
          <img src={card5} alt='/' />

          <p className='font-bold font-dm_sans pl-6 pr-8 pt-8'>
            2578 Folsom Street, San Francisco, CA, 94110
          </p>
          <div className='py-6'>
            <span className='pl-6 pt-8 text-sm text-gray-400'>
              Private Room
            </span>
            <h1 className='pl-6 text-xl font-semibold font-dm_sans text-orange-500'>
              $1200/Month
            </h1>
          </div>
          <div className='flex'>
            <div className='py-4 px-6 md:px-10 border flex items-center gap-2'>
              <IoIosBed />
              <p className='text-sm md:text-xl font-bold'>4</p>
            </div>
            <div className='py-4 px-6 md:px-10 border flex items-center gap-2'>
              <FaBath />
              <p className='text-sm md:text-xl font-bold'>2</p>
            </div>
            <div className='py-4 px-6 md:px-10 border flex items-center gap-2'>
              <AiFillCar />
              <p className='text-sm md:text-xl font-bold'>2</p>
            </div>
          </div>
        </div>
        <div className='w-[250px] md:w-[350px] shadow-lg bg-white  rounded-3xl cursor-pointer hover:scale-105'>
          <img src={card6} alt='/' />

          <p className='font-bold font-dm_sans pl-6 pr-8 pt-8'>
            2578 Folsom Street, San Francisco, CA, 94110
          </p>
          <div className='py-6'>
            <span className='pl-6 pt-8 text-sm text-gray-400'>
              Private Room
            </span>
            <h1 className='pl-6 text-xl font-semibold font-dm_sans text-orange-500'>
              $1200/Month
            </h1>
          </div>
          <div className='flex'>
            <div className='py-4 px-6 md:px-10 border flex items-center gap-2'>
              <IoIosBed />
              <p className='text-sm md:text-xl font-bold'>4</p>
            </div>
            <div className='py-4 px-6 md:px-10 border flex items-center gap-2'>
              <FaBath />
              <p className='text-sm md:text-xl font-bold'>2</p>
            </div>
            <div className='py-4 px-6 md:px-10 border flex items-center gap-2'>
              <AiFillCar />
              <p className='text-sm md:text-xl font-bold'>2</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center py-8 pr-16 md:pr-0'>
        <div className='flex pt-8 '>
          <div className='p-4 border border-gray-700 rounded-l-lg cursor-pointer'>
            <p className='text-gray-400'>First</p>
          </div>
          <div className='p-4 border border-gray-700 bg-white text-orange-500 cursor-pointer'>
            <p>1</p>
          </div>
          <div className='p-4 border border-gray-700 bg-orange-500 text-white cursor-pointer'>
            <p>2</p>
          </div>
          <div className='p-4 border border-gray-700 text-orange-500 bg-white cursor-pointer'>
            <p>3</p>
          </div>
          <div className='p-4 border border-gray-700 rounded-r-lg text-orange-500 bg-white cursor-pointer'>
            <p>Last</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
