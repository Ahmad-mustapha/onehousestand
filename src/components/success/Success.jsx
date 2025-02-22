import React, { useState, useEffect } from 'react';
import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi';
import './success.css';

const Success = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="bg-[#272729] min-h-[80vh] text-[#8E8E8E] success">
      <div className="flex flex-col md:flex-row">
        {/* Text Section */}
        <div className="textsection p-8 md:p-20 flex-1">
          <h2 className="text-white text-[35px] font-[600]">Your event: <br /> a success!</h2>
          <div className="relative h-64 overflow-hidden">
            {/* Testimonial 1 */}
            <div className={`absolute transition-opacity duration-1000 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-baseline">
                <BiSolidQuoteLeft className="text-[20px] mr-2" />
                <p className="text-[18px] md:text-[20px] font-[500]">
                  The OneHouseStand experience is the best! Helpfulness, quality and availability are the three keywords that come to mind when I think about it. No need to worry about logistics anymore!
                </p>
                <BiSolidQuoteRight className="text-[20px] ml-2" />
              </div>
              <p className="mt-4">Michael Godfriaux</p>
              <p>CEO & Principal Agent at Be My Models</p>
            </div>
            {/* Testimonial 2 */}
            <div className={`absolute transition-opacity duration-1000 ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-baseline">
                <BiSolidQuoteLeft className="text-[20px] mr-2" />
                <p className="text-[18px] md:text-[20px] font-[500]">
                  Thank you OneHouseStand for this fruitful collaboration! Beautiful space, the New Year's reception was a success!
                </p>
                <BiSolidQuoteRight className="text-[20px] ml-2" />
              </div>
              <p className="mt-4">Martin Gillet</p>
              <p>VP Global Communications & Marketing at Tesla Owners Club BE</p>
            </div>
            {/* Testimonial 3 */}
            <div className={`absolute transition-opacity duration-1000 ${activeIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-baseline">
                <BiSolidQuoteLeft className="text-[20px] mr-2" />
                <p className="text-[18px] md:text-[20px] font-[500]">
                  Great venue, great service and excellent quality food and drinks
                </p>
                <BiSolidQuoteRight className="text-[20px] ml-2" />
              </div>
              <p className="mt-4">Adrian Carniol</p>
              <p>Commercial Director Luxury Division at L'Oréal</p>
            </div>
          </div>
        </div>
        {/* Image Section - Hidden on small screens, visible on md and above */}
        <div className="hidden md:block flex-1">
          <div className="slanted-image-wrapper h-[80vh] w-full">
            <div
              className="slanted-image h-full w-full"
              style={{
                backgroundImage: "url('https://cloud.githubusercontent.com/assets/6893715/21904006/e307032c-d8b6-11e6-9e4a-52dccfedf8a5.jpg')",
              }}
            ></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slanted-image-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }

        .slanted-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          clip-path: polygon(100% 0, 100% 100%, 0% 100%, 40% 0);
        }

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

export default Success;