import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import TableColumn from '../TableColumn';
import messages from './messages';

function TableRow({ resultRows, loading, tableId }) {
  let Rows = null;

  if (loading === 0) {
    Rows = () => (
      <tr key="loading">
        <td colSpan="999">
          <FormattedMessage {...messages.loading} />
        </td>
      </tr>
    );
  } else if (loading === 1 && resultRows.length === 0) {
    Rows = () => (
      <tr key="empty">
        <td colSpan="999">
          <FormattedMessage {...messages.empty} />
        </td>
      </tr>
    );
  } else if (loading === 2) {
    Rows = () => (
      <tr key="error">
        <td colSpan="999">
          <FormattedMessage {...messages.error} />
        </td>
      </tr>
    );
  } else if (resultRows.length > 0) {
    Rows = () =>
      resultRows.map(row => (
        <tr key={row.id}>
          {row.cols.map(column => (
            <TableColumn
              key={`tableId-${tableId}-row-${row.id}-col-${column.id}`}
              rowId={row.id}
              column={column}
            />
          ))}
        </tr>
      ));
  }

  return (
    <>
      <Rows />
    </>
  );
}

TableRow.propTypes = {
  resultRows: PropTypes.array,
  loading: PropTypes.number,
  tableId: PropTypes.string,
};

export default TableRow;
