import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ItemWebService from 'containers/ItemWebService';

function ListWebService(props) {
  let languages = [];
  if (props.items.length > 0) {
    languages = props.items.map(item => {
      const id = _.uniqueId("list-key-ws-");
      return <ItemWebService key={id} item={item} />;
    });
  }
  return <>{ languages }</>;
}

ListWebService.propTypes = {
  items: PropTypes.any,
};

export default memo(ListWebService);
