// 'use client';
// import Slider from 'react-slick';
// import React, { Component } from 'react';
// import Image from 'next/image';
// import { Fade } from 'react-awesome-reveal';

// // CAROUSEL DATA

// interface DataType {
//   profession: string;
//   name: string;
//   imgSrc: string;
// }

// const postData: DataType[] = [
//   {
//     profession: 'Senior Chef',
//     name: 'Shoo Thar Mien',
//     imgSrc: '/images/Expert/boyone.svg',
//   },
//   {
//     profession: 'Junior Chef',
//     name: 'Shoo Thar Mien',
//     imgSrc: '/images/Expert/girl.png',
//   },
//   {
//     profession: 'Junior Chef',
//     name: 'Shoo Thar Mien',
//     imgSrc: '/images/Expert/boytwo.svg',
//   },
//   {
//     profession: 'Junior Chef',
//     name: 'Shoo Thar Mien',
//     imgSrc: '/images/Expert/girl.png',
//   },
//   {
//     profession: 'Junior Chef',
//     name: 'Shoo Thar Mien',
//     imgSrc: '/images/Expert/girl.png',
//   },
//   {
//     profession: 'Junior Chef',
//     name: 'Shoo Thar Mien',
//     imgSrc: '/images/Expert/girl.png',
//   },
// ];

// // CAROUSEL SETTINGS

// export default class MultipleItems extends Component {
//   render() {
//     const settings = {
//       dots: false,
//       infinite: true,
//       slidesToShow: 3,
//       // centerMode: true,
//       slidesToScroll: 1,
//       arrows: false,
//       autoplay: false,
//       speed: 4000,
//       autoplaySpeed: 2000,
//       cssEase: 'linear',
//       responsive: [
//         {
//           breakpoint: 1200,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: false,
//           },
//         },
//         {
//           breakpoint: 800,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: false,
//           },
//         },
//         {
//           breakpoint: 450,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: false,
//           },
//         },
//       ],
//     };

//     return (
//       <div className="py-10 sm:py-20 bg-darkpink">
//         <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
//           <div className="text-center">
//             <Fade
//               direction={'up'}
//               delay={400}
//               cascade
//               damping={1e-1}
//               triggerOnce={true}
//             >
//               <h2 className="text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51">
//                 EXPERT CHEFS
//               </h2>
//             </Fade>
//             <Fade
//               direction={'up'}
//               delay={800}
//               cascade
//               damping={1e-1}
//               triggerOnce={true}
//             >
//               <h3 className="text-3xl lg:text-5xl font-semibold text-black">
//                 User&apos;s Review
//               </h3>
//             </Fade>
//           </div>

//           <Slider {...settings}>
//             {postData.map((items, i) => (
//               <div key={i}>
//                 <div className="m-3 py-14 my-10 text-center">
//                   <div className="relative">
//                     <Image
//                       src={items.imgSrc}
//                       alt="gaby"
//                       width={362}
//                       height={262}
//                       className="inline-block m-auto"
//                     />
//                     <div className="absolute top-[50%] right-[2%]">
//                       <Image
//                         src={'/images/Expert/Linkedin.svg'}
//                         alt="linkedin"
//                         width={220}
//                         height={120}
//                       />
//                     </div>
//                   </div>
//                   <h3 className="text-2xl font-semibold text-lightblack">
//                     {items.name}
//                   </h3>
//                   <h4 className="text-lg font-normal text-lightblack pt-4 pb-2 opacity-50">
//                     {items.profession}
//                   </h4>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     );
//   }
// }

// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import SlickSlider from 'react-slick';
// import { Fade } from 'react-awesome-reveal';
// import { UserCircleIcon } from '@heroicons/react/24/outline';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// interface ExpertReviewData {
//   profession: string;
//   name: string;
//   imgSrc: React.ReactElement;
// }

// const expertReviewData: ExpertReviewData[] = [
//   {
//     profession: 'Senior Chef',
//     name: 'Shoo Thar Mien',
//     imgSrc: <UserCircleIcon className="h-20 w-20 text-pink" />,
//   },
//   {
//     profession: 'Junior Chef',
//     name: 'Shoo Thar Mien',
//     imgSrc: <UserCircleIcon />,
//   },
//   {
//     profession: 'Junior Chef',
//     name: 'Shoo Thar Mien',
//     imgSrc: <UserCircleIcon />,
//   },
//   {
//     profession: 'Junior Chef',
//     name: 'Shoo Thar Mien',
//     imgSrc: <UserCircleIcon />,
//   },
//   {
//     profession: 'Junior Chef',
//     name: 'Shoo Thar Mien',
//     imgSrc: <UserCircleIcon />,
//   },
//   {
//     profession: 'Junior Chef',
//     name: 'Shoo Thar Mien',
//     imgSrc: <UserCircleIcon />,
//   },
// ];

