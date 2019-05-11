import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TableRow from '../TableRow';

function Table(props) {
  const { title, headers, rows, footer, loading, tableId } = props;

  let Footer = () => null;
  if (footer) {
    Footer = () => <div className="card-footer">{footer}</div>;
  }
  return (
    <div className="card m-b-30">
      <div className="card-header">
        <h5 className="m-b-0 title">{title}</h5>
      </div>

      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              {headers.map(header => (
                <th key={header.props.id}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <TableRow resultRows={rows} loading={loading} tableId={tableId} />
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

Table.propTypes = {
  title: PropTypes.any,
  headers: PropTypes.array,
  rows: PropTypes.array,
  footer: PropTypes.any,
  loading: PropTypes.number,
  tableId: PropTypes.string,
};

export default memo(Table);
