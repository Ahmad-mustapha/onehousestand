import './businesscard.css'
import BusinessImage from '../../assets/businessClass.png'
import { Link } from 'react-router-dom'

const Businesscard = () => {
  return (
    <div style={{padding: '7rem 2rem'}} className='flex items-center justify-center bg-[#272729] flex-col gap-4'>
        <div className='w-[300px] md:w-[500px] lg:w-[700px]'><img src={BusinessImage} alt="" /></div>
        <p className='text-center text-[20px] md:text-[25px] text-white font-[500]'>Exclusive access to complementary services & secret locations for businesses</p>
        <div style={{marginTop: '2rem'}}><Link style={{padding: '1rem 3rem'}} className='text-white  font-[600] bg-[#f73e55] hover:bg-[#ff8896]'>Learn more</Link></div>
    </div>
  )
}

export default Businesscard