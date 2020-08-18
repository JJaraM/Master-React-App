import React from 'react';
import './style.scss';

function TabGroupContent(props) {
  return <div className="tab-content">{props.children}</div>;
}

export default TabGroupContent;
