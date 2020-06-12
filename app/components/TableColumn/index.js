import React, { memo } from 'react';
import PropTypes from 'prop-types';

function TableColumn(props) {
  const { column, rowId } = props;

  if (column.type === 'id') {
    return null;
  }

  return (
    <td className="align-middle">
      {(() => {
        if (column.type === 'badge') {
          return <span className={column.className}>{column.value}</span>;
        }
        if (column.type === 'button') {
          return (
            <button
              type="button"
              value={column.id}
              className={`btn btn-primary btn-sm btn-lettuce ${column.className}`}
              onClick={() => column.action(rowId)}
            >
              {column.value}
            </button>
          );
        }
        if (column.type === 'checkbox') {
          return (
            <>
              <label className="container">
                {column.value}
                <input
                  name={column.value}
                  type="checkbox"
                  onChange={this.handleInputChange}
                />
                <span className="checkmark" />
              </label>
            </>
          );
        }
        if (column.type === 'avatar') {
          return (
            <>
              <div className="avatar avatar-sm avatar-online">
                <img
                  alt=""
                  src={column.typeExtra}
                  className="avatar-img avatar-sm rounded-circle"
                />
              </div>
              <span className="ml-2">{column.value}</span>
            </>
          );
        }
        if (column.type === 'icon-button') {
          return (
            <div
              tabIndex="0"
              className={`icon-button fa ${column.value}`}
              role="button"
              onClick={() => column.action(rowId)}
              onKeyPress={() => column.action(rowId)}
            />
          );
        }
        return column.value;
      })()}
    </td>
  );
}

TableColumn.propTypes = {
  column: PropTypes.any,
  rowId: PropTypes.number,
};

export default memo(TableColumn);
