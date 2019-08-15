import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import CardBody from '../CardBody';
import BlockButton from '../BlockButton';

const select = function select(questionNumber, option, onSelect) {
  onSelect(questionNumber, option);
};

const nextQuestion = function nextQuestion(questionNumber, onNext) {
  onNext(questionNumber + 1);
};

function getSelectedOptions(selectedOptionByQuestion, selectedOption) {
  const selectedOptions = [];
  selectedOptionByQuestion.map(option => {
    if (option.questionNumber === selectedOption) {
      option.responses.map(response => {
        if (
          selectedOptions !== undefined &&
          !selectedOptions.includes(response)
        ) {
          selectedOptions.push(response);
        }
      });
    }
  });
  return selectedOptions;
}

function uncheckedOptions() {
  const x = document.getElementsByClassName('exam-check');
  if (x !== undefined) {
    for (let i = 0; i <= x.length; i++) {
      if (x[i] !== undefined) {
        x[i].checked = false;
      }
    }
  }
}

function getInputCheckBox(index, onSelect, selectedOptions) {
  let inputCheckBox = (
    <input
      className="exam-check"
      type="checkbox"
      value={index}
      onChange={evt => select(selectedOptions, evt.target.value, onSelect)}
    />
  );

  console.log(selectedOptions);

  if (selectedOptions !== undefined) {
    if (selectedOptions !== undefined && selectedOptions.includes(`${index}`)) {
      inputCheckBox = (
        <input
          className="exam-check"
          type="checkbox"
          value={index}
          onChange={evt => select(selectedOption, evt.target.value, onSelect)}
          checked
        />
      );
    }
  }
  return inputCheckBox;
}

function ExamOption(props) {
  const {
    items,
    selectedOption,
    onSelect,
    onNext,
    selectedOptionByQuestion,
  } = props;

  let content = null;
  let question = '';

  const selectedOptions = getSelectedOptions(
    selectedOptionByQuestion,
    selectedOption,
  );

  console.log(selectedOptions);

  uncheckedOptions();

  if (items) {
    question = items.questions[0].text;
    let index = 0;

    content = items.questions[selectedOption].options.map(item => {
      const currentSelectedOptions = null;

      const currentOptions = selectedOptionByQuestion.map(option => {
        let options = [];
        if (option.questionNumber === selectedOption) {
          options = option.responses;
        }
        return options;
      });

      const inputCheckBox = getInputCheckBox(index, onSelect, selectedOptions);

      index++;

      return (
        <div className="col-sm-6 m-b-30" key={index}>
          <div className="theme-section">
            <div className="row">
              <div className="col-sm-12">
                <div className="theme-name text-center">
                  {inputCheckBox}
                  <label className="lbl-exam">{item.text}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  let nextButton = null;
  if (
    items.questions !== undefined &&
    items.questions.length > selectedOption + 1
  ) {
    nextButton = (
      <BlockButton
        onClick={evt => nextQuestion(selectedOption, onNext)}
        id="btn-codeSnippet-close"
        className="lettuce"
      >
        Next
      </BlockButton>
    );
  }

  return (
    <Card key={selectedOption}>
      <CardBody>
        <p className="text-muted">Question: {selectedOption + 1}</p>
        <div className="row">
          <div className="col-sm-12 m-b-30">{question}</div>
        </div>

        <div className="row">{content}</div>

        <div className="form-row fl-rg">
          {nextButton}
          {/* <BlockButton
                id="btn-codeSnippet-close"
                className="tomato">
                Pending
              </BlockButton>
              <BlockButton
                id="btn-codeSnippet-close"
                className="sky">
                See
              </BlockButton> */}
        </div>
      </CardBody>
    </Card>
  );
}

ExamOption.propTypes = {
  items: PropTypes.any, // PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  selectedOptionByQuestion: PropTypes.any,
  selectedOption: PropTypes.number,
  onSelect: PropTypes.func,
  onNext: PropTypes.func,
};

export default memo(ExamOption);