// const ExpertReviewsCarousel: React.FC = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: false,
//     speed: 4000,
//     autoplaySpeed: 5000,
//     cssEase: 'linear',
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 450,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="py-10 sm:py-20 bg-darkpink">
//       <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
//         <div className="text-center">
//           <Fade
//             direction={'up'}
//             delay={400}
//             cascade
//             damping={1e-1}
//             triggerOnce={true}
//           >
//             <h2 className="text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51">
//               What Our Customers are saying?
//             </h2>
//           </Fade>
//           <Fade
//             direction={'up'}
//             delay={800}
//             cascade
//             damping={1e-1}
//             triggerOnce={true}
//           >
//             <h3 className="text-3xl lg:text-5xl font-semibold text-black">
//               Customer&apos;s Review
//             </h3>
//           </Fade>
//         </div>

//         <SlickSlider {...settings}>
//           {expertReviewData.map((expert, index) => (
//             <div key={index} className="px-2 flex">
//               <div className="m-3 py-14 my-10 text-center">
//                 <div className=" flex">
//                   {/* <Image
//                     src={expert.imgSrc}
//                     alt={expert.name}
//                     width={362}
//                     height={262}
//                     className="inline-block m-auto"
//                   /> */}
//                   {expert.imgSrc}
//                   <h3 className="text-2xl font-semibold text-lightblack">
//                     {expert.name}
//                   </h3>
//                   <h4 className="text-lg font-normal text-lightblack pt-4 pb-2 opacity-50">
//                     {expert.profession}
//                   </h4>
//                   <div className="">
//                     {/* <Image
//                       src={'/images/Expert/image.png'}
//                       alt="linkedin"
//                       width={40}
//                       height={50}
//                     /> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </SlickSlider>
//       </div>
//     </div>
//   );
// };

// export default ExpertReviewsCarousel;

'use client';

import React from 'react';
import Image from 'next/image';
import SlickSlider from 'react-slick';
import { StarIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ReviewData {
  id: number;
  name: string;
  avatar?: React.ReactElement;
  rating: number;
  review: string;
}

const googleReviews: ReviewData[] = [
  {
    id: 1,
    name: 'Ehsan Tanhaei',
    avatar: <UserCircleIcon className=" h-10 w-10 text-darkgrey" />,
    rating: 5,
    review:
      'Definitely recommend, my house was full of ants. No more ant even after a few hours. Very professional and friendly.Thanks mate.',
  },
  {
    id: 2,
    name: 'Dan Knight',
    avatar: <UserCircleIcon className=" h-10 w-10 text-darkgrey" />,
    rating: 5,
    review:
      'Great communicated & service, arrived on time & carried out work with no problems, would recommend & will be using again',
  },
  {
    id: 3,
    name: 'Jayson Zhang',
    avatar: <UserCircleIcon className=" h-10 w-10 text-darkgrey" />,
    rating: 5,
    review: 'Great service highly recommend',
  },
  {
    id: 4,
    name: 'Ali Eryilmaz',
    avatar: <UserCircleIcon className=" h-10 w-10 text-darkgrey" />,
    rating: 5,
    review: 'Great service, very thorough! Thank you',
  },
  {
    id: 5,
    name: 'Ahmet Eryilmaz',
    avatar: <UserCircleIcon className=" h-10 w-10 text-white" />,
    rating: 5,
    review: 'Professional and reliable pest control services.',
  },
];

const GoogleReviewsCarousel: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        className={`h-5 w-5 ${
          index < rating ? ' text-starcolor' : 'text-gray-300'
        }`}
        fill={index < rating ? 'currentColor' : 'none'}
      />
    ));
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-darkpink py-10  sm:py-20 ">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:py-8">
        <div className="text-center mb-10">
          <h2 className="text-pink text-sm md:text-lg font-normal mb-3 tracking-widest uppercase ls-51">
            What our customers are saying?
          </h2>
          <h3 className="text-3xl lg:text-5xl font-semibold text-black">
            Customer&apos;s Review
          </h3>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center">
              {renderStars(5)}
              <span className="ml-2 text-gray-600">(5)</span>
            </div>
          </div>
        </div>

        <SlickSlider {...sliderSettings}>
          {googleReviews.map((review) => (
            <div key={review.id} className="p-4">
              <div className="card-b p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {review.avatar ? (
                      <span>{review.avatar}</span>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-darkgrey">
                      {review.name}
                    </h3>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                </div>
                <p className="text-darkgrey italic text-sm">
                  &quot;{review.review}&quot;
                </p>
                <div className="mt-4 flex items-center">
                  <Image
                    src="/images/Expert/image.png"
                    alt="Google"
                    width={40}
                    height={26}
                  />
                </div>
              </div>
            </div>
          ))}
        </SlickSlider>
      </div>
    </div>
  );
};

export default GoogleReviewsCarousel;
