import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';

import Table from 'components/Table';
import { selectedEndPoint } from 'containers/ItemEndPoint/selectors';
import { selectedHistory } from 'containers/WebServiceRequest/selectors';
import reducer from './reducer';
import { selectedItem } from './selectors';
import { select } from './actions';
import HttpResultPanel from 'containers/HttpResultPanel';
import { format } from 'utils/dates';

export function WebServiceHistory({
    history,
    selectionEndPoint,
    selection,
    onSelection,
}) {
    useInjectReducer({ key: 'webServiceHistory', reducer });

    const rows = history.filter(item => item.url.includes(selectionEndPoint[1].url)).map(item => {
        const id = _.uniqueId("col-");
        var dformat = format(item.date);
        const buttonValue = item.date === selection.date ? 'Watching' : 'Watch';
        const buttonClassName = item.date === selection.date ? "btn-watching" : "";
        return {
            id: id,
            cols: [
                { id: 0, type: "text", value: dformat },
                { id: 1, type: "text", value: item.requestURL },
                { id: 3, type: "button", className: buttonClassName, value: buttonValue, action: () => onSelection(item) }
            ]
        }
    });

    let result = selection ? selection.result : "N/A";
    let status = selection ? selection.response.status : "N/A";
    let statusText = selection ? selection.response.statusText : "N/A";

    if (!selectionEndPoint) {
        return <></>;
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
                <HttpResultPanel result={result} httpCode={status} httpReason={statusText} />
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
