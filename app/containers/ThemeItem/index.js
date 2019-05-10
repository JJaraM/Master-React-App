import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { changeTheme } from 'containers/ThemePage/actions';

export function ThemeItem({ item, onChangeTheme }) {
  return (
    <div className="col-sm-4 m-b-30">
      <div className="theme-section">
        <div className="row">
          <div className="col-sm-12">
            <div className="theme-name text-center">{item.name}</div>

            <div className="row">
              <div className="col-sm-4">
                <div
                  className="color"
                  style={{ background: `${item.colorA}` }}
                />
              </div>
              <div className="col-sm-4">
                <div
                  className="color"
                  style={{ background: `${item.colorB}` }}
                />
              </div>
              <div className="col-sm-4">
                <div
                  className="color"
                  style={{ background: `${item.colorC}` }}
                />
              </div>

              <div className="col-sm-12">
                <div className="theme-name text-center">
                  <button
                    value={item.name}
                    type="submit"
                    className="btn btn-primary submit-big-button btn-lettuce"
                    onClick={onChangeTheme}
                  >
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
  onChangeTheme: PropTypes.func,
  item: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    onChangeTheme: evt => {
      if (evt !== undefined) {
        localStorage.setItem('theme', evt.target.value);
        dispatch(changeTheme());
      }
    },
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ThemeItem);
