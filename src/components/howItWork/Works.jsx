import Room from '../../assets/houseHIW.webp'
import Cup from '../../assets/drinks.webp'
import Calendar from '../../assets/calendar.webp'

const worksData = [
  {id: 1, title: 'Find the perfect room', image: Room, details: 'A loft, a villa, a penthouse, a gallery... Find the perfect room in Brussels, Antwerp, Walloon Brabant or Flemish Brabant. We have what you need.'},
  {id: 2, title: 'Find the perfect room', image: Cup, details: 'Discover our partners and find a caterer, equipment and entertainment for your event.'},
  {id: 3, title: 'Find the perfect room', image: Calendar, details: 'Create a unique experience in a unique place, and enjoy!'},
]


export const EachWork = () =>(
    <div style={{marginTop: '2rem'}} className='flex items-center gap-8 flex-wrap justify-center lg:justify-normal lg:flex-nowrap'>
      {
        worksData.map((item, index)=>(
          <div className='w-full md:w-[300px] flex flex-col justify-center items-center'>
            <div className='w-[110px]'><img src={item.image} alt="" /></div>
            <h2 className='text-[25px] font-[600] text-center'>{item.title}</h2>
            <p className='text-[18px] text-center'>{item.details}</p>
          </div>
        ))
      }
    </div>
)

const Works = () => {
  return (
    <div style={{padding: '2rem'}} className="flex items-center justify-center flex-col">
      <h1 className="text-[38px] font-[500]">How it works</h1>
      <EachWork />
    </div>
  )
}

export default Works