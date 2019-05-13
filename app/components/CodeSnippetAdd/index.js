import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import CodeSnippetAddForm from 'containers/CodeSnippetAddForm';
import Card from '../Card';
import CardBodyHeader from '../CardBodyHeader';
import CardBody from '../CardBody';
import messages from './messages';

function CodeSnippetAdd({ render, update }) {
  if (!render) {
    return null;
  }

  let Title = () => <FormattedMessage {...messages.title} />;
  if (update) {
    Title = () => <FormattedMessage {...messages.update_title} />;
  }
  return (
    <Card>
      <CardBody>
        <CardBodyHeader
          title={<Title />}
          description={<FormattedMessage {...messages.description} />}
        />
        <CodeSnippetAddForm />
      </CardBody>
    </Card>
  );
}

CodeSnippetAdd.propTypes = {
  render: PropTypes.bool.isRequired,
  update: PropTypes.bool.isRequired,
};

export default memo(CodeSnippetAdd);
