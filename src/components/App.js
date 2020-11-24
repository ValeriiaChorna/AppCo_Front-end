import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';
import Layout from './Layout';
import './App.scss';

const Main = lazy(() => import('../pages/Main'));
const Stats = lazy(() => import('../pages/Stats'));
const Charts = lazy(() => import('../pages/Charts'));
const NotFound = lazy(() => import('../pages/NotFound'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div> Loading... </div>}>
          <Layout>
            <Switch>
              <Route path={routes.MAIN} exact component={Main} />
              <Route path={routes.STATS} exact component={Stats} />
              <Route path={routes.CHARTS} exact component={Charts} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
