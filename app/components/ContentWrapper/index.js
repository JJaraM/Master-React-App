import React, { memo } from 'react';
import PropTypes from 'prop-types';

function ContentWrapper(props) {
  return <div className="content-wrapper">{props.children}</div>;
}

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(ContentWrapper);
