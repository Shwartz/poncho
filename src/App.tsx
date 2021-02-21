import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
    </Router>
  );
}

export default App;
