import React, { memo } from 'react';
import PropTypes from 'prop-types';
import StyleButton from './StyleButton';

function LinkButton(props) {
  return <StyleButton onClick={props.onClick}>{props.children}</StyleButton>;
}

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(LinkButton);
