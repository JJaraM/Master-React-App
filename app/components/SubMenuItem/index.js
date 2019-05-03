import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function SubMenuItem(props) {
  const { id } = props;
  const { onClick } = props;
  return (
    <Button onClick={onClick}>
      <li className="menu-item" id={id}>
        {props.item}
      </li>
    </Button>
  );
}

SubMenuItem.propTypes = {
  item: PropTypes.any,
  id: PropTypes.any,
  onClick: PropTypes.func,
};

export default SubMenuItem;
