import Loreal from '../../assets/loreal.webp'
import Deloitte from '../../assets/deloitte.webp'
import EngelAndVolkers from '../../assets/engel&Volkers.webp'
import UberEats from '../../assets/uberEats.webp'
import Beobank from '../../assets/beobank.webp'
import Delhaize from '../../assets/delhaize.webp'
import Corona from '../../assets/corona.webp'
import Lancome from '../../assets/lancome.webp'
import Nutella from '../../assets/nutella.webp'

const eachEventData = [
    {id:1, image: Loreal },
    {id:2, image: Deloitte },
    {id:3, image: EngelAndVolkers },
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
        {/* <div className='flex items-center justify-center'> */}
            <Eachevent />
        {/* </div> */}
    </div>
  )
}

export default Events