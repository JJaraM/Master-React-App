import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import SubMenuItem from 'components/SubMenuItem';
import SideMenuSub from 'components/SideMenuSub';
import MenuItemSubArrow from 'components/MenuItemSubArrow';
import reducer from './reducer';
import messages from './messages';
import { collapse } from './actions';
import { makeSelectIdToRender } from './selectors';

const showBig = (item, idToRender) => (
  <>
    <Link to={item.to}>
      <div className="row row-item">
        <div className="menu-item-element col-8 col-xs-center">
          <FormattedMessage {...messages[item.label]} />
          <MenuItemSubArrow {...item} selection={idToRender} />
        </div>
        <div className="menu-icon-element col-4">
          <span className="menu-icon">
            <i className={item.icon} />
          </span>
        </div>
      </div>
    </Link>
    <SideMenuSub items={item} selection={idToRender} />
  </>
);

const showSmall = item => (
  <Link to={item.to}>
    <div className="row row-item">
      <div className="menu-icon-element col-md-12 col-sm-12 col-xs-12">
        <span className="menu-icon">
          <i className={item.icon} />
        </span>
      </div>
    </div>
  </Link>
);

export function SideMenuItem(props) {
  useInjectReducer({ key: 'SideMenuItem', reducer });

  const { id } = props;
  const { item } = props;
  const { idToRender } = props;
  const { sidebarBig } = props;
  const content = sidebarBig ? showBig(item, idToRender) : showSmall(item);

  return <SubMenuItem id={id} item={content} onClick={props.onExpand} />;
}

SideMenuItem.propTypes = {
  item: PropTypes.object,
  sidebarBig: PropTypes.bool,
  onExpand: PropTypes.func,
  idToRender: PropTypes.any,
  id: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  idToRender: makeSelectIdToRender(),
});

function mapDispatchToProps(dispatch) {
  return {
    onExpand: evt => {
      evt.preventDefault();
      dispatch(collapse(evt.currentTarget.id));
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SideMenuItem);
