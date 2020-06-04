import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CodeSnippetSelection from 'components/CodeSnippetSelection';
import ContentWrapper from '../ContentWrapper';
import BlockButton from '../BlockButton';
import './style.scss';

function CodeSnippetSelectionInfo(props) {
  if (!props.item) {
    return null;
  }

  return (
    <div className="main-panel small">

      

      <ContentWrapper>
        <div className="header-bg m-b-30 small">
          <div className="row p-b-60 p-t-60">
            <div className="col-md-11 mx-auto text-center text-white p-b-30">
              <div className="m-b-20">
                <h1>{props.item.title}</h1>
                <p>{props.item.title}</p>
              </div>
            </div>
            <div className="col-md-1 mx-auto text-center text-white p-b-30">

              <ul className="dropdown">
                <button className="btn btn-default drop-down-option" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <i class="fas fa-ellipsis-v"></i>
                
                </button>
                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                  <li><a className="option" href="#">Delete</a></li>
                </ul>
              </ul>
            </div>

{/* 
            <div className="col-md-10 mx-auto text-center text-white p-b-30">
              <BlockButton id="btn-codeSnippet" hotKey="Enter">
                Save
              </BlockButton>

              <BlockButton
                id="btn-codeSnippet-close"
                className="tomato"
                hotKey="Escape"
              >
                Delete
              </BlockButton>
            </div>
*/}
          </div>
        </div>

        <div className="change-section row">
          <CodeSnippetSelection item={props.item} onEdit={props.onEdit} />
        </div>
      </ContentWrapper>
    </div>
  );
}

CodeSnippetSelectionInfo.propTypes = {
  item: PropTypes.any,
  onEdit: PropTypes.func.isRequired,
};

export default memo(CodeSnippetSelectionInfo);
