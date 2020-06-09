import React, { memo } from 'react';
import PropTypes from 'prop-types';


function SideBarSearchInput(props) {
  return (
    <div className="search-container">
      <div className="search my-2 my-lg-0">
        <input value={props.value} type="text" className="form-control" placeholder="Text input" onChange={props.onChange} />
        <span className="search-icon">
          <i className="fas fa-search" />
        </span>
      </div>
    </div>
  );
}

SideBarSearchInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default memo(SideBarSearchInput);
