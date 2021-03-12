import React from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";

// helpers
import { history } from "./helpers";

import LayoutAnonymous from './components/Layout/LayoutAnonymous';
import LayoutAuthenticated from './components/Layout/LayoutAuthenticated';
import PageNotFound from './components/PageNotFound';
import { privateNavs, publicNavs } from './components';

import { PrivateRoute, PublicRoute } from './routes/';

import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
   <>
      <Router history={history}>
        <Switch>
          <Route exact path={["/feed", "/feed/*", "/profile", "/profile/*"]}>
            <LayoutAuthenticated>
              <Switch>
                {privateNavs.map(privateRouteProps => (
                  <PrivateRoute {...privateRouteProps} />
                ))}
              </Switch>
            </LayoutAuthenticated>
          </Route>

          <Route exact path={["/", "/login", "/signup"]}>
            <LayoutAnonymous>
              <Switch>
                {publicNavs.map(publicRouteProps => (
                  <PublicRoute {...publicRouteProps} />
                ))}
              </Switch>
            </LayoutAnonymous>
          </Route>
          <Route path="*">
            <LayoutAnonymous>
              <Switch>
                <Route component={PageNotFound} />
              </Switch>
            </LayoutAnonymous>
          </Route>
        </Switch>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
