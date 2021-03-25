import React from 'react';
import './Header.scss';
import PropTypes from 'prop-types';
// import { withRouter, useRouteMatch } from 'react-router-dom';

import { routes } from '@routes';

const Header = ({ title, location }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
};

Header.propTypes = {};

export default Header;
