import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectedEndPoint } from 'containers/ItemEndPoint/selectors';
import Card from 'components/Card';
import CardBody from 'components/CardBody';
import BlockButton from 'components/BlockButton';
import Content from 'components/Content';
import WebServiceRequestParameters from 'components/WebServiceRequestParameters';
import { change, execute } from './actions';
import { selectedWebService } from 'containers/ItemWebService/selectors';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { selectedItem, selectedResponses } from './selectors';
import './style.scss';
import TabGroup from 'components/TabGroup';
import TabItem from 'components/TabItem';
import TabGroupContent from 'components/TabGroupContent';
import TabItemContent from 'components/TabItemContent';
import HttpResponsePanel  from 'components/HttpResponsePanel';

export function WebServiceRequest({
  selectedEndPoint,
  selectedItemData,
  webServiceSelection,
  onExecute,
  onChange,
  onLoad,
  responses
}) {

  useInjectReducer({ key: 'webServiceRequest', reducer });
  useInjectSaga({ key: 'webServiceRequest', saga });

  useEffect(() => {
    onLoad();
  });

  if (selectedEndPoint === undefined) {
      return (<></>);
  }

  let responseToRender = {};
  let result = 'N/A';
  let url = 'N/A';
  let headers = 'N/A';
  let statusCode = 'N/A';
  let statusText = 'N/A';

  if (responses) {
    responseToRender = responses.filter(
      x =>  x.method === selectedEndPoint[0] &&
            x.address === webServiceSelection.address &&
            x.url === selectedEndPoint[1].url
    )[0]; 
  }

  if (responseToRender) {
    result = responseToRender.result;
    url = responseToRender.requestURL;
    statusCode = responseToRender.response.status;
    statusText = responseToRender.response.statusText;
  }

  let CardHeader = () => (
    <div className="card-header input-panel">
      <div className="form-row">
        <div className="col-md-4">
          Name
        </div>

        <div className="col-md-8">
          Description
        </div>
      </div>
    </div>
  );

  const ButtonContainer = () => {

    let ClearButton = () => (
      <BlockButton
        id="btn-codeSnippet-close"
        className="tomato"
        onClick={() => console.log('close')}>
        Clear
      </BlockButton>
    )

    if (selectedEndPoint[1].parameters === undefined) {
      ClearButton = () => <></>;
    }

    return (
      <div className="col-md-12 center">
        <BlockButton id="btn-codeSnippet-save" className="lettuce" onClick={
          () => onExecute(selectedEndPoint[0], selectedEndPoint[1].url)
        }>
          Send
        </BlockButton>
        <ClearButton />
      </div>
    );
  }

  if (selectedEndPoint[1].parameters === undefined) {
    CardHeader = () => <></>
  }

  return (
      <>
        <div className="row container-row">
          <div className="col-sm-7">
            <div className="row">
              
              <div className="col-sm-12">
                <div className="container-panel">
                  <Card>
                    <CardHeader />

                    <CardBody>
                      <WebServiceRequestParameters 
                        selectedItem = { selectedEndPoint } 
                        selectedItemData = { selectedItemData }
                        onChange = { onChange }
                      />
                      
                      <div className="form-row ">
                        <ButtonContainer />
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>

              <div className="col-sm-12">
                <TabGroup>
                  <TabItem id="a-http-url" href="http-url"> Request </TabItem>
                  <TabItem id="a-curl" href="curl"> Curl </TabItem>
                </TabGroup>
                <TabGroupContent>
                  <TabItemContent id="http-url"> { url } </TabItemContent>
                  <TabItemContent id="curl"> N/A </TabItemContent>
                </TabGroupContent>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <HttpResponsePanel result={ result } httpCode={ statusCode } httpReason={ statusText }/>
          </div>
        </div>

      </>
  );
}

WebServiceRequest.propTypes = {
    
};

const mapStateToProps = createStructuredSelector({
  selectedEndPoint: selectedEndPoint(),
  webServiceSelection: selectedWebService(),
  selectedItemData: selectedItem(),
  responses: selectedResponses(),
});

function mapDispatchToProps(dispatch) {
  return {
    onExecute: (method, url) => {
      dispatch(execute(method, url));
    },
    onLoad:() => {
      const responseElement = document.getElementById("a-response");
      const httpResponseElement = document.getElementById("a-http-url");
      const requestMenuOption = document.getElementById("request-menu-option");
      const menuOption = document.getElementById("webServicePageMenu");
      
      if (menuOption) {
        menuOption.childNodes.forEach(function(item){
          item.classList.remove('active')
        });
      }
      
    
      if (requestMenuOption && requestMenuOption.classList && !requestMenuOption.classList.contains('active')) {
        if (responseElement) {
          responseElement.click();
        }
        if (httpResponseElement) {
          httpResponseElement.click();
        }
      }

      if (requestMenuOption) {
        requestMenuOption.classList.add('active');
      }
    },
    onChange: (value, method, url, parameterName, parameterType) => 
        dispatch(change(value, method, url, parameterName, parameterType)),
    dispatch,
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(WebServiceRequest);
