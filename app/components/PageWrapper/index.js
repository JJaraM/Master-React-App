import React, { memo } from 'react';
import './style.scss';

function PageWrapper(props) {
  return (
    <div className="page-body-sub-item-wrapper" >
        { props.children }
    </div>
  );
}

export default memo(PageWrapper);
