'use client';
import { Fade } from 'react-awesome-reveal';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const Services = () => {
  return (
    <div id="service-section">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 mt-20 md:pt-24">
        <div className="text-center">
          <Fade
            direction={'up'}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h2 className="text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51">
              Our Services
            </h2>
          </Fade>
          <Fade
            direction={'up'}
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="text-3xl lg:text-5xl font-semibold text-black">
              Professional Pest Control Services
            </h3>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 my-16 sm:space-x-6 space-y-6 md:space-y-0 px-6">
          <div className="col-span-6 flex justify-center overflow-hidden rounded-3xl">
            <div className="card-b p-10 rounded-md">
              <h3 className="text-2xl text-black font-semibold text-start mb-5">
                General Pest Control
              </h3>
              <p className="text-sm text-[#98918E] text-start">
                Comprehensive treatment for common household pests including
                ants, roaches, and beetles.
              </p>
              <article>
                <p className=" flex gap-2 items-center text-sm my-5 leading-relaxed text-[#98918E]">
                  <span>
                    <CheckCircleIcon className="h-5 w-5" />
                  </span>
                  Interior and exterior treatments
                </p>
                <p className=" flex gap-2 items-center text-sm  leading-relaxed text-[#98918E]">
                  <span>
                    <CheckCircleIcon className="h-5 w-5" />
                  </span>
                  Preventive barrier protection
                </p>
                <p className=" flex gap-2 items-center text-sm mt-5 leading-relaxed text-[#98918E]">
                  <span>
                    <CheckCircleIcon className="h-5 w-5" />
                  </span>
                  Entry point inspection and sealing
                </p>
                <p className=" flex gap-2 items-center text-sm mt-5 leading-relaxed text-[#98918E]">
                  <span>
                    <CheckCircleIcon className="h-5 w-5" />
                  </span>
                  Quarterly maintenance available
                </p>
              </article>
            </div>
          </div>

          <div className="col-span-6 flex justify-center">
            <div className="grid grid-rows-1 grid-flow-row gap-4">
              <div className="row-span-1 overflow-hidden rounded-3xl">
                <div className="card-b p-10 rounded-md">
                  <h3 className="text-2xl text-black font-semibold text-start mb-5">
                    Residential Services
                  </h3>
                  <p className="text-sm text-[#98918E] text-start">
                    Customized pest control solutions for homeowners and
                    renters.
                  </p>
                  <article>
                    <p className=" flex gap-2 items-center text-sm my-5 leading-relaxed text-[#98918E]">
                      <span>
                        <CheckCircleIcon className="h-5 w-5" />
                      </span>
                      Whole home inspection
                    </p>
                    <p className=" flex gap-2 items-center text-sm  leading-relaxed text-[#98918E]">
                      <span>
                        <CheckCircleIcon className="h-5 w-5" />
                      </span>
                      Custom treatment plans
                    </p>
                    <p className=" flex gap-2 items-center text-sm mt-5 leading-relaxed text-[#98918E]">
                      <span>
                        <CheckCircleIcon className="h-5 w-5" />
                      </span>
                      Child and pet-safe methods
                    </p>
                    <p className=" flex gap-2 items-center text-sm mt-5 leading-relaxed text-[#98918E]">
                      <span>
                        <CheckCircleIcon className="h-5 w-5" />
                      </span>
                      Regular monitoring
                    </p>
                  </article>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <div className="overflow-hidden rounded-3xl">
                  <div className="card-b p-10 rounded-md">
                    <h3 className="text-2xl text-black font-semibold text-start mb-5">
                      Commercial Services
                    </h3>
                    <p className="text-sm text-[#98918E] text-start">
                      Professional pest management for businesses and commercial
                      properties.
                    </p>
                    <article>
                      <p className=" flex gap-2 items-center text-sm my-5 leading-relaxed text-[#98918E]">
                        <span>
                          <CheckCircleIcon className="h-5 w-5" />
                        </span>
                        Industry-specific solutions
                      </p>
                      <p className=" flex gap-2 items-center text-sm  leading-relaxed text-[#98918E]">
                        <span>
                          <CheckCircleIcon className="h-5 w-5" />
                        </span>
                        Health code compliance
                      </p>
                      <p className=" flex gap-2 items-center text-sm mt-5 leading-relaxed text-[#98918E]">
                        <span>
                          <CheckCircleIcon className="h-5 w-5" />
                        </span>
                        Documentation and reporting
                      </p>
                      <p className=" flex gap-2 items-center text-sm mt-5 leading-relaxed text-[#98918E]">
                        <span>
                          <CheckCircleIcon className="h-5 w-5" />
                        </span>
                        Emergency response available
                      </p>
                    </article>
                  </div>
                </div>
                {/* <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/images/Gallery/foodfour.jpg"
                    alt="pizza-four"
                    width={500}
                    height={405}
                    className="inner-img"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-pink text-lg font-normal  tracking-widest uppercase ls-51 text-center">
        Our Commitment
      </h2>
      <p className="text-xs md:text-sm p-3  text-center text-[#98918E]">
        We take pride in being more than just a pest control service -
        we&apos;re your partners in creating a safe, pest-free environment.
      </p>
    </div>
  );
};

export default Services;
