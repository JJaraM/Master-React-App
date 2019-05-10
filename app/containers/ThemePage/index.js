import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { FormattedMessage } from 'react-intl';
import Themes from 'components/Themes';
import PageDescriptionContainer from 'components/PageDescriptionContainer';
import PropTypes from 'prop-types';
import { makeSelectThemePage, makeSelectItems } from './selectors';
import reducer from './reducer';
import messages from './messages';

export function ThemePage({ items }) {
  useInjectReducer({ key: 'themePage', reducer });

  return (
    <div className="content-wrapper">
      <PageDescriptionContainer
        title={<FormattedMessage {...messages.title} />}
        description={<FormattedMessage {...messages.description} />}
      />
      <div className="content-wrapper ">
        <div className="section row">
          <div className="col-lg-8 mx-auto  mt-2">
            <div className="card py-3 m-b-30">
              <div className="card-body">
                <p className="text-muted">
                  <FormattedMessage {...messages.instruction} />
                </p>
                <div className="row">
                  <Themes items={items} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ThemePage.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  themePage: makeSelectThemePage(),
  items: makeSelectItems(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(ThemePage);
