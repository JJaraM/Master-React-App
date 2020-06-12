import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Switch, Route } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { FormattedMessage } from 'react-intl';


import MenuHeader from 'components/MenuHeader';
import PrimaryList from 'components/PrimaryList';
import ListWebService from 'components/ListWebService';
import WebServicePageMenuRouter from 'components/WebServicePageMenuRouter';
import PageWrapper from 'components/PageWrapper';
import RowSection12 from 'components/RowSection12';
import Table from 'components/Table';

import WebServiceEndPoint from 'containers/WebServiceEndPoint';
import WebServiceRequest from 'containers/WebServiceRequest';
import WebServiceResponses from 'containers/WebServiceResponses';
import { selectedEndPoint } from 'containers/ItemEndPoint/selectors';
import { selectedHistory } from 'containers/WebServiceRequest/selectors';
import TabGroup from 'components/TabGroup';
import TabItem from 'components/TabItem';
import TabGroupContent from 'components/TabGroupContent';
import TabItemContent from 'components/TabItemContent';
import Content from 'components/Content';
import reducer from './reducer';
import { selectedItem } from './selectors';
import { select } from './actions';
import HttpResponsePanel  from 'components/HttpResponsePanel';

export function WebServiceHistory({
    history,
    selectionEndPoint,
    selection,
    onSelection,
    onLoad,
}) {
    useEffect(() => {
        onLoad();
    });

    useInjectReducer({ key: 'webServiceHistory', reducer });

    const rows = history.filter(item => item.url.includes(selectionEndPoint[1].url)).map(item => {
        const id = _.uniqueId("col-");
        var d = item.date,
        dformat = [d.getMonth()+1,
                d.getDate(),
                d.getFullYear()].join('/')+' '+
                [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':');

        const buttonValue = item.date === selection.date ? 'Watching' : 'Watch';
        const buttonClassName = item.date === selection.date ? "btn-watching" : "";
        return {
            id: id,
            cols: [
                {
                    id: 0,
                    type: "text",
                    value: dformat
                },
                {
                    id: 1,
                    type: "text",
                    value: item.requestURL
                },
                {
                    id: 3,
                    type: "button",
                    className: buttonClassName,
                    value: buttonValue,
                    action: () => onSelection(item)
                }
            ]
        }
    });

    let result = "N/A";
    let status = "N/A";
    let statusText = "N/A";

    if (!selectionEndPoint) {
        return <></>;
    }
    if (selection) {
        result = selection.result;
        status = selection.response.status;
        statusText = selection.response.statusText;
    }



    return (
        <div className="row container-row">
            
            <div className="col-sm-7">
                <Table
                    title={"History Request"}
                    rows={rows}
                    loading={1}
                    headers={[
                        "Date time",
                        "Request",
                        "See"
                    ]}
                />
            </div>
            <div className="col-sm-5">
                <HttpResponsePanel result={ result }  httpCode={ status } httpReason={ statusText }/>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    history: selectedHistory(),
    selectionEndPoint: selectedEndPoint(),
    selection: selectedItem(),
});

function mapDispatchToProps(dispatch) {
  return {
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
        onSelection: (data) => dispatch(select(data)),
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
)(WebServiceHistory);
