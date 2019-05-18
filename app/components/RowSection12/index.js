import React, { memo } from 'react';
import PropTypes from 'prop-types';
import RowSection from '../RowSection';

function RowSection12(props) {
  if (props.children) {
    return (
      <RowSection>
        <div className="col-lg-12">{props.children}</div>
      </RowSection>
    );
  }
  return null;
}

RowSection12.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(RowSection12);
