import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Sidebar(props) {
  return (
    <nav className={`sidebar sidebar-offcanvas sidebar-fixed next-menu ${props.cssClass}`}>
      {props.children}
    </nav>
  );
}

Sidebar.propTypes = {
  cssClass: PropTypes.string,
};

export default memo(Sidebar);
