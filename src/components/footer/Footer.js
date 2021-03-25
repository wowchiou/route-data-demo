import React from 'react';
import './Footer.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const navList = [
  { path: '/home', title: 'HOME' },
  { path: '/user', title: 'USER' },
  { path: '/store', title: 'STORE' },
  { path: '/news', title: 'NEWS' },
  { path: '/sign', title: 'SIGN' },
];

const Footer = (props) => {
  return (
    <div className="footer">
      <nav>
        {navList.map((list, idx) => (
          <NavLink key={idx} to={list.path} activeClassName="active">
            {list.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
