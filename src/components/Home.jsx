import React from "react";
import hero from "../assets/img/hero.png";
import map from "../assets/img/map.png";
import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  return (
    <div className='w-full h-[90vh]'>
      <hr className='hidden absolute top-[15%] h-[2px] bg-gray-200 w-[1137.27px] ml-12 md:block'/>
      <img src={hero} alt='/' className='w-full h-full object-cover' />
      <div className='max-w-[1440px] m-auto'>
        <div className='flex absolute top-[18%] items-center flex-col md:flex-row'>
          <div className='w-1/2'>
            <h1 className='font-inter font-bold text-4xl text-white'>
              The most affortable place to stay in the san franciso bay area
            </h1>
          </div>
          <div>
            <img src={map} alt='/' />
            <div className='py-4 px-2 m-4 bg-white flex justify-between items-center rounded-lg'>
              <select className='border p-4'>
                <option>All Type</option>
              </select>
              <select className='border p-4'>
                <option>Neighborhood</option>
              </select>
              <div className='bg-blue-500 p-4'>
                <AiOutlineSearch size={20} />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
