import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function AlertMessage(props) {
  const type = 'danger';
  let content = <></>;

  if (props.messages && props.messages.length > 0) {
    content = props.messages.map(item => <li key={item.id}>{item.message}</li>);

    return (
      <div className={`alert alert-${type}`} role="alert">
        <ul>{content}</ul>
      </div>
    );
  }
  return null;
}

AlertMessage.propTypes = {
  messages: PropTypes.any,
};

export default memo(AlertMessage);
