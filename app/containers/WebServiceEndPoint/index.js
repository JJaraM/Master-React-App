import React, { memo } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { fetch, filter, collapse } from './actions';
import { getItems, getFilterText, getCollapse } from './selectors';

import SecondaryList from 'components/SecondaryList';
import ListEndPoints from 'components/ListEndPoints';
import { selectedWebService } from 'containers/ItemWebService/selectors';
import MenuHeader from '../../components/MenuHeader';
import { filterItems } from './utils';

let selectedURL = null;

export function WebServiceEndPoint({
  onFetch,
  onChange,
  onCollapse,
  collapseView,
  items,
  filterText,
  webServiceSelection
}) {
  useInjectReducer({ key: 'webServiceEndPoint', reducer });
  useInjectSaga({ key: 'webServiceEndPoint', saga });
  
  let paths = filterItems(items, filterText);

  if (webServiceSelection != undefined && selectedURL !== webServiceSelection.url) {
    onFetch();
    selectedURL = webServiceSelection.url;
  }

  if (paths.length === 0) {
    return <></>;
  }
  
  const collapseClass = collapseView ? 'collapse-side-menu' : '';

  if (collapseView) {
    return (
      <SecondaryList items={ paths } className={ collapseClass } >
        <MenuHeader 
          onChange = { onChange } 
          value = { filterText} 
          onCollapse = { onCollapse }
          collapseView = { collapseView }
          title="End Points" 
        />
      </SecondaryList>
    )
  }

  return (
    <SecondaryList items={ paths }>
      <MenuHeader 
        onChange = { onChange } 
        value = { filterText} 
        onCollapse = { onCollapse }
        collapseView = { collapseView }
        title="End Points" 
      />
      <ListEndPoints items = { paths } />
    </SecondaryList>
  );
}

const mapStateToProps = createStructuredSelector({
  items: getItems(),
  filterText: getFilterText(),
  webServiceSelection: selectedWebService(),
  collapseView: getCollapse(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFetch: () => dispatch(fetch()),
    onChange: (evt) => dispatch(filter(evt.target.value)),
    onCollapse: () => dispatch(collapse()),
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
)(WebServiceEndPoint);
