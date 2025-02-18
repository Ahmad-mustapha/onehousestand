import { Link } from 'react-router-dom'
import Logo from '../../assets/logoOHS.webp'
import { MdArrowDropDown } from "react-icons/md";
const navLink = [
  { id: 1, text: 'RENT YOUR SPACE', link: '' },
  { id: 1, text: 'CONTACT', link: '' },
  { id: 1, text: 'LOGIN', link: '' }
,
]

const Navbar = () => {
  return (
    <nav style={{padding: '2rem'}} className='flex items-center justify-between fixed w-full h-[5rem] top-0 left-0'>
      <div className='flex items-center gap-2'>
        <div className='w-[3rem]'><img src={Logo} alt="" /></div>
        <p className='text-[1.7rem] font-[700] text-white'>OneHouseStand</p>
      </div>
      <ul className='flex items-center gap-4 text-white text-[1.1rem] font-[600]'>
        {
          navLink.map((item, index) =>(
            <li><Link>{item.text}</Link></li>
          ))
        }
        <span><MdArrowDropDown /></span>
      </ul>
    </nav>
  )
}

export default Navbar