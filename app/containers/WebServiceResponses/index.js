import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import TabGroup from 'components/TabGroup';
import TabItem from 'components/TabItem';
import TabGroupContent from 'components/TabGroupContent';
import TabItemContent from 'components/TabItemContent';
import { selectedEndPoint } from 'containers/ItemEndPoint/selectors';
import { selectedWebService } from 'containers/ItemWebService/selectors';
import { selectedWebServiceInformation } from 'containers/WebServiceEndPoint/selectors';

import './style.scss';

export function WebServiceResponses({
  selectedEndPoint,
  webServiceSelection,
  webServiceInfo,
  onLoad
}) {

  if (selectedEndPoint === undefined) {
    return (<></>);
  }

  useEffect(() => {
    onLoad(Object.entries(selectedEndPoint[1].responses)[0][0]);
  });

  let tabItems = [];
  let tabItemsContent = [];
  

  if (selectedEndPoint[1].responses) {
    tabItems = Object.entries(selectedEndPoint[1].responses).map(item => {
      const code = item[0];
      return <TabItem key={`a-response-${code}`} id={`a-response-${code}`} href={`response-${code}`}> { code } </TabItem>;
    });

    tabItemsContent = Object.entries(selectedEndPoint[1].responses).map(item => {
      const code = item[0];
      let properties = [];
      let ref = '';

      if (item[1].schema) {
        ref = item[1].schema.$ref.replace('#/definitions/', '');
        //console.log(ref);
        //console.log(webServiceInfo.definitions[ref]);
        //console.log(webServiceInfo.definitions[ref].properties);

        if (webServiceInfo.definitions[ref] && webServiceInfo.definitions[ref].properties) {
          properties = Object.entries(webServiceInfo.definitions[ref].properties).map(property => {
          
            const type = property[1].type === undefined ? '' : property[1].type;
            const format = property[1].format === undefined ? '' : "(" + property[1].format + ")";
            return (
              <tr>
                <td className='field'>{ property[0] }</td>
                <td className='details'> 
                  <span className="type">{ type } </span>
                  <span className="format">{ format }</span>
                </td>
              </tr>
            );
          });
        }
        
      }

      const description = item[1].description;

      let Model = () => <></>;

      if (ref) {
        Model = () => (
          <div className='response-model'>
            { ref }
            <table>
              <tbody>
                <tr>
                  { properties }
                </tr>
              </tbody>
            </table>
          </div>
        );
      }
      return (
        <TabItemContent key={`response-${code}`} id={`response-${code}`}>  
          { description } 
          <Model />
        </TabItemContent>
      );
    });
  }

  return (
    <div className="row container-row">
      <div className="col-sm-12">
        <TabGroup>
          { tabItems }
        </TabGroup>
        <TabGroupContent>
          { tabItemsContent }
        </TabGroupContent>
      </div>
    </div>
  );
}

WebServiceResponses.PropTypes = {
    
};

const mapStateToProps = createStructuredSelector({
  selectedEndPoint: selectedEndPoint(),
  webServiceSelection: selectedWebService(),
  webServiceInfo: selectedWebServiceInformation(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoad:(code) => {
      const responseElement = document.getElementById("a-response-" + code);
      const requestMenuOption = document.getElementById("responses-menu-option");
      const menuOption = document.getElementById("webServicePageMenu");
      if (responseElement) {
        responseElement.click();
      }
      if (menuOption) {
        menuOption.childNodes.forEach(function(item){
          item.classList.remove('active')
        });
      }
      if (requestMenuOption) {
        requestMenuOption.classList.add('active');
      }
    },
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
)(WebServiceResponses);
