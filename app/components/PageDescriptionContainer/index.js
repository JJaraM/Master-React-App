import React, { memo } from 'react';
import PropTypes from 'prop-types';

function PageDescriptionContainer({ title, description }) {
  return (
    <div className="header-bg m-b-30">
      <div className="row p-b-60 p-t-60">
        <div className="col-md-10 mx-auto text-center text-white p-b-30">
          <div className="m-b-20">
            <div className="avatar avatar-xl my-auto">
              <img className="avatar-img rounded" src="#" alt="" />
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

PageDescriptionContainer.propTypes = {
  title: PropTypes.any,
  description: PropTypes.any,
};

export default memo(PageDescriptionContainer);
