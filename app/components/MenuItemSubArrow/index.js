import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

function MenuItemSubArrow(props) {
  const { subMenu, selection, id } = props;
  const currentSelection = 'sub-menu-item-' + id;
  let ComponentToRender = (props) => <></>;

  if (subMenu) {
    ComponentToRender = showArrow('down', id);
  }

  if (subMenu && selection.length > 0) {
    selection.forEach((item) => {
      if (currentSelection === item) {
        ComponentToRender = showArrow('up', id);
      }
    });
  }

  return <ComponentToRender />;
}

const showArrow = (arrowPosition, option) => {
  return (props) => (
    <span className="menu-arrow">
      <i className={`fas fa-chevron-${arrowPosition}`} option={option} />
    </span>
  )
};

MenuItemSubArrow.propTypes = {
  selection: PropTypes.array,
};

export default memo(MenuItemSubArrow);
