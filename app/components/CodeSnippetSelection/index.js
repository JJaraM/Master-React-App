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

  copyToClipboard (item) {
     // Create new element
     var el = document.createElement('textarea');
     // Set value (string to be copied)
     el.value = item.content;
     // Set non-editable to avoid focus and move outside of view
     el.setAttribute('readonly', '');
     el.style = {position: 'absolute', left: '-9999px'};
     document.body.appendChild(el);
     // Select text inside element
     el.select();
     // Copy text to clipboard
     document.execCommand('copy');
     // Remove temporary element
     document.body.removeChild(el);

     document.getElementById('copy-codeSnippet-' + item.id).innerHTML = "Copied";
  }

  render() {
    if (this.props.item && this.props.item.type && this.props.item.content) {
      this.asyncImport();
      const Copy = () => (
        <div
          id={`copy-codeSnippet-${this.props.item.id}`}
          className="copy-codeSnippet"
          onClick={() => this.copyToClipboard(this.props.item)}>
          Copy
        </div>
      );
      return (
        <div className="col-lg-12 m-b-30">
          <h6>
            <FormattedMessage {...messages.result} />
          </h6>
          <pre>
            <Copy />
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
