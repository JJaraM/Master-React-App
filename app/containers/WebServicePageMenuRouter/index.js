import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import WebServiceRequest from 'containers/WebServiceRequest';
import WebServiceResponses from 'containers/WebServiceResponses';
import WebServiceHistory from 'containers/WebServiceHistory';
import { selectedEndPoint } from 'containers/ItemEndPoint/selectors';
import ContentWrapper from 'components/ContentWrapper';
import WebServicePageMenu  from 'components/WebServicePageMenu';

export function WebServicePageMenuRouter({
  selectedItem
}) {
  
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
    <div className="main-panel small">
      <ContentWrapper>
          <WebServicePageMenu selectedItem={selectedItem} />
          <Header />
          <Switch>
              <Route path="/dashboard/webservices/request" component={ WebServiceRequest } />
              <Route path="/dashboard/webservices/responses" component={ WebServiceResponses } />
              <Route path="/dashboard/webservices/history" component={ WebServiceHistory } />
          </Switch>
      </ContentWrapper>
  </div>
  );
}

const mapStateToProps = createStructuredSelector({
  selectedItem: selectedEndPoint()
});

function mapDispatchToProps(dispatch) {
  return {
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
)(WebServicePageMenuRouter);