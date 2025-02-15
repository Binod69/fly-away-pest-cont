'use client';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import CallNowButton from '../Navbar/CallButton';

const Banner = () => {
  return (
    <div id="home-section" className="bg-lightpink">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={'up'}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h1 className="text-4xl lg:text-5xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center ">
                Safeguard Your Property with Industry-Leading Pest Control
              </h1>
            </Fade>
            <Fade
              direction={'up'}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-grey lg:text-md font-normal mb-10 lg:text-start text-center">
                We deliver comprehensive pest control solutions that safeguard
                your property and peace of mind. Our certified technicians use
                advanced, eco-friendly methods to eliminate current infestations
                and prevent future ones.
              </p>
            </Fade>
            <Fade
              direction={'up'}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="md:flex align-middle justify-center lg:justify-start mb-5">
                <CallNowButton className="text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6" />
              </div>
            </Fade>
          </div>

          <div className="col-span-6 flex justify-center relative">
            <div className="flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute">
              <Image
                src={'/images/Banner/pest.jpg'}
                alt="pest terminator"
                width={68}
                height={68}
              />
              <p className="text-lg font-normal">
                24/7 emergency <br /> services
              </p>
            </div>
            <Image
              src="/images/Banner/hero.png"
              alt="banner image"
              width={850}
              height={805}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
