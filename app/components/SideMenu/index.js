import React, { memo } from 'react';
import PropTypes from 'prop-types';
import SideMenuList from 'components/SideMenuList';
import SideMenuListItem from 'containers/SideMenuListItem';

function SideMenu({ items, sidebarBig }) {
  let content = null;
  if (items !== false) {
    content = (
      <SideMenuList
        items={items}
        sidebarBig={sidebarBig}
        component={SideMenuListItem}
      />
    );
  }
  return content;
}

SideMenu.propTypes = {
  items: PropTypes.any,
  sidebarBig: PropTypes.bool,
};

export default memo(SideMenu);
