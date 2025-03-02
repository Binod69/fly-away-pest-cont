// import Link from 'next/link';
// import Image from 'next/image';
// import { PhoneIcon } from '@heroicons/react/24/solid';

// interface ProductType {
//   id: number;
//   section: string;
//   link?: string[];
// }

// interface socialLinks {
//   imgSrc: string;
//   link: string;
//   width: number;
// }

// const socialLinks: socialLinks[] = [
//   {
//     imgSrc: '/images/Footer/facebook.svg',
//     link: 'https://www.facebook.com/profile.php?id=61566863571825',
//     width: 10,
//   },
//   {
//     imgSrc: '/images/Footer/insta.svg',
//     link: 'https://instagram.com',
//     width: 14,
//   },
//   {
//     imgSrc: '/images/Footer/twitter.svg',
//     link: 'https://twitter.com',
//     width: 14,
//   },
// ];

// const footer = () => {
//   const date = new Date().getFullYear();
//   return (
//     <div className="mx-auto max-w-2xl pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//       <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
//         {/* COLUMN-1 */}

//         <div className="sm:col-span-6 lg:col-span-5">
//           <div className="flex flex-shrink-0 items-center border-right">
//             <Image
//               src="/images/Logo/Logo.png"
//               alt="logo"
//               width={56}
//               height={56}
//             />
//             <Link href="/" className="text-2xl font-semibold text-black ml-4">
//               Fly Away Pest Control Qld
//             </Link>
//           </div>
//           <h3 className="text-textbl text-xs font-medium mt-5 mb-4 lg:mb-16">
//             Your Home, Our Shield. Zero Pests Guaranteed.
//           </h3>
//           <div className="flex gap-4">
//             {socialLinks.map((items, i) => (
//               <Link href={items.link} key={i} target="_blank">
//                 <div className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink">
//                   <Image
//                     src={items.imgSrc}
//                     alt={items.imgSrc}
//                     width={items.width}
//                     height={2}
//                     className="sepiaa"
//                   />
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* CLOUMN-2/3/4 */}

//         <div className="sm:col-span-2">
//           <h3 className=" text-darkgrey text-xl font-semibold mb-9">
//             Get In Touch
//           </h3>
//           <div className="flex flex-col items-center gap-2">
//             <div>
//               <PhoneIcon className="h-5 w-5 text-pink" />
//             </div>
//             <div>
//               <p className="text-base font-normal">+61 469 114 477</p>
//             </div>
//             <div>
//               <PhoneIcon className="h-5 w-5 text-pink" />
//             </div>
//             <div>
//               <p className="text-base font-normal">+61 469 114 477</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* All Rights Reserved */}

//       <div className="py-10 md:flex items-center justify-between border-t border-t-bordertop">
//         <h4 className="text-darkgrey text-sm text-center md:text-start font-normal">
//           @{date} - Fly Away Pest Control Qld. All Rights Reserved
//         </h4>
//         <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
//           <h4 className="text-darkgrey text-sm font-normal">
//             <Link href="/">Privacy policy</Link>
//           </h4>
//           <div className="h-5 bg-bordertop w-0.5"></div>
//           <h4 className="text-darkgrey text-sm font-normal">
//             <Link href="/">Terms & conditions</Link>
//           </h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default footer;
// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import CallNowButton from '../Navbar/CallButton';

