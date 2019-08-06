import React, { memo } from 'react';
import PropTypes from 'prop-types';
import BlockButton from '../BlockButton';

const goToQuestion = function goToQuestion(questionNumber, onGoToQuestion) {
  onGoToQuestion(questionNumber);
}

function ExamOptionSideList(props) {
  const { items, onGoToQuestion, selectedOption } = props;

  let content = null;

  if (items) {
      let index = 0;
      content = items.map(item => {
        const questionNumber = index;
        index++;
        return (<BlockButton
          id={`question-number-${questionNumber}`}
          key={index}
          onClick={evt => goToQuestion(questionNumber, onGoToQuestion)}
          className="lettuce"> { index }</BlockButton>);
      });
  }


  return (
    <div className="row question-list">
      { content }
    </div>
  );
}

ExamOptionSideList.propTypes = {
  item: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onGoToQuestion: PropTypes.func
};

export default memo(ExamOptionSideList);
