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

  if (props.items != null && props.items.length > 0) {
    const items = props.items.map(item => (
      <ComponentToRender key={item.id} item={item} />
    ));
    Container = () => (
      <Sidebar cssClass="items">
        <CodeSnippetHeader />
        {items}
      </Sidebar>
    );
  }

  return <Container />;
}

CodeSnippetsLanguagesDescriptionList.propTypes = {
  items: PropTypes.any,
};

export default memo(CodeSnippetsLanguagesDescriptionList);
