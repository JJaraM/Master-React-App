import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function AlertMessage(props) {
  let ComponentToRender = null;
  if (props.messages && props.messages.length > 0) {
    const content = props.messages.map(item => (
      <li key={item.id}>{item.message}</li>
    ));
    ComponentToRender = () => (
      <div className="alert alert-danger" role="alert">
        <ul>{content}</ul>
      </div>
    );
  }
  return <ComponentToRender />;
}

AlertMessage.propTypes = {
  messages: PropTypes.any.isRequired,
};

export default memo(AlertMessage);
