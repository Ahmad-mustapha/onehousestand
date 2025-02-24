import Loreal from '../../assets/loreal.webp'
import Deloitte from '../../assets/deloitte.webp'
import Engel from '../../assets/engelandVolkers.webp'
import UberEats from '../../assets/uberEats.webp'
import Beobank from '../../assets/beobank.webp'
import Delhaize from '../../assets/delhaize.webp'
import Corona from '../../assets/corona.webp'
import Lancome from '../../assets/lancome.webp'
import Nutella from '../../assets/nutella.webp'

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

export const Talkaboutus = () =>(
    <div style={{ marginTop: '2rem', padding: '2rem' }} className='flex items-center justify-center flex-col'>
        <h2 className='text-[2.6rem]'>They talk about us</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12">
            {Talkaboutusdata.map((item) => (
            <div key={item.id} className="w-full flex items-center justify-center">
                <img src={item.image} alt={`Trusted brand ${item.id}`} className="w-18 h-24 object-contain opacity-65" />
            </div>
            ))}
        </div>
    </div>
)


