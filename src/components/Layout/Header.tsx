import { SearchButton } from 'components/Button/SearchButton';
import { FC } from 'react';
import Image from 'next/image';

interface HeaderProps {}
export const Header: FC<HeaderProps> = () => {
  let isOpen: boolean = true;
  return (
    <div className='container h-[13vh] flex py-5 items-center justify-between'>
      <div>logo</div>
      <ul className='items-center hidden gap-8 md:flex'>
        <li className='font-medium'>Category</li>
        <li className='font-medium'>Deals</li>
        <li className='font-medium'>What&apos;s New</li>
        <li className='font-medium'>Delivery</li>
        <SearchButton />
      </ul>
    <div className='md:hidden'>
      <button className='text-gray-400'>
        <span className='sr-only'>Open main menu</span>
        {isOpen ? (
          <svg className='w-6 h-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
          </svg>
        ) : (
          <svg className='w-6 h-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        )}
      </button>
    </div>

      <ul className='hidden gap-8 md:flex'>
        <div className='flex gap-1.5'>
          <Image src='/icons/account.svg' alt='cart' height={24} width={24} />
          <li className='font-medium'>Account</li>
        </div>
        <div className='flex gap-1.5'>
          <Image src='/icons/cart.svg' alt='cart' height={27} width={24} />
          <li className='font-medium'>Cart</li>
        </div>
      </ul>
    </div>
  );
};
