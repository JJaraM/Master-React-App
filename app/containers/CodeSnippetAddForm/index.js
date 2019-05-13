import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import CodeSnippetSelection from 'components/CodeSnippetSelection';
import { saveAlertMessages } from 'containers/DashboardPage/actions';
import { closeAddView } from 'containers/CodeSnippetPage/actions';
import BlockButton from 'components/BlockButton';
import {
  makeSelectCodeSnippet,
  makeSelectType,
  makeSelectTitle,
} from './selectors';
import { makeSelectionId } from 'containers/CodeSnippetPage/selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { saveCodeSnippet, saveType, saveTitle, saveForm, updateForm, load } from './actions';

export function CodeSnippetAddForm({
  codeSnippet,
  language,
  title,
  id,
  onChangeCodeSnippet,
  onChangeLanguage,
  onChangeTitle,
  onSave,
  onUpdate,
  onClose,
  onLoad,
}) {
  useInjectReducer({ key: 'codeSnippetAddForm', reducer });
  useInjectSaga({ key: 'codeSnippetAddForm', saga });

  const item = {
    type: language,
    content: codeSnippet,
  };

  const fields = {
    codeSnippet,
    language,
    title,
  };

  useEffect(() => {
    onLoad();
  }, []);


  let ButtonAction = () => (
    <BlockButton id="btn-codeSnippet" onClick={onSave} fields={fields}>
      <FormattedMessage {...messages.save} />
    </BlockButton>
  );

  if (id > 0) {
    ButtonAction = () => (
      <BlockButton id="btn-codeSnippet" onClick={onUpdate} fields={fields}>
        <FormattedMessage {...messages.update} />
      </BlockButton>
    );
  }

  return (
    <>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="language">
            <FormattedMessage {...messages.language} />
          </label>
          <input
            id="language"
            required
            value={language}
            type="text"
            className="form-control"
            onChange={onChangeLanguage}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="title">
            <FormattedMessage {...messages.title} />
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={onChangeTitle}
            className="form-control"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-12">
          <label htmlFor="code">
            <FormattedMessage {...messages.code} />
          </label>
          <textarea
            id="code"
            rows="5"
            value={codeSnippet}
            type="text"
            className="form-control"
            onChange={onChangeCodeSnippet}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-12">
          <CodeSnippetSelection item={item} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-12">
          <ButtonAction />
          <BlockButton
            id="btn-codeSnippet-close"
            className="tomato"
            onClick={onClose}
          >
            <FormattedMessage {...messages.close} />
          </BlockButton>
        </div>
      </div>
    </>
  );
}

CodeSnippetAddForm.propTypes = {
  onChangeCodeSnippet: PropTypes.func,
  onChangeLanguage: PropTypes.func,
  onChangeTitle: PropTypes.func,
  onSave: PropTypes.func,
  onUpdate: PropTypes.func,
  onClose: PropTypes.func,
  onLoad: PropTypes.func,
  codeSnippet: PropTypes.string,
  language: PropTypes.string,
  title: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  codeSnippet: makeSelectCodeSnippet(),
  language: makeSelectType(),
  title: makeSelectTitle(),
  id: makeSelectionId(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoad: evt => dispatch(load()),
    onChangeCodeSnippet: evt => dispatch(saveCodeSnippet(evt.target.value)),
    onChangeLanguage: evt => dispatch(saveType(evt.target.value)),
    onChangeTitle: evt => dispatch(saveTitle(evt.target.value)),
    onClose: () => {
      dispatch(closeAddView());
      dispatch(saveAlertMessages([]));
    },
    onSave: (event, fields) => {
      event.preventDefault();
      const errors = [];
      if (!fields.codeSnippet) {
        errors.push({
          id: 'codeSnippet',
          message: <FormattedMessage {...messages.required_code} />,
        });
      }
      if (!fields.language) {
        errors.push({
          id: 'language',
          message: <FormattedMessage {...messages.required_language} />,
        });
      }
      if (!fields.title) {
        errors.push({
          id: 'title',
          message: <FormattedMessage {...messages.required_title} />,
        });
      }
      if (errors.length === 0) {
        dispatch(saveForm());
        dispatch(saveAlertMessages([]));
      } else {
        dispatch(saveAlertMessages(errors));
      }
    },
    onUpdate: (event, fields) => {
      event.preventDefault();
      const errors = [];
      if (!fields.codeSnippet) {
        errors.push({
          id: 'codeSnippet',
          message: <FormattedMessage {...messages.required_code} />,
        });
      }
      if (!fields.language) {
        errors.push({
          id: 'language',
          message: <FormattedMessage {...messages.required_language} />,
        });
      }
      if (!fields.title) {
        errors.push({
          id: 'title',
          message: <FormattedMessage {...messages.required_title} />,
        });
      }
      if (errors.length === 0) {
        dispatch(updateForm());
        dispatch(saveAlertMessages([]));
      } else {
        dispatch(saveAlertMessages(errors));
      }
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CodeSnippetAddForm);
