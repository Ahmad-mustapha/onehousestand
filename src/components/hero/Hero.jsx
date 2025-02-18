import { Navbar } from '../import'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <Navbar />
      <section className='flex justify-center items-center flex-col h-full'>
        <div className='text-white flex items-center flex-col justify-center'>
          <h1 className='text-[35px] font-[700]'>YOUR EVENT IN A UNIQUE EVENT VENUE</h1>
          <h2 className='text-[22px] font-[700]'>RENT AN EVENT VENUE, BOOK A CATERER AND SERVICES FOR YOUR EVENT</h2>
        </div>
        <div style={{marginTop: '2rem'}} className='flex items-center justify-center'>
          <div className='w-[220px]'>
            <select style={{padding: '.7rem'}} name="" id="" className='bg-gray-100 outline-[2px] outline-gray-500 w-full'>
              <option value="">All regions</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className='w-[220px]'>
            <select style={{padding: '.7rem'}} name="" id="" className='bg-gray-100 outline-[2px] outline-gray-500 w-full'>
              <option value="">All regions</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className='w-[220px] flex items-center justify-center'><button style={{padding: '.7rem'}}  className='bg-[#f73e56] text-white w-full text-[.9rem] font-[600]'>TO RESEARCH</button></div>
        </div>
      </section>
    </div>
  )
}
// #f73e55

export default Hero