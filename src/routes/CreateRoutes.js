import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import { PageTemplate } from '@containers';
import { Header, Footer } from '@components';

function CreateRoutes({ routes, location }) {
  const routesElements = [];

  const renderRoute = (routes, path = '') => {
    let result = [];

    routes.forEach((route) => {
      const fatherPath = path + route.path;
      result.push(
        <Route
          key={route.path}
          path={fatherPath}
          render={(props) => {
            return (
              <PageTemplate
                header={<Header title={route.title} />}
                footer={<Footer />}
              >
                <route.component {...props} route={route.children} />
              </PageTemplate>
            );
          }}
          exact={route.exact ? true : false}
        />
      );

      if (route.children) {
        renderRoute(route.children, fatherPath);
      }
    });

    routesElements.push(...result);
  };

  renderRoute(routes);

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        {routesElements}
        <Redirect to="/" />
      </Switch>
    </AnimatePresence>
  );
}

CreateRoutes.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default withRouter(CreateRoutes);
