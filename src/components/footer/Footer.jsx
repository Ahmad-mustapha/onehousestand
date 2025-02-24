import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const footerLinks = [
  { id: 1, text: 'Baby shower room', link: '' },
  { id: 2, text: 'Garden party', link: '' },
  { id: 3, text: 'Birthday room', link: '' },
  { id: 4, text: 'Room', link: '' },
  { id: 5, text: 'Wedding anniversary room', link: '' },
  { id: 6, text: 'Banqueting hall', link: '' },
  { id: 7, text: 'Communion room', link: '' },
  { id: 8, text: 'Concert hall', link: '' },
  { id: 9, text: 'Conference room', link: '' },
  { id: 10, text: 'Press conference room', link: '' },
  { id: 11, text: 'Christmas dinner room', link: '' },
  { id: 12, text: 'Dining and lunch room', link: '' },
  { id: 13, text: 'End of year party room', link: '' },
  { id: 14, text: 'Room for a product launch', link: '' },
  { id: 15, text: 'Wedding hall', link: '' },
  { id: 16, text: 'Room for bachelorette party', link: '' },
  { id: 17, text: 'Room for pop-up', link: '' },
  { id: 18, text: 'Reception room', link: '' },
  { id: 19, text: 'Meeting room', link: '' },
  { id: 20, text: "New Year's Eve Party Room", link: '' },
  { id: 21, text: 'Seminar room', link: '' },
  { id: 22, text: 'Locations for photo shoots', link: '' },
  { id: 23, text: 'Corporate party room', link: '' },
  { id: 24, text: 'Team building room', link: '' },
  { id: 25, text: 'Filming room', link: '' },
  { id: 26, text: 'Workshop room', link: '' },
  { id: 27, text: 'All types of room', link: '' },
];

const cities = [
  { id: 1, text: 'Antwerp', link: '' },
  { id: 2, text: 'Flemish Brabant', link: '' },
  { id: 3, text: 'Walloon Brabant', link: '' },
  { id: 4, text: 'Brussels', link: '' },
  { id: 5, text: 'West Flanders', link: '' },
  { id: 6, text: 'East Flanders', link: '' },
  { id: 7, text: 'Hainaut', link: '' },
  { id: 8, text: 'Limburg', link: '' },
  { id: 9, text: 'Luxembourg', link: '' },
  { id: 10, text: 'Drenthe', link: '' },
  { id: 11, text: 'Cleveland', link: '' },
  { id: 12, text: 'North Brabant', link: '' },
  { id: 13, text: 'Overijssel', link: '' },
  { id: 14, text: 'South Holland', link: '' },
];

const discover = [
  { id: 1, text: 'Magazine', link: '' },
  { id: 2, text: 'How it works', link: '' },
  { id: 3, text: 'Zero Waste Box', link: '' },
  { id: 4, text: 'Business Class', link: '' },
  { id: 5, text: 'FAQ', link: '' },
  { id: 6, text: 'Places', link: '' },
  { id: 7, text: 'Gathers', link: '' },
  { id: 8, text: 'Euras', link: '' },
  { id: 9, text: 'Rent my property', link: '' },
  { id: 10, text: 'Partners', link: '' },
];

const company = [
  { id: 1, text: 'Press', link: '' },
  { id: 2, text: 'Jobs', link: '' },
  { id: 3, text: 'Terms and Conditions', link: '' },
  { id: 4, text: 'Cookies', link: '' },
  { id: 5, text: 'Confidentiality', link: '' },
  { id: 6, text: 'Contact', link: '' },
];


const Footer = () => {
  return (
    <footer 
    className="bg-[#272729] text-slate-300 font-[500] gap-8 md:gap-1 flex justify-between flex-wrap md:flex-nowrap"
    style={{ padding: '2.5rem' }}>
      <div style={{paddingRight: '1rem'}} className="flex justify-between w-full md:w-4/6 flex-wrap sm:flex-nowrap gap-4 md:gap-1 ">
      <div>
        <h4 style={{marginBottom: '.8rem'}} className="text-white text-[1.2rem] font-[700]">TYPE OF ROOM</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {footerLinks.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 style={{marginBottom: '.8rem'}} className="text-white text-[1.2rem] font-[700]">CITIES</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cities.map((city) => (
            <li key={city.id}>
              <a href={city.link}>{city.text}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 style={{marginBottom: '.8rem'}} className="text-white text-[1.2rem] font-[700]">DISCOVER</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {discover.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 style={{marginBottom: '.8rem'}} className="text-white text-[1.2rem] font-[700]">COMPANY</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {company.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
      </div>

      <div className="w-full md:w-2/6 flex flex-col gap-6 items-start md:items-center border-l-0 md:border-l-1">
        {/* <h4 style={{marginBottom: '.8rem'}} className="text-white text-[1.2rem] font-[700]">SECOND COLUMN</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {secondColumn.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul> */}
        <select style={{padding: '5px 10px'}} name="" id="" className="border-2 outline-hidden">
          <option value="">French</option>
          <option value="">Dutch</option>
          <option value="">English</option>
        </select>
        <p>Follow us</p>
        <div className="flex items-center gap-4">
          <Link><FaFacebookF className="text-[1.5rem]"/></Link>
          <Link><FaInstagram className="text-[1.5rem]"/></Link>
          <Link><FaTwitter className="text-[1.5rem]"/></Link>
          <Link><FaLinkedinIn className="text-[1.5rem]"/></Link>
          <Link><FaYoutube className="text-[1.5rem]"/></Link>
        </div>
        <p className="text-[.7rem] text-center">Copyright © 2024-2025 OneHouseStand all rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;