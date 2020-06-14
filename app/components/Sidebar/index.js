import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Sidebar(props) {
  const id = _.uniqueId("menu-");
  return (
    <nav id={id}
      className={`sidebar sidebar-offcanvas sidebar-fixed next-menu ${
        props.cssClass
      }`}
    >
      {props.children}
    </nav>
  );
}

Sidebar.propTypes = {
  cssClass: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default memo(Sidebar);
