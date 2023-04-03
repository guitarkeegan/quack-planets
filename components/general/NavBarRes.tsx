"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavbarRes = () => {
  const [showLink, setShowLink] = useState(false);
  const pathname = usePathname();

  const toggleLink = () => {
    setShowLink(!showLink);
  };

  return (
    <header className='flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-black text-white py-6 px-6 relative shadow-md'>
      <a href='/' className='block'>
        <h1 className='font-bold text-lg'>BrokeDevs</h1>
      </a>
      <button
        onClick={toggleLink}
        className='inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1'
      >
        <svg
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
      <nav
        className={`${
          showLink ? '' : 'hidden'
        }  md:inline-flex absolute md:relative top-16 left-0 md:top-0 z-20 flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0`}
      >
     
        <Link className="p-2"  href='/' className={pathname === "/" ? "text-red-700	 p-2" : "p-2"}>
          home
        </Link>
        <Link href='/mercury' className={pathname === "/mercury" ? "text-red-700	 p-2" : "p-2"}>
          mercury
        </Link>
        <Link className="p-2"  href='/venus' className={pathname === "/venus" ? "text-red-700	 p-2" : "p-2"}>
          venus
        </Link>
        <Link className="p-2"  href='/earth' className={pathname === "/earth" ? "text-red-700	 p-2" : "p-2"}>
          earth
        </Link>
        <Link className="p-2"  href='/mars' className={pathname === "/mars" ? "text-red-700	 p-2" : "p-2"}>
          mars
        </Link>
        <Link className="p-2"  href='/jupiter' className={pathname === "/jupiter" ? "text-red-700	 p-2" : "p-2"}>
          jupiter
        </Link>
        <Link className="p-2"  href='/saturn' className={pathname === "/saturn" ? "text-red-700	 p-2" : "p-2"}>
          saturn
        </Link>
        <Link className="p-2"  href='/uranus' className={pathname === "/uranus" ? "text-red-700	 p-2" : "p-2"}>
          uranus
        </Link>
        <Link className="p-2"  href='/neptune' className={pathname === "/neptune" ? "text-red-700	 p-2" : "p-2"}>
          neptune
        </Link>
  
      </nav>
    </header>
  );
};

export default NavbarRes;