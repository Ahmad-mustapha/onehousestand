import First from '../../assets/first.jpg'
import { BsPeople } from "react-icons/bs";
import './newrooms.css'

const EachNewRoomdata = [
  {id: 1, name: "In Dominique's villa", location: "Brussels | Uccle", initAmount: "135", secAmount: "1620"},
  {id: 2, name: "In Dominique's villa", location: "Brussels | Uccle", initAmount: "135", secAmount: "1620"},
  {id: 3, name: "In Dominique's villa", location: "Brussels | Uccle", initAmount: "135", secAmount: "1620"},
  {id: 4, name: "In Dominique's villa", location: "Brussels | Uccle", initAmount: "135", secAmount: "1620"},
]

export const EachNewRoom = () => {
    return(
        <div className='projects'>
            {
              EachNewRoomdata.map((item, index) =>(
                <div key={index} className='eachproject relative'>
                  <div className='w-full'><img className='w-full' src={First} alt="" /></div>
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
                  <p style={{padding: '.3rem .5rem'}} className='absolute top-4 right-4 font-[600] text-[17px] text-white bg-red-400 rounded-sm'>New</p>
                </div>
              ))
            }
        </div>
    )
}





const Newrooms = () => {
  return (
    <div style={{padding: '2rem'}} className=''>
        <div className='flex items-center justify-center flex-col'>
            <h2 className='text-[38px]'>New rooms for rent</h2>
            <p className='text-[25px]'>Discover a selection of our new rooms</p>
        </div>
        <section style={{marginTop: '3rem'}} className='flex items-center justify-center'>
          <EachNewRoom />
        </section>
    </div>
  )
}

export default Newrooms