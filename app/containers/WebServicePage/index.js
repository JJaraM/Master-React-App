import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import reducer from './reducer';
import saga from './saga';
import { fetch, filter, collapse } from './actions';
import { getItems, getText, getCollapse } from './selectors';
import messages from './messages';

import MenuHeader from 'components/MenuHeader';
import PrimaryList from 'components/PrimaryList';
import ListWebService from 'components/ListWebService';
import WebServicePageMenuRouter from 'containers/WebServicePageMenuRouter';
import PageWrapper from 'components/PageWrapper';

import WebServiceEndPoint from 'containers/WebServiceEndPoint';
import WebServiceRequest from 'containers/WebServiceRequest';
import WebServiceResponses from 'containers/WebServiceResponses';
import WebServiceHistory from 'containers/WebServiceHistory';

import { selectedEndPoint } from 'containers/ItemEndPoint/selectors';
import { filterItems } from './utils';


export function WebServicePage({
  onFetch,
  items,
  collapseView,
  onChange,
  onCollapse,
  filterText
}) {
  useInjectReducer({ key: 'webService', reducer });
  useInjectSaga({ key: 'webService', saga });

  useEffect(() => {
    onFetch();
  }, []);
  
  
  const filteredItems = collapseView ? [] : filterItems(items, filterText);

  return (
    <Router>
      <PageWrapper>
        <PrimaryList items={ items } collapse = { collapseView } >
          <MenuHeader 
            onChange = { onChange } 
            value = { filterText} 
            onCollapse = { onCollapse }
            collapseView = { collapseView }
            title={  <FormattedMessage { ...messages.title } /> }
          />
          <ListWebService items={ filteredItems } />


          {/* 
          <div className="next-menu-settings ">
            <div className="next-menu-title non-collapse">
                Settings
                <div id="btn-add-language" className="fas fa-cog cog" role="button" ></div>
            </div>
          </div>
          */}
        </PrimaryList>
        <WebServiceEndPoint />

        <WebServicePageMenuRouter />
      </PageWrapper>
    </Router>
  );
}

const mapStateToProps = createStructuredSelector({
  items: getItems(),
  filterText: getText(),
  collapseView: getCollapse()
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
)(WebServicePage);
