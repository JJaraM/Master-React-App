import React, { memo } from 'react';
import PropTypes from 'prop-types';

function action(func, id, evt, fields) {
  const className = 'btn-disable';
  const button = document.getElementById(id);
  button.classList.add(className);
  func(evt, fields);
  button.classList.remove(className);
}

function handleOpen(name) {
  console.log(name);
  this.props.show(name, { message: `This is a ${name} modal` })
}

function BlockButton(props) {
  let { className } = props;
  return (
    <button
      id={props.id}
      onClick={e => action(props.onClick, props.id, e, props.fields)}
      //onClick={handleOpen('bootstrap')}
      type="submit"
      className={`btn btn-primary btn-big btn-${className}`}
    >
      {props.children}
    </button>
  );
}

BlockButton.defaultProps = {
  className: 'lettuce'
};

BlockButton.propTypes = {
  id: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  fields: PropTypes.any,
  className: PropTypes.string,
};

export default memo(BlockButton);
