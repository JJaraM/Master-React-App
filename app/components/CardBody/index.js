import React, { memo } from 'react';
import PropTypes from 'prop-types';

function CardBody(props) {
  return <div className="card-body">{props.children}</div>;
}

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(CardBody);
