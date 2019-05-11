import React, { memo } from 'react';
import PropTypes from 'prop-types';
import * as Prism from 'prismjs';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './customPrism.scss';

class CodeSnippetSelection extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  async asyncImport() {
    try {
      await import(`prismjs/components/prism-${this.props.item.type}`);
      Prism.highlightAll();
    } catch (err) {
      Prism.highlightAll();
    }
  }

  render() {
    if (this.props.item && this.props.item.type && this.props.item.content) {
      this.asyncImport();
      return (
        <div className="col-lg-12 m-b-30">
          <h6>
            <FormattedMessage {...messages.result} />
          </h6>
          <pre>
            <code className={`language-${this.props.item.type}`}>
              {this.props.item.content}
            </code>
          </pre>
        </div>
      );
    }
    return null;
  }
}

CodeSnippetSelection.propTypes = {
  item: PropTypes.any,
};

export default memo(CodeSnippetSelection);
