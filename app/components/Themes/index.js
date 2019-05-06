import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ThemeList from 'components/ThemeList';
import ThemeItem from 'containers/ThemeItem';

function Themes({items}) {
  console.log(items);
  let content = null;
  if (items !== false) {
    content = (
      <ThemeList
        items={items}
        component={ThemeItem}
      />
    );
  }
  return content;
}

Themes.propTypes = {
  items: PropTypes.array,
};

export default memo(Themes);
