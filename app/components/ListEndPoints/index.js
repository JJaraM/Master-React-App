import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ItemEndPoint from 'containers/ItemEndPoint';

function ListEndPoints(props) {
  let languages = [];
  if (props.items != undefined) {
    languages = Object.entries(props.items).map(item => {
      const id = _.uniqueId("list-endpoint-ws-");
      return <ItemEndPoint key={id} item={item} />;
    });
  }
  return <>{ languages }</>;
}

ListEndPoints.propTypes = {
  items: PropTypes.any,
};

export default memo(ListEndPoints);
