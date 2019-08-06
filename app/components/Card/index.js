import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className="col-lg-12 mx-auto mt-2">
      <div className="card py-3 m-b-30">{props.children}</div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Card);
