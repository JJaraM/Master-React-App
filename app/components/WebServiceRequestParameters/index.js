import React from 'react';
import PropTypes from 'prop-types';

function WebServiceRequestParameters(props) {
    const { selectedItem, selectedItemData } = props;
   
    if (!selectedItem) {
        return <></>;
    }

    const parameters = selectedItem[1].parameters;
    
    if (!parameters) {
        return <></>;
    }
    
    const items = parameters.map(parameter => {
        let value = '';

        if (selectedItemData) {
            const item = selectedItemData.filter(x => {
                return x.method === selectedItem[0] 
                    && x.url === selectedItem[1].url
                    && x.parameterName === parameter.name;
            });
            if (item.length > 0) {
                value = item[0].value;
            }
        }
  
        let Required = () => <></>;
        if (parameter.required) {
            Required = () => (
                <div className="required">
                    required
                </div>
            );
        }

        let DataType = () => <></>;
        if (parameter.type) {
            DataType = () => (
                <div className="metadata">{ parameter.type }</div>
            );
        } 

        let Format = () => <></>;
        if (parameter.format) {
            Format = () => <div className="metadata">{parameter.type}</div>
        }

        let Description = () => <></>;
        if (parameter.description) {
            Description = () => (
                <label className="metadata" htmlFor="language ">
                { parameter.description }
                </label>
            )
        }

        return (
            <div key={parameter.name} className="form-row">
                <div className="form-group col-md-4">
                    <div className="form-input">
                        <label htmlFor="language">
                            { parameter.name }
                        </label>
                        <Required />
                    </div>
                    <DataType />
                    <Format />
                </div>

                <div className="form-group col-md-8">
                    <Description />
                    <input
                        value={ value }
                        type="text"
                        className="form-control"
                        onChange = {(evt) => props.onChange(
                            evt.target.value, 
                            selectedItem[0], 
                            selectedItem[1].url,
                            parameter.name,
                            parameter.in
                        )}
                        />
                </div>
            </div>
        )
    });

    return <>{ items }</>
}

WebServiceRequestParameters.propTypes = {
    selectedItem: PropTypes.any,
    onChange: PropTypes.func,
    selectedItemData: PropTypes.any,
};

export default WebServiceRequestParameters;
