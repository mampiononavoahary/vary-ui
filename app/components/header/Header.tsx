'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push('/login'); // Remplacez '/login' par le chemin de votre page de connexion
  };

  return (
    <nav className='bg-gray-800 p-4 fixed top-0 left-0 w-full z-50 flex'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-lg font-bold'>
          <Image src='/my-logo.png' alt='Logo' className='h-12' width={200} height={200}/>
        </div>
        <ul className='flex space-x-6'>
          <li className='text-gray-300 hover:text-white'>
            <a href='/home'>Home</a>
          </li>
          <li className='text-gray-300 hover:text-white'>
            <a href='#dashboard'>Dashboard</a>
          </li>
          <li className='text-gray-300 hover:text-white'>
            <a href='#about'>About</a>
          </li>
        </ul>
      </div>
      <button 
        className='bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-600' 
        onClick={handleSignInClick}
      >
        Sign In
      </button>
    </nav>
  );
};

export default Header;
