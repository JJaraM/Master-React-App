import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import CodeSnippetLanguageItem from 'containers/CodeSnippetLanguageItem';
import Sidebar from '../Sidebar';
import CodeSnippetLanguageHeader from 'containers/CodeSnippetLanguageHeader';
import SkeletonLoading from '../SkeletonLoading';

function CodeSnippetLanguagesList(props) {
  const ComponentToRender = CodeSnippetLanguageItem;
  let Container = (props) => (
    <Sidebar cssClass="languages">
      <CodeSnippetLanguageHeader />
      <SkeletonLoading lines={10}/>
    </Sidebar>
  );

  if (props.languages) {
    const languages = props.languages.map(item => (
      <ComponentToRender key={item.type} item={item} />
    ));
    Container = () => (
      <Sidebar cssClass="languages">
        <CodeSnippetLanguageHeader />
        { languages }
      </Sidebar>
    )
  }

  return <Container />;
}

CodeSnippetLanguagesList.propTypes = {
  languages: PropTypes.any,
};

export default memo(CodeSnippetLanguagesList);
