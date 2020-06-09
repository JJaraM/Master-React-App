import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import SkeletonLoading from '../SkeletonLoading';

function SecondaryList(props) {

  let Container = () => (
    <SkeletonLoading lines={10} />
  );

  if (props.items === undefined) {
    return <></>;
  } else {
    return (
      <Sidebar cssClass={`items ${props.className}`}>
        { props.children }
      </Sidebar>
    );
  }
}

SecondaryList.propTypes = {
  items: PropTypes.any,
  className: PropTypes.string,
};

export default memo(SecondaryList);
