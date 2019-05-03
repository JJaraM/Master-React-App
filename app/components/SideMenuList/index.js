import React, { memo } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import './style.scss';

function SideMenuList(props) {
  const ComponentToRender = props.component;
  let content = <div />;

  if (props.items) {
    content = props.items.map(item => (
      <ComponentToRender
        key={`item-${item.id}`}
        item={item}
        sidebarBig={props.sidebarBig}
        id={`sub-menu-item-${item.id}`}
      />
    ));
  } else {
    content = <ComponentToRender />;
  }

  return <List sidebarBig={props.sidebarBig} component={content} />;
}

SideMenuList.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
  sidebarBig: PropTypes.bool,
};

export default memo(SideMenuList);
