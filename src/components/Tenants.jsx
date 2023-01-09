import React from "react";
import Cards from "./Cards";

const Tenants = () => {
  return (
    <div id='tenants'>
      <div className='flex justify-between p-4 md:p-12 items-center'>
        <div>
          <h1 className='font-bold text-2xl'>List Of Properties</h1>
          <div className="w-[60px] h-[2px] bg-red-500 pt-[2px]">

          </div>
        </div>
        <button className='p-4 bg-orange-600 text-white text-sm hover:bg-orange-500'>
          View All Properties
        </button>
      </div>
      <Cards />
    </div>
  );
};

export default Tenants;
