import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CodeSnippetLanguageItem from 'containers/CodeSnippetLanguageItem';
import CodeSnippetLanguageHeader from 'containers/CodeSnippetLanguageHeader';
import Sidebar from '../Sidebar';
import SkeletonLoading from '../SkeletonLoading';

function CodeSnippetLanguagesList(props) {

  let Container = () => (
    <Sidebar cssClass="languages">
      <CodeSnippetLanguageHeader />
      <SkeletonLoading lines={10} />
    </Sidebar>
  );

  if (props.languages.length > 0) {
    const languages = props.languages.map(item => (
      <CodeSnippetLanguageItem key={item.type} item={item} />
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
