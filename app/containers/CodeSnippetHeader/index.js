import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import SideBarSearchInput from 'components/SideBarSearchInput';
import BootstrapModal from 'components/BootstrapModal';
import makeSelectCodeSnippetHeader from './selectors';
import reducer from './reducer';
import saga from './saga';

export function CodeSnippetHeader({ onClickDelete, onClickDeletePopup }) {
  useInjectReducer({ key: 'codeSnippetHeader', reducer });
  useInjectSaga({ key: 'codeSnippetHeader', saga });

  return (
    <>
      <div className="next-menu-title">
        Code Snippets
        <div className="fas fa-plus plus" role="button" />
      </div>
      <SideBarSearchInput />

      <BootstrapModal
        show={false}
        onYes={onClickDelete}
        onNo={onClickDeletePopup}
        title="Title"
        body="body"
      />
    </>
  );
}

CodeSnippetHeader.propTypes = {
  onClickDelete: PropTypes.func,
  onClickDeletePopup: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  codeSnippetHeader: makeSelectCodeSnippetHeader(),
});

function mapDispatchToProps(dispatch) {
  return {
    onClickDelete: evt => {
      if (evt) {
        alert('HI');
      }
    },
    onClickDeletePopup: evt => {
      if (evt) {
        alert('HI');
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
)(CodeSnippetHeader);
