import React from 'react';
import PropTypes from 'prop-types';

function List(props) {
  const widthClass = !props.sidebarBig ? 'small' : '';
  const cssClass = `sidebar sidebar-offcanvas sidebar-fixed ${widthClass}`;
  return (
    <nav className={cssClass} id="sidebar">
      <div id="id-side-menu" className="main-menu">
        <ul className="list-unstyled components">{props.component}</ul>
      </div>
    </nav>
  );
}

List.propTypes = {
  sidebarBig: PropTypes.bool,
  component: PropTypes.any,
};

export default List;
