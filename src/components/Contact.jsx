import React from "react";
import happy from "../assets/img/happy.png";
import flex from "../assets/img/flex.png";
import month from "../assets/img/month.png";
import choose from "../assets/img/choose.png";
import Form from "./Form";

const Contact = () => {
  return (
    <div id='contact' className='p-16 md:p-8 bg-white'>
      <div className='flex flex-col md:flex-row md:gap-8'>
        <div
          className='flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-2 
        '
        >
          <div className='relative hover:scale-105 w-[150px]  md:w-[190px] md:mb-8'>
            <img src={happy} alt='/' />
            <p className='absolute top-[10%] left-[16%] text-white font-inter text-lg font-bold'>
              FLexible Leases
            </p>
          </div>
          <div className='relative hover:scale-105 w-[170px] md:w-[200px]'>
            <img src={flex} alt='/' />
            <p className='absolute top-[10%] left-[16%] text-white font-inter text-lg font-bold w-[50%]'>
              7-Day Happiness Guaranteed
            </p>
          </div>
          <div className='relative hover:scale-105 w-[170px]'>
            <img src={month} alt='/' />
            <p className='absolute top-[10%] left-[16%] text-white font-inter text-lg font-bold w-[50%] '>
              Monthly House Cleaning
            </p>
          </div>
          <div className='relative hover:scale-105 w-[210px] md:w-[220px]'>
            <img src={choose} alt='/' />
            <p className='absolute top-[10%] left-[16%] text-white font-inter text-lg font-bold w-[50%]'>
              Choose Your Own Roommate
            </p>
          </div>
        </div>
        <div className='pt-8 md:w-1/2 md:pt-24 md:pl-10'>
          <div>
            <h1 className='font-inter font-bold text-xl md:text-3xl w-[70%] md:w-[65%]'>
              Flexibility and options to suit your lifestyle.
            </h1>
          </div>
          <div>
            <p className='pt-4 md:text-lg w-[70%] md:w-[60%] pb-10'>
              You need it? We got it. We make finding your next home easy,
              comfortable, and simple. From our happiness guarantee to our
              selective roommate finder option. We provide you the flexibility
              that you most desire.
            </p>
          </div>
        </div>
      </div>
      <p className='font-inter text-sm font-bold md:text-lg md:pt-16 md:pl-[25%]'>
        Your Property With Us And Be Confident That Your Room Will Be Filled
        Out!
      </p>
      <Form/>
    </div>
  );
};

export default Contact;
