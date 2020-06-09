import React from 'react';
import PropTypes from 'prop-types';

function TabItem(props) {
  return (
    <li className="nav-item">
        <a id={props.id} className="nav-link nav-link-container-tab-panel " data-toggle="tab" href={`#${props.href}`}>
            { props.children } 
        </a>
    </li>
  );
}

TabItem.propTypes = {
    href: PropTypes.string,
    id: PropTypes.string,
};

export default TabItem;
