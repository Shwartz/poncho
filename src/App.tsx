import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { Home } from './pages/Home';
import { TemplateExamples } from './pages/TemplateExamples';
import { DashboardExample } from './pages/DashboardExample';

interface AppProps {
}

function App({}: AppProps) {
  return (
    <Router>
      <div className='relative bg-white overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
            <svg className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
                 fill='currentColor' viewBox='0 0 100 100' preserveAspectRatio='none' aria-hidden='true'>
              <polygon points='50,0 100,0 50,100 0,100' />
            </svg>

            <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
              <nav className='relative flex items-center justify-between sm:h-10 lg:justify-start' aria-label='Global'>
                <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
                  <div className='flex items-center justify-between w-full md:w-auto'>
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img className="h-8 w-auto sm:h-10"
                           src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="icon"/>
                    </a>
                    {/*Burger*/}
                    <div className="-mr-2 flex items-center md:hidden">
                      <button type="button"
                              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                              aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        {/*Heroicon name: outline/menu*/}
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                    </div>


                    <div>
                      <Link className="font-medium" to='/'>Home</Link>
                      <Link to='/template-examples'>Templates</Link>
                      <Link to='/dashboard-example'>Dashboard</Link>
                    </div>
                  </div>
                </div>
                <hr />
              </nav>
            </div>


            <Switch>
              <Route path='/template-examples'>
                <TemplateExamples />
              </Route>
              <Route path='/dashboard-example'>
                <DashboardExample />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>

          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
