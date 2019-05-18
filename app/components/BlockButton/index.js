import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { onClickAction } from './actions';

function BlockButton(props) {
  const { className, onClick, id, fields } = props;

  return (
    <button
      id={props.id}
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
};

/*
 * Button properties
 */
BlockButton.propTypes = {
  id: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  fields: PropTypes.any,
  className: PropTypes.string,
};

export default memo(BlockButton);
