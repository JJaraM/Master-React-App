import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Switch, Route } from 'react-router-dom';
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
import WebServicePageMenuRouter from 'components/WebServicePageMenuRouter';
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
  filterText,
  selectedItem
}) {
  useInjectReducer({ key: 'webService', reducer });
  useInjectSaga({ key: 'webService', saga });

  useEffect(() => {
    onFetch();
  }, []);
  
  
  const filteredItems = collapseView ? [] : filterItems(items, filterText);
  let Header = () => <></>;

  if (selectedItem) {
    Header = () => (
      <div className="header-bg m-b-30 small">
        <div className="row p-b-60 p-t-60">
          <div className="col-md-11 mx-auto text-center text-white p-b-30">
            <div className="m-b-20">
              <h1>{selectedItem[1].summary}</h1>
              <p>{selectedItem[1].operationId}</p>
            </div>
          </div>
          <div className="col-md-1 mx-auto text-center text-white p-b-30">
            <ul className="dropdown">
              <button className="btn btn-default drop-down-option" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <i className="fas fa-ellipsis-v"></i>
              
              </button>
              <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                <li><Link className="option" to="/dashboard/webservices/history">View History</Link></li>
                <li><a className="option" href="#">Clear History</a></li>
                <li><a className="option" href="#">Save</a></li>
                <li><a className="option" href="#">Delete</a></li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
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

      <WebServicePageMenuRouter selectedItem={ selectedItem }>
        <Header />
        <Switch>
          <Route path="/dashboard/webservices/request" component={ WebServiceRequest } />
          <Route path="/dashboard/webservices/responses" component={ WebServiceResponses } />
          <Route path="/dashboard/webservices/history" component={ WebServiceHistory } />
        </Switch>
      </WebServicePageMenuRouter>
    </PageWrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  items: getItems(),
  filterText: getText(),
  collapseView: getCollapse(),
  selectedItem: selectedEndPoint()
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