import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PageDescriptionContainer from 'components/PageDescriptionContainer';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Card from 'components/Card';
import CardBody from 'components/CardBody';
import BlockButton from 'components/BlockButton';
import ExamOption from 'components/ExamOption';
import ExamOptionSideList from 'components/ExamOptionSideList';
import messages from './messages';
import saga from './saga';
import reducer from './reducer';
import {
  makeSelectExamPage,
  makeAllItems,
  makeSelectedOption,
  makeSelectResults,
} from './selectors';

import {
  loadAllItems,
  selectResponse,
  nextQuestion,
  nextQuestionOnNext,
  save,
  selectedOption,
  refreshSelection,
} from './actions';

import './style.scss';

export function ExamPage({
  onLoadPage,
  items,
  selectedOptionByQuestion,
  selection,
  onSelect,
  onNext,
  onGoToQuestion,
}) {
  useInjectReducer({ key: 'examPage', reducer });
  useInjectSaga({ key: 'examPage', saga });

  useEffect(() => {
    onLoadPage();
  }, []);

  return (
    <div className="content-wrapper">
      <PageDescriptionContainer
        title={<FormattedMessage {...messages.title} />}
        description={<FormattedMessage {...messages.description} />}
      />
      <div className="content-wrapper">
        <div className="section row">
          <div className="col-sm-4">
            <Card>
              <CardBody>
                <p className="text-muted">Questions:</p>
                <ExamOptionSideList
                  items={items.questions}
                  onGoToQuestion={onGoToQuestion}
                />
              </CardBody>
            </Card>
          </div>

          <div className="col-sm-8">
            <ExamOption
              items={items}
              selectedOption={selection}
              onSelect={onSelect}
              onNext={onNext}
              selectedOptionByQuestion={selectedOptionByQuestion}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

ExamPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onLoadPage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  examPage: makeSelectExamPage(),
  items: makeAllItems(),
  selection: makeSelectedOption(),
  selectedOptionByQuestion: makeSelectResults(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: () => dispatch(loadAllItems()),
    onSelect: (questionNumber, option) =>
      dispatch(selectResponse(questionNumber, option)),
    onNext: selection => {
      dispatch(save());
      dispatch(refreshSelection(selection));
    },
    onGoToQuestion: selection => {
      // dispatch(save());
      dispatch(refreshSelection(selection));
    },
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
