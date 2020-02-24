import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import SideBarSearchInput from 'components/SideBarSearchInput';
import BootstrapModal from 'components/BootstrapModal';
import {
  makeSelectCodeSnippetLanguageHeader,
  makeSelectShowAdd,
  makeSelectLanguage,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { showAdd, changeLanguage, saveForm } from './actions';

export function CodeSnippetLanguageHeader({
  onSave,
  onClose,
  onShow,
  onChangeLanguage,
  selectShowAdd,
  language,
}) {
  useInjectReducer({ key: 'codeSnippetLanguageHeader', reducer });
  useInjectSaga({ key: 'codeSnippetLanguageHeader', saga });

  return (
    <>
      <div className="next-menu-title">
        Languages
        <div
          id="btn-add-language"
          className="fas fa-plus plus"
          role="button"
          tabIndex="0"
          onClick={onShow}
          onKeyUp={onShow}
        />
      </div>
      <SideBarSearchInput />

      <BootstrapModal
        show={selectShowAdd}
        onYes={onSave}
        onNo={onClose}
        title={<FormattedMessage {...messages.header} />}
        body={
          <input
            id="input-language"
            value={language}
            onChange={onChangeLanguage}
            className="form-control"
            autoFocus
          />
        }
      />
    </>
  );
}

CodeSnippetLanguageHeader.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onChangeLanguage: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
  selectShowAdd: PropTypes.bool,
  language: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  codeSnippetLanguageHeader: makeSelectCodeSnippetLanguageHeader(),
  selectShowAdd: makeSelectShowAdd(),
  language: makeSelectLanguage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onShow: () => dispatch(showAdd(true)),
    onClose: () => dispatch(showAdd(false)),
    onSave: () => dispatch(saveForm()),
    onChangeLanguage: evt => dispatch(changeLanguage(evt.target.value)),
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
)(CodeSnippetLanguageHeader);
