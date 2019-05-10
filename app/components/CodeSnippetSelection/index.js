import React, { memo } from 'react';
import PropTypes from 'prop-types';
import * as Prism from 'prismjs';
import './customPrism.scss';

class CodeSnippetSelection extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  async asyncImport() {
    await import(`prismjs/components/prism-${this.props.item.type}`);
    Prism.highlightAll();
  }

  render() {
    if (this.props.item) {
      this.asyncImport();
      return (
        <div className="col-lg-12">
          <pre>
            <code className={`language-${this.props.item.type}`}>
              {this.props.item.content}
            </code>
          </pre>
        </div>
      );
    }
    return <></>;
  }
}

CodeSnippetSelection.propTypes = {
  item: PropTypes.any,
};

export default memo(CodeSnippetSelection);
