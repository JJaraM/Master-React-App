import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CodeSnippetLanguagesDescriptionItem from 'containers/CodeSnippetLanguagesDescriptionItem';
import CodeSnippetHeader from 'containers/CodeSnippetHeader';
import Sidebar from '../Sidebar';
import SkeletonLoading from '../SkeletonLoading';

function CodeSnippetsLanguagesDescriptionList(props) {
  const ComponentToRender = CodeSnippetLanguagesDescriptionItem;

  let Container = () => (
    <Sidebar cssClass="items">
      <CodeSnippetHeader />
      <SkeletonLoading lines={10} />
    </Sidebar>
  );

  if (props.items === undefined) {
    Container = () => null;
  }

  if (props.items === null) {
    Container = () => (
      <Sidebar cssClass="items">
        <CodeSnippetHeader />
      </Sidebar>
    );
  }

  let items = [];
  let isNotEmpty = props.items !== null && props.items !== undefined;

  let isValid =  isNotEmpty && props.items.length == 1 
      && props.items[0].title !== null || isNotEmpty && props.items.length > 1;

  if (isNotEmpty && isValid) {
    items = props.items.map(item => (
      <ComponentToRender key={item.id} item={item} />
    ));
  }

  if (isNotEmpty && props.items.length > 0) {
    
    Container = () => (
      <Sidebar cssClass="items">
        <CodeSnippetHeader />
        { items }
      </Sidebar>
    );
  }

  return <Container />;
}

CodeSnippetsLanguagesDescriptionList.propTypes = {
  items: PropTypes.any,
};

export default memo(CodeSnippetsLanguagesDescriptionList);
