'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

interface cardDataType {
  imgSrc: string;
  heading: string;
  subheading: string;
  link?: string;
}

const cardData: cardDataType[] = [
  {
    imgSrc: '/images/Features/feature-one.svg',
    heading: 'Trusted Protection',
    subheading:
      'Over 10 years of experience protecting homes and businesses from unwanted pests.',
  },
  {
    imgSrc: '/images/Features/feature-two.svg',
    heading: 'Local Expertise',
    subheading:
      'Deep understanding of local pest challenges and the most effective solutions for our climate.',
  },
  {
    imgSrc: '/images/Features/feature-three.svg',
    heading: 'Quick Response',
    subheading:
      'Same-day service available because we know pest problems can"t wait.',
  },
  {
    imgSrc: '/images/Features/feature-four.svg',
    heading: 'Guaranteed Results',
    subheading:
      'Backed by our satisfaction guarantee - we don"t rest until the problem is solved.',
  },
];

const Work = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-40 px-6" id="about-section">
        <div className="text-center mb-14">
          <Fade
            direction={'up'}
            delay={300}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="text-pink text-lg font-normal mb-3 ls-51 uppercase">
              About
            </h3>
          </Fade>
          <Fade
            direction={'up'}
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <p className="text-3xl lg:text-5xl font-semibold text-lightgrey">
              Your Trusted Partner <br /> in Pest Control
            </p>
          </Fade>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32">
          <Fade
            direction={'up'}
            delay={1000}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            {cardData.map((items, i) => (
              <div className="card-b p-8 relative rounded-3xl" key={i}>
                <div className="work-img-bg rounded-full flex justify-center absolute top-[-50%] sm:top-[-40%] md:top-[-55%] lg:top-[-45%] left-[0%]">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={510}
                    height={10}
                  />
                </div>
                <h3 className="text-2xl text-black font-semibold text-center mt-16">
                  {items.heading}
                </h3>
                <p className="text-lg font-normal text-black text-center text-opacity-50 mt-2">
                  {items.subheading}
                </p>
                <div className="flex items-center justify-center">
                  <Link href="/">
                    {/* <p className="text-center text-lg font-medium text-pink mt-2 hover-underline">
                      {items.link}
                    </p> */}
                  </Link>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Work;
