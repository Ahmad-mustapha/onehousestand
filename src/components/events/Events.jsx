import Loreal from '../../assets/loreal.webp'
import Deloitte from '../../assets/deloitte.webp'
import EngelAndVolkers from '../../assets/engel&Volkers.webp'
import UberEats from '../../assets/uberEats.webp'
import Beobank from '../../assets/beobank.webp'
import Delhaize from '../../assets/delhaize.webp'

const eachEventData = [
    {id:1, image: Loreal },
    {id:2, image: Deloitte },
    {id:3, image: EngelAndVolkers },
    {id:4, image: UberEats },
    {id:5, image: Beobank },
    {id:6, image: Delhaize },
    {id:7, image: UberEats },
    {id:8, image: Beobank },
]

const Eachevent = () =>(
    <div style={{padding: '2rem'}} className='flex items-center flex-wrap md:flex-nowrap gap-6'>
        {
            eachEventData.map((item, index) => (
                <div key={index} className='w-[120px]'><img src={item.image} alt="" /></div>
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