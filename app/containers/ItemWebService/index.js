import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

//import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Button from 'components/SubMenuItem/Button';
//import { makeSelectLanguage } from './selectors';
import reducer from './reducer';
//import saga from './saga';
import { select } from './actions';

import './style.scss';

export function ItemWebService({
  item,
  onSelect
}) {
  useInjectReducer({ key: 'itemWebService', reducer });
  //useInjectSaga({ key: 'codeSnippetLanguageItem', saga });

  return (
    <Button onClick={() => onSelect(item)}>
      <div id={item.type} className={`row item `} key={item.type}>
        <div className="status"></div>
        <div className="item-name">
          {item.title}
        </div>
      </div>
    </Button>
  );
}

ItemWebService.propTypes = {
  items: PropTypes.array
};

const mapStateToProps = createStructuredSelector({

});

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (item) => dispatch(select(item)),
    dispatch
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ItemWebService);
