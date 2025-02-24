import { Navbar } from '../import';
import './hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <Navbar />
      <section className='flex justify-center flex-col gap-4 h-full'>
        <div className='text-white flex items-center flex-col justify-center'>
          <h1 className='text-[30px] text-center md:text-[35px] font-[700]'>
            YOUR EVENT IN A UNIQUE EVENT VENUE
          </h1>
          <h2 className='text-[16px] text-center md:text-[22px] font-[700] mt-4'>
            RENT AN EVENT VENUE, BOOK A CATERER AND SERVICES FOR YOUR EVENT
          </h2>
        </div>
        <div className='mt-8 flex items-center justify-center flex-wrap md:flex-nowrap gap-4 md:gap-0'>
          <div className='w-full md:w-[220px]'>
            <select
              style={{ padding: '.7rem' }}
              className='bg-gray-100 outline-[1px] outline-gray-500 w-full'
            >
              <option value="">All regions</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className='w-full md:w-[220px]'>
            <select
              style={{ padding: '.7rem' }}
              className='bg-gray-100 outline-[1px] outline-gray-500 w-full'
            >
              <option value="">All regions</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className='w-full md:w-[220px] flex items-center justify-center outline-[1px] outline-gray-500'>
            <button
              style={{ padding: '.7rem' }}
              className='bg-[#f73e56] text-white w-full text-[.9rem] font-[600] outline-[1px] outline-gray-500'
            >
              TO RESEARCH
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;