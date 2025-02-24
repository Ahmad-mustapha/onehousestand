import React from 'react';
import RentImage from '../../assets/rent.png';
import { Link } from 'react-router-dom';

const Rent = () => {
  return (
    <section className="bg-[#ddd] min-h-[50vh] success">
      <div className="flex flex-col md:flex-row h-full">
        {/* Image Section - Hidden on small screens, visible on md and above */}
        <div className="hidden md:block flex-1 h-[] relative">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${RentImage})`,
            }}
          ></div>
        </div>
        {/* Text Section */}
        <div className="textsection p-8 md:p-20 flex-1 flex flex-col justify-center items-center text-center">
          <h2 className="text-[40px] font-[600] mb-4">Rent my property</h2>
          <p className="text-[18px] md:text-[22px] font-[] max-w-[600px]">
            Join the OneHouseStand host community and earn money by renting out your home for just a few hours.
          </p>
          <div style={{marginTop: '2rem'}}><Link style={{padding: '1rem 3rem'}} className='text-white  font-[600] bg-[#f73e55] hover:bg-[#ff8896]'>Rent my property</Link></div>
        </div>
        {/* Empty flex-1 div to balance the layout */}
        <div className="flex-1"></div>
      </div>

      <style jsx>{`
        .textsection {
          padding: 5rem;
        }

        @media only screen and (max-width: 600px) {
          .textsection {
            padding: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default Rent;