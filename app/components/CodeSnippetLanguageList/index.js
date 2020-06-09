import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CodeSnippetLanguageItem from 'containers/CodeSnippetLanguageItem';

function CodeSnippetLanguageList(props) {
  let languages = [];
  if (props.items.length > 0) {
    languages = props.items.map(item => (
      <CodeSnippetLanguageItem key={item.type} item={item} />
    ));
  }
  return <>{ languages }</>;
}

CodeSnippetLanguageList.propTypes = {
  items: PropTypes.any,
};

export default memo(CodeSnippetLanguageList);
