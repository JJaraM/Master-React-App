import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { onClickAction } from './actions';
import './style.scss';

// /https://medium.com/@melwinalm/crcreating-keyboard-shortcuts-in-javascripteating-keyboard-shortcuts-in-javascript-763ca19beb9e
function BlockButton(props) {
  const { className, onClick, id, fields, hotKey, value } = props;

  return (
    <button
      id={props.id}
      value = { value }
      onClick={evt => onClickAction(onClick, id, evt, fields)}
      type="submit"
      className={`btn btn-primary btn-big btn-${className}`}
    >
      {props.children}
    </button>
  );
}

/*
 * Default values
 */
BlockButton.defaultProps = {
  className: 'lettuce',
  value: '',
};

/*
 * Button properties
 */
BlockButton.propTypes = {
  id: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
  fields: PropTypes.any,
  className: PropTypes.string,
  hotKey: PropTypes.string,
};

export default memo(BlockButton);