// const Footer = () => {
//   const date = new Date().getFullYear();
//   return (
//     <footer className="mx-auto max-w-2xl pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//       <div className="container px-4 py-16 md:px-6">
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <Image
//                 src={'/images/logo/Logo.png'}
//                 alt="barnd logo"
//                 width={50}
//                 height={50}
//               />
//               <span className="text-xl font-bold">Fly Away Qld</span>
//             </div>
//             <p className="text-sm">
//               Your Home, Our Shield. Zero Pests Guaranteed.
//             </p>
//             <div className="flex space-x-4">
//               <Link
//                 href="https://www.facebook.com/profile.php?id=61566863571825"
//                 className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink"
//               >
//                 <Image
//                   src={'/images/Footer/facebook.svg'}
//                   alt="facebook logo"
//                   width={15}
//                   height={15}
//                   className="sepiaa"
//                 />
//                 <span className="sr-only">Facebook</span>
//               </Link>
//               <Link
//                 href="#"
//                 className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink"
//               >
//                 <Image
//                   src={'/images/Footer/insta.svg'}
//                   alt="instagram logo"
//                   width={24}
//                   height={24}
//                 />
//                 <span className="sr-only">Instagram</span>
//               </Link>
//             </div>
//           </div>
//           <div className="space-y-4">
//             <h3 className="text-lg font-bold">Get In Touch</h3>
//             <div className="space-y-2 text-sm">
//               <p>flyawaypestcontrol@gmail.com</p>
//               <p>+61 469 114 477</p>
//               <p>140-142 Eagleby Road , Eagleby, QLD, Australia, Queensland</p>
//               <p>Open 24/7</p>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
//             <div className="space-y-4">
//               <h3 className="text-lg font-bold">Quick Links</h3>
//               <nav className="flex flex-col space-y-2 text-sm">
//                 <Link className=" space-links" href="/">
//                   Home
//                 </Link>
//                 <Link className="hover:underline" href="#about-section">
//                   About
//                 </Link>
//                 <Link className="hover:underline" href="#price-section">
//                   Pricing
//                 </Link>
//                 <Link className="hover:underline" href="#service-section">
//                   Services
//                 </Link>
//               </nav>
//             </div>
//             {/* <div className="space-y-4">
//               <h3 className="text-lg font-bold invisible">Links</h3>
//               <nav className="flex flex-col space-y-2 text-sm">
//                 <Link className="hover:underline" href="#">
//                   Careers
//                 </Link>
//                 <Link className="hover:underline" href="#">
//                   About
//                 </Link>
//                 <Link className="hover:underline" href="#">
//                   Contact
//                 </Link>
//                 <Link className="hover:underline" href="#">
//                   Products
//                 </Link>
//               </nav>
//             </div> */}
//           </div>
//           <div className="space-y-4">
//             {/* <CallNowButton className="text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6" /> */}
//           </div>
//         </div>
//       </div>
//       <div className="border-t  border-darkgrey/20 ">
//         <div className="container flex flex-col items-center justify-center gap-4 py-6 text-center text-sm md:h-16 md:flex-row md:py-0">
//           <div className="text-base">
//             Copyright@{date} All Right Reserved Fly Away Pest Control Qld.
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-2xl pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div>
                <Image
                  src={"/images/Logo/logo.png"}
                  alt="brand logo"
                  width={50}
                  height={50}
                />
              </div>
              <span className="text-xl font-semibold">
                Fly Away Pest Control
              </span>
            </div>
            <p className="text-sm text-lightgrey">
              Your Home, Our Shield. Zero Pests Guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-lightgrey hover:text-pink transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about-section"
                  className="text-lightgrey hover:text-pink transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing-section"
                  className="text-lightgrey hover:text-pink transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-lightgrey hover:text-pink transition-colors"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 flex flex-col items-center justify-center">
              <li className="flex items-center justify-center space-x-2 text-lightgrey text-sm">
                <EnvelopeIcon className="h-5 w-10" />
                <span>flyawaypestcontrol@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-lightgrey text-sm">
                <PhoneIcon className=" h-5 w-5" />
                <span>+61 469 114 477</span>
              </li>
              <li className="flex items-center space-x-2 text-lightgrey text-sm">
                <MapPinIcon className=" h-5 w-10" />
                <span>
                  140-142 Eagleby Road , Eagleby, QLD, Australia, Queensland
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="">
              <Link
                href="https://www.facebook.com/profile.php?id=61566863571825"
                className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink"
                target="blank"
              >
                <Image
                  src={"/images/Footer/facebook.svg"}
                  alt="facebook logo"
                  width={15}
                  height={15}
                  className="sepiaa"
                />
                <span className="sr-only">Facebook</span>
              </Link>
              {/* <a href="#" className="hover:text-gray-300 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Instagram size={24} />
              </a> */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-pink text-center text-sm text-lightgrey">
          © {new Date().getFullYear()} Fly Away Pest Control Qld. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
