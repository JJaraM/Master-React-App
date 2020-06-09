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
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { makeShow } from './selectors';
import { show, save, changeTitle } from './actions';

export function CodeSnippetHeader({ 
  onClickSave, 
  onClickClose,
  onClickShow,
  onChangeTitle,
  show,
  codeSnippet
}) {
  useInjectReducer({ key: 'codeSnippetHeader', reducer });
  useInjectSaga({ key: 'codeSnippetHeader', saga });

  return (
    <>
      <div className="next-menu-title">
        Code Snippets
        <div
          id="btn-add-language"
          className="fas fa-plus plus"
          role="button"
          tabIndex="0"
          onClick={onClickShow}
          onKeyUp={onClickShow}
        />
              <SideBarSearchInput />
      </div>


      <BootstrapModal
        show={show}
        onYes={onClickSave}
        onNo={onClickClose}
        title={<FormattedMessage {...messages.header} />}
        body={
          <input
            id="input-language"
            value={codeSnippet}
            onChange={onChangeTitle}
            className="form-control"
            autoFocus
          />
        }
      />
    </>
  );
}

CodeSnippetHeader.propTypes = {
  onClickSave: PropTypes.func,
  onClickShow: PropTypes.func.isRequired,
  onClickClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  show: makeShow(),
});

function mapDispatchToProps(dispatch) {
  return {
    onClickSave: () => dispatch(save()),
    onChangeTitle: evt => dispatch(changeTitle(evt.target.value)),
    onClickClose: () => dispatch(show(false)),
    onClickShow: () => dispatch(show(true)),
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
)(CodeSnippetHeader);
