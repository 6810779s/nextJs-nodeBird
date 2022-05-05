import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import routes from './routes';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <PrivateRoute
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  roles={route.roles}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            );
          })}
          <Redirect from="/lotte/*" to="/lotte/main" />
          <Redirect from="*" to="/404" />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
