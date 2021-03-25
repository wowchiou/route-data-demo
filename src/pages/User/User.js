import React from 'react';
import './User.scss';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

const User = ({ route }) => {
  const { url } = useRouteMatch();

  return (
    <div className="user">
      <h2>User</h2>
      <nav>
        {route.map((list, idx) => (
          <Link key={idx} to={url + list.path}>
            {list.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

User.propTypes = {};

export default User;
