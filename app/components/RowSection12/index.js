import React, { memo } from 'react';
import PropTypes from 'prop-types';
import RowSection from '../RowSection';

function RowSection12(props) {
  return (
    <RowSection>
      <div className="col-lg-12">{props.children}</div>
    </RowSection>
  );
}

RowSection12.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(RowSection12);
