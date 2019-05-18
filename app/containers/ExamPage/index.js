/**
 *
 * ExamPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectExamPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function ExamPage() {
  useInjectReducer({ key: 'examPage', reducer });
  useInjectSaga({ key: 'examPage', saga });

  return (
    <div>
      <Helmet>
        <title>ExamPage</title>
        <meta name="description" content="Description of ExamPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ExamPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  examPage: makeSelectExamPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ExamPage);
