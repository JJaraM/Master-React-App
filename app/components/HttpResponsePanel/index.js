import React from 'react';
import PropTypes from 'prop-types';
import TabGroup from 'components/TabGroup';
import TabItem from 'components/TabItem';
import TabGroupContent from 'components/TabGroupContent';
import TabItemContent from 'components/TabItemContent';
import Content from 'components/Content';

function HttpResponsePanel(props) {
  const { httpCode, httpReason, result } = props;
  return (
    <div className="sticky">
      <TabGroup>
        <TabItem id="a-response" href="response">
          {' '}
          Response{' '}
        </TabItem>
        <TabItem id="a-headers" href="headers">
          {' '}
          Headers{' '}
        </TabItem>
      </TabGroup>
      <TabGroupContent>
        <TabItemContent id="response">
          <Content text={result} />
        </TabItemContent>
        <TabItemContent id="headers">
          <div>
            <label>Http Code: </label>
            {httpCode}
          </div>
          <div>
            <label>Http Reason: </label> {httpReason}
          </div>
        </TabItemContent>
      </TabGroupContent>
    </div>
  );
}

HttpResponsePanel.propTypes = {
  httpCode: PropTypes.any,
  httpReason: PropTypes.any,
  result: PropTypes.any,
};

export default HttpResponsePanel;
