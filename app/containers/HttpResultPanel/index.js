import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import TabGroup from 'components/TabGroup';
import TabItem from 'components/TabItem';
import TabGroupContent from 'components/TabGroupContent';
import TabItemContent from 'components/TabItemContent';
import Content from 'components/Content';
import render from './utils';

export function HttpResultPanel({
    onLoad,
    httpCode, 
    httpReason, 
    result
}) {
    useEffect(() => {
        onLoad();
    });

    return (
        <div className="sticky">
            <TabGroup>
                <TabItem id="a-response" href="response"> Response </TabItem>
                <TabItem id="a-headers" href="headers"> Headers </TabItem>
            </TabGroup>
            <TabGroupContent>
                <TabItemContent id="response">
                    <Content text={result} />
                </TabItemContent>
                <TabItemContent id="headers">
                    <div>
                        <label>Http Code: </label>{httpCode}
                    </div>
                    <div>
                        <label>Http Reason: </label> {httpReason}
                    </div>
                </TabItemContent>
            </TabGroupContent>
        </div>
    );
}

HttpResultPanel.propTypes = {
    httpCode: PropTypes.any,
    httpReason: PropTypes.any,
    result: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
    return {
        onLoad: () =>  render(),
        dispatch
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(HttpResultPanel);
