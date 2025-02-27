import { Link } from 'react-router-dom';
import First from '../../assets/first.jpg'
import { BsPeople } from "react-icons/bs";
import Firstpopu from '../../assets/firstpopu.webp'
import Secpopu from '../../assets/secpopu.jpg'
import Thirdpopu from '../../assets/thirdpopu.jpg'
import Fourthpopu from '../../assets/fouthpopu.jpg'
import FifthPopu from '../../assets/fifthpopu.jpg'
import Sixpopu from '../../assets/sixpopu.jpg'
import Sevenpopu from '../../assets/sevenpopu.jpg'
import Eightpopu from '../../assets/eightpopu.webp'


const EachPopularRoomdata = [
    {id: 1, name: "In Dominique's villa", location: "Brussels | Uccle", initAmount: "135", secAmount: "1620", image: Firstpopu},
    {id: 2, name: "In Dominique's villa", location: "Brussels | Uccle", initAmount: "135", secAmount: "1620", image: Secpopu},
    {id: 3, name: "In Dominique's villa", location: "Brussels | Uccle", initAmount: "135", secAmount: "1620", image: Thirdpopu},
    {id: 4, name: "In Dominique's villa", location: "Brussels | Uccle", initAmount: "135", secAmount: "1620", image: Thirdpopu},
    {id: 5, name: "In Dominique's villa", location: "Brussels | Uccle", initAmount: "135", secAmount: "1620", image: Fourthpopu},
    {id: 6, name: "In Dominique's villa", location: "Brussels | Uccle", initAmount: "135", secAmount: "1620", image: FifthPopu},
    {id: 7, name: "In Dominique's villa", location: "Brussels | Uccle", initAmount: "135", secAmount: "1620", image: Sixpopu},
    {id: 8, name: "In Dominique's villa", location: "Brussels | Uccle", initAmount: "135", secAmount: "1620", image: Sevenpopu},
    {id: 9, name: "In Dominique's villa", location: "Brussels | Uccle", initAmount: "135", secAmount: "1620", image: Eightpopu},
  ]


export const EachPopularRoom = () => {
    return(
        <div className='projects'>
            {
            EachPopularRoomdata.map((item, index) =>(
                <Link key={index}>
                    <div className='eachproject relative'>
                        <div className='w-full'><img className='w-full' src={item.image} alt="" /></div>
                        <div style={{padding: '.5rem'}}>
                            <div style={{marginTop: '.4rem'}}>
                                <p className='text-[18px] font-[500]'>In Dominique's villa</p>
                                <p className='text-[12px]'>Brussels | Uccle</p>
                                </div>
                                <div style={{marginTop: '1rem'}} className='flex items-center gap-8'>
                                <p><sub>from</sub><span className='text-[18px] font-[500]'>#135</span><sub>/h</sub><span className='text-[18px] font-[500]'>#135</span><sub>/day</sub></p>
                                <p className='flex items-center text-red-400 text-[14px]'><BsPeople /> <span>70</span></p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))
            }
        </div>
    )
}
const Popularrooms = () => {
  return (
    <div style={{padding: '2rem'}} className=''>
        <div className='flex items-center justify-center flex-col'>
            <h2 className='text-[38px]'>Popular Rooms for Rent</h2>
            <p className='text-[25px]'>Discover a selection of unusual rooms</p>
        </div>
        <section style={{marginTop: '3rem'}} className='flex items-center justify-center'>
            <EachPopularRoom />
        </section>
    </div>
  )
}

export default Popularrooms