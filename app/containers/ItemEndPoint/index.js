import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import { select } from './actions';
import { Link } from 'react-router-dom';
import Button from 'components/SubMenuItem/Button';

import './style.scss';

export function ItemEndPoint({
  item,
  onFetch,
}) {
  useInjectReducer({ key: 'itemEndPoint', reducer });

  const items = Object.entries(item[1]).map(entry => {
    const method = entry[0];
    entry[1].url = item[0];
    const buttonKey = method + '-' + entry[1].url;

    return (
     <Button key = {buttonKey} onClick={() => true}>
        <Link to="/dashboard/webservices/request" onClick={() => onFetch(entry)}>
          <div id={item.type} className={`row item`} key={item.type}>
            <div className={`method-type method-${method}`}>
              { method }
            </div>
            <div className="item-name">
              { item[0] }
            </div>
          </div>
        </Link>
      </Button>
    );
  });

  return <> {items} </>;
}

ItemEndPoint.propTypes = {
  dispatch: PropTypes.func.isRequired,
  item: PropTypes.any
};

const mapStateToProps = createStructuredSelector({

});

function mapDispatchToProps(dispatch) {
  return {
    onFetch: (item) => dispatch(select(item)),
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
)(ItemEndPoint);
