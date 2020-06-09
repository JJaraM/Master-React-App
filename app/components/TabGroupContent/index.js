import React from 'react';

function TabGroupContent(props) {
  return (
    <div className="tab-content">
        { props.children }
    </div>
  );
}

export default TabGroupContent;
