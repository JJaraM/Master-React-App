import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import SkeletonLoading from '../SkeletonLoading';

function PrimaryList(props) {
  
  const collapseClass = props.collapse ? 'collapse-side-menu' : '';

  let Container = () => (
    <SkeletonLoading lines={10} />
  );

  if (props.items === undefined) {
    return <></>;
  } else {
    return (
      <Sidebar cssClass={`languages ${collapseClass}`}>
        { props.children }
      </Sidebar>
    );
  }
}

PrimaryList.propTypes = {
  items: PropTypes.any,
  className: PropTypes.string,
  collapse: PropTypes.bool,
};

export default memo(PrimaryList);
