import React from 'react';
import Link from 'next/link';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '#home-section', current: false },
  { name: 'About us', href: '#about-section', current: false },
  { name: 'Services', href: '#cook-section', current: false },
  { name: 'Pricing', href: '#gallery-section', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Data = () => {
  const phoneNumber = '+61 469 114 477';

  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-purple'
                    : 'text-black hover:bg-gray-700 hover:text-purple',
                  'block  py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4"></div>
            <Link
              href={`tel:${phoneNumber}`}
              className="flex justify-center text-base w-full font-medium rounded-full bg-bgpink text-pink py-3 px-4 lg:px-8 navbutton hover:text-white"
            >
              Call Now
            </Link>
            <p className="text-sm font-regular text-center">+61 469 114 477</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
