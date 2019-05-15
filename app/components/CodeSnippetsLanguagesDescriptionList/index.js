import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CodeSnippetLanguagesDescriptionItem from 'containers/CodeSnippetLanguagesDescriptionItem';
import Sidebar from '../Sidebar';
import SideBarSearchInput from '../SideBarSearchInput';

function CodeSnippetsLanguagesDescriptionList(props) {
  let Container = () => null;
  const ComponentToRender = CodeSnippetLanguagesDescriptionItem;

  if (props.items && props.items.length > 0) {
    const languages = props.items.map(item => (
      <ComponentToRender key={item.id} item={item} />
    ));
    Container = () => (
      <Sidebar cssClass="items">
        <SideBarSearchInput />
        <div className="next-menu-title">Code Snippets</div>
        { languages }
      </Sidebar>
    )
  }

  return <Container />;
}

CodeSnippetsLanguagesDescriptionList.propTypes = {
  items: PropTypes.any,
};

export default memo(CodeSnippetsLanguagesDescriptionList);
