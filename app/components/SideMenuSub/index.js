import React, { memo } from 'react';
import PropTypes from 'prop-types';
import SideMenuSubList from 'components/SideMenuSubList';
import SideSubMenuItem from 'containers/SideSubMenuItem';

function SideMenuSub({ items, selection }) {
  let content = null;
  if (items !== false) {
    content = (
      <SideMenuSubList
        items={items}
        selection={selection}
        component={SideSubMenuItem}
      />
    );
  }
  return content;
}

SideMenuSub.propTypes = {
  items: PropTypes.any,
  selection: PropTypes.any,
};

export default memo(SideMenuSub);
