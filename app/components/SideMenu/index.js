import React, { memo } from 'react';
import PropTypes from 'prop-types';
import SideMenuList from 'components/SideMenuList';
import SideMenuItem from 'containers/SideMenuItem';

function SideMenu({ items, sidebarBig }) {
  let content = null;
  if (items !== false) {
    content = (
      <SideMenuList
        items={items}
        sidebarBig={sidebarBig}
        component={SideMenuItem}
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
