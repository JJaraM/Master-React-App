import React, { memo } from 'react';
import PropTypes from 'prop-types';

function ThemeList(props) {
  const ComponentToRender = props.component;
  let content = <div />;

  if (props.items) {
    content = props.items.map(item => (
      <ComponentToRender key={item.name} item={item} />
    ));
  } else {
    content = <ComponentToRender />;
  }

  return content;
}

ThemeList.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
};

export default memo(ThemeList);
