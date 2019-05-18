import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function SkeletonLoading(props) {
  const array = [];
  for (let i = 0; i < props.lines; i += 1) {
    array.push(
      <div className="post" key={i}>
        <div className="line" />
      </div>,
    );
  }
  return <div className="skeleton-container">{array}</div>;
}

SkeletonLoading.propTypes = {
  lines: PropTypes.number.isRequired,
};

export default memo(SkeletonLoading);
