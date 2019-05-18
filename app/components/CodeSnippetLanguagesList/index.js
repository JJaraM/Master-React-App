import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CodeSnippetLanguageItem from 'containers/CodeSnippetLanguageItem';
import CodeSnippetLanguageHeader from 'containers/CodeSnippetLanguageHeader';
import Sidebar from '../Sidebar';
import SkeletonLoading from '../SkeletonLoading';

function CodeSnippetLanguagesList(props) {
  const ComponentToRender = CodeSnippetLanguageItem;
  let Container = () => (
    <Sidebar cssClass="languages">
      <CodeSnippetLanguageHeader />
      <SkeletonLoading lines={10} />
    </Sidebar>
  );

  if (props.languages) {
    const languages = props.languages.map(item => (
      <ComponentToRender key={item.type} item={item} />
    ));
    Container = () => (
      <Sidebar cssClass="languages">
        <CodeSnippetLanguageHeader />
        {languages}
      </Sidebar>
    );
  }

  return <Container />;
}

CodeSnippetLanguagesList.propTypes = {
  languages: PropTypes.any,
};

export default memo(CodeSnippetLanguagesList);
