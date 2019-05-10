import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Table from '../Table';

function createItem(codeSnippet, viewActionTitle, viewAction) {
  const object = {};

  const cols = [];
  object.id = codeSnippet.id;

  const id = {};
  id.id = 0;
  id.type = 'id';
  id.value = codeSnippet.id;
  cols.push(id);

  const type = {};
  type.type = 'badge';
  type.id = 1;
  type.className = 'badge badge-soft-danger badge-light';
  type.value = codeSnippet.type;
  cols.push(type);

  const columnTitle = {};
  columnTitle.id = 2;
  columnTitle.type = 'text';
  columnTitle.value = codeSnippet.title;
  cols.push(columnTitle);

  const view = {};
  view.id = 3;
  view.type = 'button';
  view.value = viewActionTitle;
  view.action = viewAction;
  cols.push(view);

  object.cols = cols;

  return object;
}
function CodeSnippetTable(props) {
  const {
    items,
    headers,
    title,
    footer,
    viewAction,
    viewActionTitle,
    loading,
  } = props;

  const tableRows = items.map(codeSnippet =>
    createItem(codeSnippet, viewActionTitle, viewAction),
  );

  return (
    <Table
      headers={headers}
      rows={tableRows}
      footer={footer}
      title={title}
      loading={loading}
      tableId="CodeSnippetTable"
    />
  );
}

CodeSnippetTable.propTypes = {
  title: PropTypes.string,
  headers: PropTypes.array,
  items: PropTypes.array,
  footer: PropTypes.any,
  viewAction: PropTypes.func.isRequired,
  viewActionTitle: PropTypes.any.isRequired,
  loading: PropTypes.number,
};

export default memo(CodeSnippetTable);
