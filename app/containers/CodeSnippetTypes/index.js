import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCodeSnippetTypes from './selectors';
import reducer from './reducer';
import saga from './saga';
import CodeSnippetSelection from 'components/CodeSnippetSelection';


export function CodeSnippetTypes() {
  useInjectReducer({ key: 'codeSnippetTypes', reducer });
  useInjectSaga({ key: 'codeSnippetTypes', saga });

  const item = {
    type: 'bash',
    content: 'cd $HOME',
  }
  return (
    <>
      <div className="row">
        <div className="panel-container col-2">
          <h5>Types</h5>
          <div className="row">
            javascript
          </div>
          <div className="row">
            java
          </div>
          <div className="row">
            bash
          </div>
        </div>
        <div className="panel-container col-3">
          <div className="row">
            2
          </div>
          <div className="row">
            2
          </div>
          <div className="row">
            2
          </div>
          <div className="row">
            2
          </div>
          <div className="row">
            2
          </div>
          <div className="row">
            2
          </div>
        </div>

        <div className="panel-container col-7">
            <CodeSnippetSelection item={item} />
        </div>
      </div>
    </>
  );
}

CodeSnippetTypes.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  codeSnippetTypes: makeSelectCodeSnippetTypes(),
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
)(CodeSnippetTypes);
