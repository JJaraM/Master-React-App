import React from 'react';

function TabGroup(props) {
  return (
    <ul className="nav nav-tabs">
        { props.children }
    </ul>
  );
}

export default TabGroup;
