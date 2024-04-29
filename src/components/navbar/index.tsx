import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (route: string) => {
    if (router.asPath !== route) {
      router.push(route);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className='bg-gray-800 shadow-lg'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <div className='flex items-center'>
            <button
              onClick={() => navigateTo('/')}
              className='text-white font-bold text-xl'
            >
              Nume
            </button>
          </div>
          <div className='hidden md:flex md:space-x-6'>
            <button
              onClick={() => navigateTo('/')}
              className='text-gray-300 hover:text-white'
            >
              Acasă
            </button>
            <button
              onClick={() => navigateTo('/about')}
              className='text-gray-300 hover:text-white'
            >
              Despre noi
            </button>
            <button
              onClick={() => navigateTo('/contact')}
              className='text-gray-300 hover:text-white'
            >
              Contact
            </button>
          </div>
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-gray-400 hover:text-white focus:outline-none'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className='absolute right-0 w-fit-content bg-gray-800'>
            <div className='container mx-auto px-4 py-2'>
              <div className='flex flex-col items-center'>
                <button
                  onClick={() => navigateTo('/')}
                  className='text-gray-300 hover:text-white my-2'
                >
                  Acasă
                </button>
                <button
                  onClick={() => navigateTo('/about')}
                  className='text-gray-300 hover:text-white my-2'
                >
                  Despre noi
                </button>
                <button
                  onClick={() => navigateTo('/contact')}
                  className='text-gray-300 hover:text-white my-2'
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
