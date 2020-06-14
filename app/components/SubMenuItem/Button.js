import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

function selectElement(id) {
  const el = document.getElementById(id);
  if (el) {
    const parent = el.parentElement;
    parent.childNodes.forEach(function(item){
      if (item.classList) {
        item.classList.remove("active");
      }
    });
    el.classList.add("active");
  }
}

function Button(props) {
  const id = _.uniqueId("sub-menu-item-button-");
  selectElement(id);

  return (
    <div key={ id } id={ id } onClick={ () => {
      selectElement(id);
      if (props.onClick) {
        props.onClick();
      }

    } } className="sub-menu-item-btn">
        { props.children }
    </div>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
