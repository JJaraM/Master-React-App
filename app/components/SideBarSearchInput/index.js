import React, { memo } from 'react';

function SideBarSearchInput() {
  return (
    <div className="search-container">
      <div className="search my-2 my-lg-0">
        <input type="text" className="form-control" placeholder="Text input" />
        <span className="search-icon">
          <i className="fas fa-search" />
        </span>
      </div>
    </div>
  );
}

export default memo(SideBarSearchInput);
