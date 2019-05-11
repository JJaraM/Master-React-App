import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import CodeSnippetAddForm from 'containers/CodeSnippetAddForm';
import Card from '../Card';
import CardBodyHeader from '../CardBodyHeader';
import CardBody from '../CardBody';
import messages from './messages';

function CodeSnippetAdd({ render }) {
  if (!render) {
    return null;
  }

  return (
    <Card>
      <CardBody>
        <CardBodyHeader
          title={<FormattedMessage {...messages.title} />}
          description={<FormattedMessage {...messages.description} />}
        />
        <CodeSnippetAddForm />
      </CardBody>
    </Card>
  );
}

CodeSnippetAdd.propTypes = {
  render: PropTypes.bool.isRequired,
};

export default memo(CodeSnippetAdd);
