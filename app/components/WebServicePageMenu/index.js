import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function WebServicePageMenu({ selectedItem }) {
  let List = () => (
    <ul id='webServicePageMenu' className="nav nav-tabs">
      <li className="nav-item">
        <Link id='request-menu-option' className="nav-link" to="request">
          Request
        </Link>
      </li>
      <li className="nav-item">
        <Link id='responses-menu-option' className="nav-link" to="responses">
          Responses
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Authorization</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Body</a>
      </li>
    </ul>
  );

  if (!selectedItem) {
    List = () => <></>;
  }

  return <List />;
}

WebServicePageMenu.propTypes = {
  selectedItem: PropTypes.any,
};

export default WebServicePageMenu;
