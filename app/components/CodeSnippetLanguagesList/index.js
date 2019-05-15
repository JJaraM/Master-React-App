import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import CodeSnippetLanguageItem from 'containers/CodeSnippetLanguageItem';
import Sidebar from '../Sidebar';
import SideBarSearchInput from '../SideBarSearchInput';

function CodeSnippetLanguagesList(props) {
  let Container = () => null;
  const ComponentToRender = CodeSnippetLanguageItem;

  if (props.languages) {
    const languages = props.languages.map(item => (
      <ComponentToRender key={item.type} item={item} />
    ));
    Container = () => (
      <Sidebar cssClass="languages">
        <SideBarSearchInput />
        <div className="next-menu-title">Languages</div>
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
