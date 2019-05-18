import React, { memo } from 'react';
import PropTypes from 'prop-types';
import SideMenuSubList from 'components/SideMenuSubList';
import SideSubMenuItem from 'containers/SideSubMenuItem';

function SideMenuSub({ items, selection, sidebarBig }) {
  let content = null;
    
  if (items !== false) {
    content = (
      <SideMenuSubList
        items={items}
        sidebarBig={sidebarBig}
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
  sidebarBig: PropTypes.bool,
};

export default memo(SideMenuSub);
