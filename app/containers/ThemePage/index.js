import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectThemePage from './selectors';
import reducer from './reducer';

export function ThemePage() {
  useInjectReducer({ key: 'themePage', reducer });

  return (
    <div className="content-wrapper">
      <div className="pet-background m-b-30">
        <div className="row p-b-60 p-t-60">
          <div className="col-md-10 mx-auto text-center text-white p-b-30">
            <div className="m-b-20">
              <div className="avatar avatar-xl my-auto">
                <img className="avatar-img rounded" src="#" alt="" />
              </div>
              <h1>Title</h1>
              <p>Desc</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-wrapper ">
        <div className="section row">
          <div className="col-lg-8 mx-auto  mt-2">
            <div className="card py-3 m-b-30">
              <div className="card-body">
                <h3>T</h3>
                <p className="text-muted">Desc</p>
                <div className="row">Row</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  themePage: makeSelectThemePage(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(ThemePage);
