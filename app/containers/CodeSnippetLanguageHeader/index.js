/**
 *
 * CodeSnippetLanguageHeader
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectCodeSnippetLanguageHeader,
  makeSelectShowAdd,
  makeSelectLanguage
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { showAdd, changeLanguage, saveForm } from './actions';

import SideBarSearchInput from 'components/SideBarSearchInput';
import BootstrapModal from 'components/BootstrapModal';

export function CodeSnippetLanguageHeader({
  onSave,
  onClose,
  onAdd,
  onChangeLanguage,
  showAdd,
  language,
}) {
  useInjectReducer({ key: 'codeSnippetLanguageHeader', reducer });
  useInjectSaga({ key: 'codeSnippetLanguageHeader', saga });

  return (
    <>
      <div className="next-menu-title">
        Languages
        <div className="fas fa-plus plus" role="button" onClick={onAdd} />
      </div>
      <SideBarSearchInput />

      <BootstrapModal
         show={showAdd}
         onYes={onSave}
         onNo={onClose}
         title={
           <FormattedMessage {...messages.header} />
         }
         body={
           <input
            value={language}
            onChange={onChangeLanguage}
            className="form-control"
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
  onAdd: PropTypes.func.isRequired,
  showAdd: PropTypes.bool,
  language: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  codeSnippetLanguageHeader: makeSelectCodeSnippetLanguageHeader(),
  showAdd: makeSelectShowAdd(),
  language: makeSelectLanguage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(showAdd(true)),
    onSave: () => dispatch(saveForm()),
    onClose: () => dispatch(showAdd(false)),
    onChangeLanguage: (evt) => dispatch(changeLanguage(evt.target.value)),
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
