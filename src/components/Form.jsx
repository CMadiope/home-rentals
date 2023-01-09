import React from "react";

const Form = () => {
  return (
    <div>
      <div className='flex justify-center py-8'>
        <h1 className='text-xl md:text-3xl font-poppins text-orange-500 font-semibold'>
          Add a new Property
        </h1>
      </div>
      <form>
        <div className='md:flex md:justify-between font-poppins'>
          <div>
            <div className='flex flex-col pb-6'>
              <label className='font-semibold pb-2'>
                Name <span className='text-orange-500'>*</span>
              </label>
              <input
                type='text'
                placeholder='Enter Name'
                className='p-4 border bg-neutral-100 w-[250px] md:w-[350px] rounded-md'
              />
            </div>
            <div className='flex flex-col pb-6'>
              <label className='font-semibold pb-2'>
                City <span className='text-orange-500'>*</span>
              </label>

              <select className='p-4 border bg-neutral-100 w-[250px] md:w-[350px] rounded-md text-gray-400'>
                <option>Select City</option>
              </select>
            </div>
            <div className='flex flex-col pb-6'>
              <label className='font-semibold pb-2'>
                Price <span className='text-orange-500'>*</span>
              </label>
              <input
                type='text'
                placeholder='Enter Price'
                className='p-4 border bg-neutral-100 w-[250px] md:w-[350px] rounded-md'
              />
            </div>
          </div>
          <div>
            <div className='flex flex-col pb-6 '>
              <div className='flex flex-col pb-6'>
                <label className='font-semibold pb-2'>
                  Address <span className='text-orange-500'>*</span>
                </label>
                <input
                  type='text'
                  placeholder='Enter Address'
                  className='p-4 border bg-neutral-100 w-[250px] md:w-[350px] rounded-md'
                />
              </div>
              <div className='flex flex-col pb-6'>
                <label className='font-semibold pb-2'>
                  State <span className='text-orange-500'>*</span>
                </label>

                <select className='p-4 border bg-neutral-100 w-[250px] md:w-[350px] rounded-md text-gray-400'>
                  <option>Select State</option>
                </select>
              </div>
              <div className='flex flex-col '>
                <label className='font-semibold pb-2'>
                  Room Type <span className='text-orange-500'>*</span>
                </label>

                <select className='p-4 border bg-neutral-100 w-[250px] md:w-[350px] rounded-md text-gray-400'>
                  <option>Select Room Type</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div className=''>
              <div className='flex flex-col pb-6'>
                <label className='font-semibold pb-2'>
                  Unit Number <span className='text-orange-500'>*</span>
                </label>
                <input
                  type='text'
                  placeholder='Enter Unit Number'
                  className='p-4 border bg-neutral-100 w-[250px] md:w-[350px] rounded-md'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <label className='font-semibold pb-2'>
            Description <span className='text-orange-500'>*</span>
          </label>
          <textarea
            className='w-[250px] h-[150px] md:h-[200px] md:w-full border bg-neutral-100 placeholder:p-4 rounded-md'
            placeholder='Enter Description'
          ></textarea>
        </div>
        <div className='py-8 w-[300px] md:w-full'>
          <label className='font-semibold pb-2'>Upload Photos</label>
          <div className='flex justify-center border-2 border-dotted border-orange-500 py-10 rounded-md '>
            <div>
              <h1 className='text-lg md:text-xl font-semibold'>
                Drag your images here, or{" "}
                <span className='text-orange-500 text-semibold'>browse</span>
              </h1>
              <p className="text-sm  text-gray-400 text-center">Supported: JPG, JPEG, PNG</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="py-4 px-8 md:px-36 bg-orange-500 text-white rounded-md hover:bg-orange-400">
            Add New Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
