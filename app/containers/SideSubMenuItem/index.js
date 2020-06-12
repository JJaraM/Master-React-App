import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export function SideSubMenuItem(props) {
  const { item, sidebarBig } = props;

  if (!sidebarBig) {
    return (
      <Link to={item.to}>
        <div className="row row-item">
          <div className="menu-item-element col-12 col-xs-center">
            <span className="menu-icon">
              <i className={item.icon} />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={item.to}>
      <div className="row row-item">
        <div className="menu-item-element col-7 col-xs-center">
          <FormattedMessage {...messages[item.label]} />
        </div>
        <div className="menu-icon-element col-5">
          <span className="menu-icon">
            <i className={item.icon} />
          </span>
        </div>
      </div>
    </Link>
  );
}

SideSubMenuItem.propTypes = {
  sidebarBig: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  onExpand: PropTypes.func,
  item: PropTypes.any,
};

function mapDispatchToProps(dispatch) {
  return {
    onExpand: evt => {
      evt.preventDefault();
    },
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SideSubMenuItem);
