import Loreal from '../../assets/loreal.webp'
import Deloitte from '../../assets/deloitte.webp'
import Engel from '../../assets/engelandVolkers.webp'
import UberEats from '../../assets/uberEats.webp'
import Beobank from '../../assets/beobank.webp'
import Delhaize from '../../assets/delhaize.webp'
import Corona from '../../assets/corona.webp'
import Lancome from '../../assets/lancome.webp'
import Nutella from '../../assets/nutella.webp'


import Lesoir from '../../assets/leSoir.png'
import Radiocontact from '../../assets/radioContact.png'
import Lecho from '../../assets/lEcho.png'
import Trends from '../../assets/trends.png'
import Dhnew from '../../assets/dhNew.png'
import Marrieclaire from '../../assets/marieclaire.png'
import Lalibre from '../../assets/laLibre.png'
import Bx from '../../assets/bx.png'
import Flair from '../../assets/flair.png'
import Geeko from '../../assets/geeko.png'
import Rtbf from '../../assets/rtbf.png'
import Lacapitale from '../../assets/laCapitale.png'
import Visitbrussels from '../../assets/visitBrussels.png'
import Nieuwsblad from '../../assets/nieuwsblad.png'
import Sosoir from '../../assets/soSoir.png'
import Brussels from '../../assets/brussels.png'

import { Link } from 'react-router-dom'

const eachEventData = [
    {id:1, image: Loreal },
    {id:2, image: Deloitte },
    {id:3, image: Engel },
    {id:4, image: UberEats },
    {id:5, image: Beobank },
    {id:6, image: Delhaize },
    {id:7, image: UberEats },
    {id:8, image: Beobank },
    {id:8, image: Corona },
    {id:8, image: Lancome },
    {id:8, image: Nutella },

]

const Eachevent = () =>(
    <div style={{padding: '2rem'}} className='flex items-center justify-center flex-wrap md:flex-nowrap gap-6 event'>
        {
            eachEventData.map((item, index) => (
                <div key={index} className='w-[100px]'><img className='w-full' src={item.image} alt="" /></div>
            ))
        }
    </div>
)

const Events = () => {
  return (
    <div style={{marginTop: '1rem'}} className=''>
        <p className='font-[500] text-[1.3rem] text-center'>They organize their events on OneHouseStand</p>
        <Eachevent />
    </div>
  )
}

export default Events


const Talkaboutusdata = [
    {id:1, image: Lesoir },
    {id:2, image: Radiocontact },
    {id:3, image: Lecho },
    {id:4, image: Trends },
    {id:5, image: Dhnew },
    {id:6, image: Marrieclaire },
    {id:7, image: Lalibre },
    {id:8, image: Bx },
    {id:8, image: Flair },
    {id:9, image: Geeko },
    {id:10, image: Rtbf },
    {id:11, image: Lacapitale },
    {id:12, image: Visitbrussels },
    {id:13, image: Nieuwsblad },
    {id:14, image: Sosoir },
    {id:15, image: Brussels },
]

export const Talkaboutus = () =>(
    <div style={{ marginTop: '2rem', padding: '2rem' }} className='flex items-center justify-center flex-col'>
        <h2 className='text-[2.6rem]'>They talk about us</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12">
            {Talkaboutusdata.map((item) => (
            <div key={item.id} className="w-full flex items-center justify-center">
                <Link><img src={item.image} alt={`Trusted brand ${item.id}`} className="w-18 h-24 object-contain opacity-65" /></Link>
            </div>
            ))}
        </div>
    </div>
)


