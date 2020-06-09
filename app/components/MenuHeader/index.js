import React, { memo } from 'react';
import PropTypes from 'prop-types';
import SideBarSearchInput from 'components/SideBarSearchInput';

function MenuHeader(props) {
    const { onChange, value, onCollapse, collapseView, title } = props;

    if (collapseView) {
        return (
            <div className={`next-menu-title collapse-side-menu-label-header collapse-side-menu-item `}>
         
                <div id="btn-add-language" 
                    className="fas fa-align-justify justify collapse-side-menu-i" 
                    role="button" 
                    onClick = { onCollapse }
                ></div>

                <label className="collapse-side-menu-label">
                    { title } 
                </label>

            </div>
        ); 
    }
    return (
        <div className="next-menu-title non-collapse">
            { title } 
            <div id="btn-add-language" 
                className="fas fa-align-justify justify" 
                role="button" 
                onClick = { onCollapse }
            ></div>
            <div id="btn-add-language" className="fas fa-plus plus" role="button" ></div>
            <SideBarSearchInput onChange={onChange} value={value} />
        </div>
    );
}

MenuHeader.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    onCollapse: PropTypes.func,
    collapseView: PropTypes.bool,
    collapseView: PropTypes.any
};

export default memo(MenuHeader);
