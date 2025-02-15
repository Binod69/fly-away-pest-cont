'use client';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const Pricing = () => {
  return (
    <div className="relative" id="price-section">
      <div className="mx-auto max-w-2xl min-h-[60vh] md:min-h-0 bg-pink br-50  md:max-w-7xl  rounded-lg">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="col-span-7">
            <div className="m-10 lg:ml-32 lg:mt-20 lg:mb-20">
              
                <h3 className="text-lg font-normal text-white mb-3 ls-51">
                  {' '}
                  Affordable Pricing
                </h3>
            
              
                <h3 className="text-3xl md:text-5xl font-semibold text-white mb-4">
                  Get Rid of Pests, Not Your Savings
                </h3>
             

              <div>
               
                  <p className=" text-xs font-normal text-white">
                    Professional pest control shouldn&apos;t break the bank. Our
                    straightforward $99 treatment plan gives you peace of mind
                    and a pest-free home. No hidden fees, no surprises – just
                    effective pest control at a price that makes sense.
                  </p>
                  {/* <div className="relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-full">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2"></div>
                  </div> */}
               
              </div>
            </div>
          </div>

          {/* COLUMN-2 */}

          <div className="col-span-5 relative w-[70%] m-10 md:m-0 flex items-start justify-center mx-auto">
            <div>
              <Image
                src={'/images/Newsletter/Frame 1.png'}
                alt="soup-image"
                width={626}
                height={602}
                className="-mt-24"
              />
            </div>
            {/* <div className="absolute top-[70%] left-10">
              <Image
                src={'/images/Newsletter/rb_2.png'}
                alt="onion-image"
                width={300}
                height={122}
              />
            </div> */}
            {/* <div className="absolute top-[30%] right-[-15%] hidden lg:block">
              <Image
                src={'/images/Newsletter/rb_3.png'}
                alt="lettuce-image"
                width={200}
                height={122}
              />
            </div> */}
            <div className="absolute hidden md:block bottom-[10%] left-[0%]">
              <Image
                src={'/images/Newsletter/yellow.svg'}
                alt="yellow-image"
                width={59}
                height={59}
              />
            </div>
            <div className="absolute bottom-[20%] right-[20%]">
              <Image
                src={'/images/Newsletter/blue.svg'}
                alt="blue-image"
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
