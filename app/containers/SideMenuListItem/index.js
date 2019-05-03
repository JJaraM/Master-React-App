import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import SubMenuItem from 'components/SubMenuItem';
import messages from './messages';

const showBig = item => (
  <Link to={item.to}>
    <div className="row row-item">
      <div className="menu-item-element col-md-8 col-sm-8 col-xs-8 col-xs-center">
        <FormattedMessage {...messages[item.label]} />
      </div>
      <div className="menu-icon-element col-md-4 col-sm-4 col-xs-4">
        <span className="menu-icon">
          <i className={item.icon} />
        </span>
      </div>
    </div>
  </Link>
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

export function SideMenuListItem(props) {
  const { item } = props;
  const { id } = props;
  const { sidebarBig } = props;
  const content = sidebarBig ? showBig(item) : showSmall(item);
  return <SubMenuItem id={id} item={content} onClick={test} />;
}

SideMenuListItem.propTypes = {
  item: PropTypes.object,
  id: PropTypes.any,
  sidebarBig: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({});

function test() {
  document.getElementById('id');
}

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(SideMenuListItem);
