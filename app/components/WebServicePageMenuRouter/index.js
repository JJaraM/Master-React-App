import React from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from 'components/ContentWrapper';
import WebServicePageMenu  from 'components/WebServicePageMenu';

function WebServicePageMenuRouter(props) {
    return (
        <div className="main-panel small">
            <ContentWrapper>
            <WebServicePageMenu selectedItem={props.selectedItem} />
                { props.children }
            </ContentWrapper>
        </div>
    );
}

WebServicePageMenuRouter.propTypes = {
    selectedItem: PropTypes.any,
};

export default WebServicePageMenuRouter;
