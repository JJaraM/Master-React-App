import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Dashboard(props) {
  const { sidebarBig } = props;
  const className = sidebarBig ? '' : 'big';
  return (
    <div className={`main-panel ${className}`}>
      <div className="content-wrapper">{props.children}</div>
    </div>
  );
}

Dashboard.propTypes = {
  children: PropTypes.node,
  sidebarBig: PropTypes.bool,
};

export default memo(Dashboard);
