/**
 *
 * ThemeItem
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { changeTheme } from './actions';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectThemeItem from './selectors';
import reducer from './reducer';
import saga from './saga';

export function ThemeItem({
  item,
  onChangeTheme
}) {
  useInjectReducer({ key: 'themeItem', reducer });
  useInjectSaga({ key: 'themeItem', saga });
  return (
    <div className="col-sm-4 m-b-30">
      <div className="theme-section">
        <div className="row">
          <div className="col-sm-12">
            <div className="theme-name text-center" >
              {item.name}
            </div>

            <div className="row">
              <div className="col-sm-4">
                <div className="color" style={{background: `${item.colorA}`}}>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="color" style={{background: `${item.colorB}`}}>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="color" style={{background: `${item.colorC}`}}>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="theme-name text-center" >
                  <button value={item.name} type="submit" className="btn btn-primary submit-big-button btn-lettuce" onClick={onChangeTheme}>
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ThemeItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onChangeTheme: PropTypes.func,
  item: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  themeItem: makeSelectThemeItem(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeTheme: evt => {
      if (evt !== undefined) {
        localStorage.setItem('theme', evt.target.value);
        dispatch(changeTheme());
      }
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
)(ThemeItem);
