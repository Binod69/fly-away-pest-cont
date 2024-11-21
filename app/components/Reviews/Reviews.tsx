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

const Reviews: React.FC = () => {
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

export default Reviews;
