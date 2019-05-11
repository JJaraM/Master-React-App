import React, { memo } from 'react';
import PropTypes from 'prop-types';

function CardBodyHeader({ title, description }) {
  return (
    <>
      <h3>{title}</h3>
      <p className="text-muted">{description}</p>
    </>
  );
}

CardBodyHeader.propTypes = {
  title: PropTypes.any,
  description: PropTypes.any,
};

export default memo(CardBodyHeader);
