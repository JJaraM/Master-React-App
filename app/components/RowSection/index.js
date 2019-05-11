import React, { memo } from 'react';
import PropTypes from 'prop-types';

function RowSection(props) {
  return <div className="change-section row">{props.children}</div>;
}

RowSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(RowSection);
