import React from 'react';
import PropTypes from 'prop-types';

function TabItemContent(props) {
  return (
    <div id={props.id} className="tab-pane fade">
        <div className="container-tab-panel">
            { props.children }
        </div>
    </div>
  );
}

TabItemContent.propTypes = {
    id: PropTypes.string,
};

export default TabItemContent;
