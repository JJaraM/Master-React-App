import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectLanguage } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Button from 'components/SubMenuItem/Button';
import { select } from './actions';

export function CodeSnippetLanguageItem(props) {
  useInjectReducer({ key: 'codeSnippetLanguageItem', reducer });
  useInjectSaga({ key: 'codeSnippetLanguageItem', saga });
  const { item } = props;

  return (
    <Button onClick={props.onSelect}>
      <div id={item.type} className="row item" key={item.type}>
        {item.type}
      </div>
    </Button>
  );
}

CodeSnippetLanguageItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
  item: PropTypes.any,
  onSelect: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  language: makeSelectLanguage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (evt) => dispatch(select(evt.target.id)),
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
)(CodeSnippetLanguageItem);