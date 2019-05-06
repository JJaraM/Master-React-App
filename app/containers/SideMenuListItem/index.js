import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import SubMenuItem from 'components/SubMenuItem';
import SideMenuSubList from 'components/SideMenuSubList';
import MenuItemSubArrow from 'components/MenuItemSubArrow';
import messages from './messages';
import { collapse } from './actions';
import { makeSelectCollapse, makeSelectIdToRender } from './selectors';

const showBig = (item, collapse, idToRender) => (
  <>
    <Link to={item.to}>
      <div className="row row-item">
        <div className="menu-item-element col-md-8 col-sm-8 col-xs-8 col-xs-center">
          <FormattedMessage {...messages[item.label]} />
          <MenuItemSubArrow {...item} selection={idToRender} />
        </div>
        <div className="menu-icon-element col-md-4 col-sm-4 col-xs-4">
          <span className="menu-icon">
            <i className={item.icon} />
          </span>
        </div>
      </div>
    </Link>
    <SideMenuSubList items={item} selection={idToRender} />
  </>
);

const showSmall = (item, collapse) => (
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

export function SideMenuListItem(props) {

  useInjectReducer({ key: 'sideMenuListItem', reducer });
  useInjectSaga({ key: 'sideMenuListItem', saga });

  const { id } = props;
  const { item } = props;
  const { idToRender } = props;
  const { sidebarBig } = props;
  const { collapse } = props;

  const content = sidebarBig ? showBig(item, collapse, idToRender) : showSmall(item, collapse);


  return <SubMenuItem id={id} item={content} onClick={props.onExpand} />;
}

SideMenuListItem.propTypes = {
  item: PropTypes.object,
  sidebarBig: PropTypes.bool,
  onExpand: PropTypes.func,
  collapse: PropTypes.bool,
  idToRender: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  collapse: makeSelectCollapse(),
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
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo,
)(SideMenuListItem);
