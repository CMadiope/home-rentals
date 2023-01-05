import React from "react";
import hero from "../assets/img/hero.png";
import map from "../assets/img/map.png";
import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  return (
    <div className='w-full h-[100vh]'>
      <hr className='hidden absolute top-[15%] h-[2px] bg-gray-200 w-[1137.27px] ml-12 md:block'/>
      <img src={hero} alt='/' className='w-full h-full object-cover' />
      <div className='max-w-[1440px] m-auto'>
        <div className='flex absolute top-[10%] md:top-[18%] w-full  items-center flex-col md:flex-row pt-4' >
          <div className='w-1/2 mr-8 md:mr-0 md:pl-12 md:pr-8'>
            <h1 className=' text-2xl font-inter font-bold md:text-4xl text-white'>
              The most affortable place to stay in the san franciso bay area
            </h1>
          </div>
          <div>
            <img src={map} alt='/' className="w-[300px] md:w-auto"/>
            <div className='py-4 px-2 m-4 bg-white flex justify-between items-center rounded-lg w-[270px] md:w-auto'>
              <select className='border md:p-4'>
                <option>All Type</option>
              </select>
              <select className='border md:md:p-4'>
                <option>Neighborhood</option>
              </select>
              <div className='bg-blue-500 md:p-4'>
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
