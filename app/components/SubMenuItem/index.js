import React from 'react';
import PropTypes from 'prop-types';
import SideMenuSub from 'components/SideMenuSub';
import Button from './Button';

function SubMenuItem(props) {
  const { id, onClick, sidebarBig, options, selection } = props;

  return (
    <>
      <Button onClick={ onClick } id={id}>
        <li className="menu-item">
          {props.item}
          <SideMenuSub
            items={options}
            selection={selection}
            sidebarBig={sidebarBig}
          />
        </li>
      </Button>
    </>
  );
}

SubMenuItem.propTypes = {
  item: PropTypes.any,
  id: PropTypes.any,
  onClick: PropTypes.func,
  sidebarBig: PropTypes.bool,
  options: PropTypes.any,
  selection: PropTypes.any,
};

export default SubMenuItem;
