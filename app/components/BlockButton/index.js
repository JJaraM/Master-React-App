import React, { memo } from 'react';
import PropTypes from 'prop-types';

function action(func, id, e, fields) {
  const button = document.getElementById(id);
  button.classList.add('btn-disable');
  func(e, fields);
  button.classList.remove('btn-disable');
}

function BlockButton(props) {
  let { className } = props;
  if (!className) {
    className = 'lettuce';
  }
  return (
    <button
      id={props.id}
      onClick={e => action(props.onClick, props.id, e, props.fields)}
      type="submit"
      className={`btn btn-primary submit-big-button btn-${className}`}
    >
      {props.children}
    </button>
  );
}

BlockButton.propTypes = {
  id: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  fields: PropTypes.any,
  className: PropTypes.string,
};

export default memo(BlockButton);
