import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Table from '../Table';

function createItem(
  codeSnippet,
  viewActionTitle,
  viewAction,
  deleteAction,
  editAction,
) {
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
  view.type = 'icon-button';
  view.value = 'fa-eye';
  view.action = viewAction;
  cols.push(view);

  const deleteColumn = {};
  deleteColumn.id = 4;
  deleteColumn.type = 'icon-button';
  deleteColumn.value = 'fa-trash-alt';
  deleteColumn.action = deleteAction;
  deleteColumn.tooltip = 'delete';
  cols.push(deleteColumn);

  const editColumn = {};
  editColumn.id = 5;
  editColumn.type = 'icon-button';
  editColumn.value = 'fa-edit';
  editColumn.action = editAction;
  cols.push(editColumn);

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
    deleteAction,
    viewActionTitle,
    loading,
    editAction,
  } = props;

  const tableRows = items.map(codeSnippet =>
    createItem(
      codeSnippet,
      viewActionTitle,
      viewAction,
      deleteAction,
      editAction,
    ),
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
  title: PropTypes.any,
  headers: PropTypes.array,
  items: PropTypes.array,
  footer: PropTypes.any,
  viewAction: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired,
  editAction: PropTypes.func.isRequired,
  viewActionTitle: PropTypes.any.isRequired,
  loading: PropTypes.number,
};

export default memo(CodeSnippetTable);
