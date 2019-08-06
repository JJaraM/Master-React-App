import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Button from 'components/SubMenuItem/Button';
import { makeSelectLanguage } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { select } from './actions';

export function CodeSnippetLanguageItem(props) {
  useInjectReducer({ key: 'codeSnippetLanguageItem', reducer });
  useInjectSaga({ key: 'codeSnippetLanguageItem', saga });
  const { item, language } = props;

  const selection = language === item.type ? 'selected' : '';

  return (
    <Button onClick={props.onSelect}>
      <div id={item.type} className={`row item ${selection}`} key={item.type}>
        {item.type}
      </div>
    </Button>
  );
}

CodeSnippetLanguageItem.propTypes = {
  item: PropTypes.any,
  onSelect: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  language: makeSelectLanguage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSelect: evt => dispatch(select(evt.target.id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CodeSnippetLanguageItem);
