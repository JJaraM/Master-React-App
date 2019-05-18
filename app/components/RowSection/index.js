import React, { memo } from 'react';
import PropTypes from 'prop-types';

function RowSection(props) {
  if (props.children) {
    return <div className="change-section row">{props.children}</div>;
  }
  return null;
}

RowSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(RowSection);
