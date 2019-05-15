import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CodeSnippetSelection from 'components/CodeSnippetSelection';
import ContentWrapper from '../ContentWrapper';
import RowSection12 from '../RowSection12';

function CodeSnippetSelectionInfo(props) {
  if (!props.item) {
    return null;
  }
  return (
    <div className="main-panel small">
      <ContentWrapper>
        <div className="header-bg m-b-30 small">

          <div className="row p-b-60 p-t-60">
            <div className="col-md-10 mx-auto text-center text-white p-b-30">
              <div className="m-b-20">
                <h1>{props.item.title}</h1>
                <p>{props.item.title}</p>
              </div>
            </div>
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
