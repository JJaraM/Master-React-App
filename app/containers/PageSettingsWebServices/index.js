import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { FormattedMessage } from 'react-intl';
import Themes from 'components/Themes';
import PageDescriptionContainer from 'components/PageDescriptionContainer';
import PropTypes from 'prop-types';


export function PageSettingsWebServices() {
 

  return (
    <div className="content-wrapper">
      <PageDescriptionContainer
        title={"Test"}
        description={"Desc"}
      />
      <div className="content-wrapper ">
        <div className="section row">
          <div className="col-lg-8 mx-auto  mt-2">
            <div className="card py-3 m-b-30">
              <div className="card-body">
                <p className="text-muted">
                  Instructions
                </p>
                <div className="row">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PageSettingsWebServices.propTypes = {

};

const mapStateToProps = createStructuredSelector({

});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(PageSettingsWebServices);
