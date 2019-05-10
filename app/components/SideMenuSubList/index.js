import React, { memo } from 'react';
import PropTypes from 'prop-types';
import List from './List';

function SideMenuSubList(props) {
  const { items, selection } = props;
  let content = <></>;
  const ComponentToRender = props.component;

  if (items && items.subMenu) {
    const currentSelection = `sub-menu-item-${items.id}`;
    content = items.subMenu.map(subMenuOption => {
      const subComponent = selection.map(item => {
        if (currentSelection === item) {
          return (
            <ComponentToRender
              key={`item-${subMenuOption.id}`}
              item={subMenuOption}
              sidebarBig
              id={`sub-menu-item-${subMenuOption.id}`}
            />
          );
        }
        return null;
      });
      return subComponent;
    });

    return <List component={content} />;
  }
  return null;
}

SideMenuSubList.propTypes = {
  items: PropTypes.any,
  selection: PropTypes.array,
  component: PropTypes.any,
};

export default memo(SideMenuSubList);
