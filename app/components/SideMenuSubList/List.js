import React from 'react';
import PropTypes from 'prop-types';

function List(props) {
  return (
    <ul className="sub-menu">{props.component}</ul>
  );
}

List.propTypes = {
  component: PropTypes.any,
};

export default List;
