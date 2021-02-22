import React, { useState } from 'react';
import { MainMenuItem, IMainMenuItem } from './MainMenuItem';

const mainMenuItemData: IMainMenuItem[] = [
  {
    pathTo: '/',
    title: 'Home',
  },
  {
    pathTo: '/template-examples',
    title: 'Templates',
  },
  {
    pathTo: '/dashboard-example',
    title: 'Dashboard',
  },
];

export const Toolbar = () => {
  const [mobileMenuState, setMobileMenuState] = useState(false);
  const animationClasses = mobileMenuState ? 'opacity-1000 scale-100' : 'opacity-0 scale-95';
  const isHiddenClass = !mobileMenuState ? 'hidden' : '';

  return (
    <React.Fragment>
      <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
        <nav className='relative flex items-center justify-between sm:h-10 lg:justify-start' aria-label='Global'>
          <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <a href='#'>
                <span className='sr-only'>Workflow</span>
                <img className='h-8 w-auto sm:h-10'
                     src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg' alt='icon' />
              </a>
              {/*Burger*/}
              <div className='-mr-2 flex items-center md:hidden'>
                <button type='button'
                        className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                        aria-expanded='false'>
                  <span className='sr-only'>Open main menu</span>
                  {/*Heroicon name: outline/menu*/}
                  <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'
                       stroke='currentColor' aria-hidden='true'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                          d='M4 6h16M4 12h16M4 18h16' />
                  </svg>
                </button>
              </div>

              <div className='hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
                <MainMenuItem
                  items={mainMenuItemData}
                  cssClasses="font-medium text-gray-500 hover:text-gray-900"
                />
              </div>

            </div>
          </div>
          <hr />
        </nav>
      </div>

      <div className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden duration-150 ease-out ${animationClasses}`}>
        <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
          <div className='px-5 pt-4 flex items-center justify-between'>
            <div>
              <img className='h-8 w-auto' src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                   alt='logo' />
            </div>
            <div className='-mr-2'>
              <button type='button'
                      onClick={()=> {setMobileMenuState(!mobileMenuState)}}
                      className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                <span className='sr-only'>Close main menu</span>
                {/* Hero icon name: outline/x */}
                <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'
                     stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                        d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
          </div>
          {/* TODO: add delay mechanism for hidden class the same as per duration-150 */}
          <div className={`px-2 pt-2 pb-3 space-y-1 ${isHiddenClass}`}>
            <MainMenuItem
              items={mainMenuItemData}
              cssClasses={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50`}
            />
          </div>

        </div>
      </div>
    </React.Fragment>
  )
}