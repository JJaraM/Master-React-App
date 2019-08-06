import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function TopMenu({ onClick }) {
  const logo = '{JJara}';

  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <Button
        className="collapse-topMenu"
        id="sidebarCollapse"
        onClick={onClick}
        role="presentation"
      >
        <i className="fas fa-align-justify" />
      </Button>
      <div className="search my-2 my-lg-0">
        <input type="text" className="form-control" placeholder="Text input" />
        <span className="search-icon">
          <i className="fas fa-search" />
        </span>
      </div>
      <a className="navbar-logo" href="/">
        {logo}
      </a>
    </nav>
  );
}

TopMenu.propTypes = {
  onClick: PropTypes.func,
};

export default TopMenu;
