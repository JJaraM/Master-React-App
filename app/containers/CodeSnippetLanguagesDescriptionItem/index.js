import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Button from 'components/SubMenuItem/Button';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectCodeSnippetLanguagesDescriptionItem } from './selectors';
import { selectCodeSnippet } from './actions';
import reducer from './reducer';

export function CodeSnippetLanguagesDescriptionItem(props) {
  useInjectReducer({ key: 'codeSnippetLanguagesDescriptionItem', reducer });
  const { item, codeSnippetLanguagesDescriptionItem } = props;

  let selection = '';
  if (codeSnippetLanguagesDescriptionItem !== null && codeSnippetLanguagesDescriptionItem.codeSnippet !== null) {
    selection = codeSnippetLanguagesDescriptionItem.codeSnippet.id === item.id ? 'selected' : '';
  }

  return (
    <Button onClick={() => props.onSelect(props.item)}>
      <div id={item.id} className={`row item ${selection}`} key={item.type}>
        {item.title}
      </div>
    </Button>
  );
}

CodeSnippetLanguagesDescriptionItem.propTypes = {
  onSelect: PropTypes.func,
  item: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  codeSnippetLanguagesDescriptionItem: makeSelectCodeSnippetLanguagesDescriptionItem(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSelect: item => dispatch(selectCodeSnippet(item)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CodeSnippetLanguagesDescriptionItem);
