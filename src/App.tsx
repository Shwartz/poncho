import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Home } from './pages/Home';
import { TemplateExamples } from './pages/TemplateExamples';
import { DashboardExample } from './pages/DashboardExample';
import { Toolbar } from './components/Toolbar';

interface AppProps {
}



function App({}: AppProps) {


  return (
    <Router>
      <div className='relative bg-white overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>

            <Toolbar/>

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

        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
               src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
               alt=""/>
        </div>

      </div>
    </Router>
  );
}

export default App;
