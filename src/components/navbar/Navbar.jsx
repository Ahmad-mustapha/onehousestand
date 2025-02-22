import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Logo from '../../assets/logoOHS.webp'
import './navbar.css'
import { MdArrowDropDown } from "react-icons/md";
const navLink = [
  { id: 1, text: 'RENT YOUR SPACE', link: '' },
  { id: 1, text: 'CONTACT', link: '' },
  { id: 1, text: 'LOGIN', link: '' }
,
]

export const Sidebar = ({isOpen, setOpenNav}) =>(
  <ul style={{paddingLeft: '1rem'}} className={`flex flex-col justify-center gap-10 text-[#094C41] text-[16px] h-screen w-[70%] sm:w-[50%] fixed right-0 top-0 z-50 transition-transform duration-500 bg-[#b4b3b3] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
    {
      navLink.map((item, index) =>(
        <li className='relative' key={index}><Link onClick={()=>setOpenNav(false)} to={item.link} className={`eachlink ${location.pathname === item.link ? 'active' : ''}`}>{item.text}</Link></li>
      ))
    }
  </ul>
)

const Navbar = () => {
  const [ openNav, setOpenNav ] = useState(false)
  const location = useLocation()
  const ToggleMenu = () =>{
    setOpenNav(!openNav)
  }
  return (
    <div>
      <nav style={{padding: '2rem'}} className='flex items-center justify-between fixed w-full h-[4.7rem] top-0 left-0 z-30 bg-transparent backdrop-blur-[10px]'>
        <Link>
          <div className='flex items-center gap-2'>
            <div className='w-[3rem]'><img src={Logo} alt="" /></div>
            <p className='text-[1.7rem] font-[700] text-white'>OneHouseStand</p>
          </div>
        </Link>
        <ul className='hidden md:flex flex-row items-center gap-8 text-white text-[1rem] font-[600] links'>
          {
            navLink.map((item, index) =>(
              <li><Link>{item.text}</Link></li>
            ))
          }
          <span><MdArrowDropDown /></span>
        </ul>
      </nav>
      <div className={`menu z-50 fixed top-8 right-[2rem] flex md:hideen flex-col gap-2 cursor-pointer`} onClick={ToggleMenu}>
          <p className={`block w-8 h-[3px] rounded-md bg-[#fff] transition-transform duration-500 ${openNav? 'rotate-45 translate-y-[12px]': ''}`}></p>
          <p className={`block w-8 h-[3px] rounded-md bg-[#fff] transition-transform duration-500 ${openNav? 'opacity-0': 'opacity-100'}`}></p>
          <p className={`block w-8 h-[3px] rounded-md bg-[#fff] transition-transform duration-500 ${openNav? '-rotate-45 -translate-y-[8px]': ''}`}></p>
      </div>
      <Sidebar isOpen={openNav} setOpenNav={setOpenNav}/>
      <div 
        className={`${openNav ? 'bg-transparent backdrop-blur-[10px] h-screen w-full fixed left-0 top-0 z-40': 'hidden'}`}
        onClick={() => setOpenNav()}
      ></div>
    </div> 
  )
}

export default Navbar