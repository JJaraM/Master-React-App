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

  isChildOf(node, parentId) {
    while (node !== null) {
      if (node.id === parentId) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  };

  getCurrentCursorPosition(parentId) {
    var selection = window.getSelection(),
    charCount = -1,
    node;

    if (selection.focusNode) {
      if (this.isChildOf(selection.focusNode, parentId)) {
        node = selection.focusNode;
        charCount = selection.focusOffset;

        while (node) {
          if (node.id === parentId) {
            break;
          }
          if (node.previousSibling) {
            node = node.previousSibling;
            charCount += node.textContent.length;
          } else {
            node = node.parentNode;
            if (node === null) {
              break
            }
          }
        }
      }
    }

    return charCount;
  };

  onEditCode(item, editFunction, e) {
    const el = document.getElementById('code-editable-' + item.id);
    const cursorPosition = this.getCurrentCursorPosition('code-editable-' + item.id);
    const range = document.createRange();
    const sel = window.getSelection();

    if (editFunction !== undefined && item.content !== el.innerText) {
      editFunction(item, el.innerText);
      Prism.highlightAll();

      let cursorPositionInNode = 0;
      let nodePosition = 0;
      let cursorPositionInAllNodes = 0;
      const totalChildNodes = el.childNodes.length;

      for (var nodeIndex = 0; nodeIndex < totalChildNodes; ++nodeIndex) {
        const child = el.childNodes[nodeIndex];
        if (child !== undefined) {
          const text = this.getChildText(child);
          const letters = text.split("");
          const textSize = letters.length;
          for (var letterIndex = 0; letterIndex < textSize; letterIndex++) {
            const isNotBlank = letters[letterIndex].trim().length > 0;
            cursorPositionInAllNodes++;
            if (cursorPositionInAllNodes === cursorPosition ) {
              nodePosition = nodeIndex;
              cursorPositionInNode = letterIndex + 1;
            }
          }
        }
      }

      try {
        range.setStart(el.childNodes[nodePosition], cursorPositionInNode);
      } catch(err) {
        try {
          nodePosition = nodePosition;
          const child = el.childNodes[nodePosition];
          const text = this.getChildText(child);
          range.setStart(child, text.length - 4);
        } catch(err2) {
          const child = el.childNodes[totalChildNodes - 1];
          const text = this.getChildText(child);
          range.setStart(child, text.length);
        }
      }
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }

  getChildText(child) {
    let text = child.innerText;
    if (!text) {
      text = child.textContent;
    }
    return text;
  }

  copyToClipboard(item) {
    // Create new element
    const el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = item.content;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);

    document.getElementById(`copy-codeSnippet-${item.id}`).innerHTML = 'Copied';
  }

  render() {
    console.log(this.props);
    if (this.props.item && this.props.item.type && this.props.item.content) {
      this.asyncImport();
      const Copy = () => (
        <div className="action-codeSnippet">
        <div
        id={`copy-codeSnippet-${this.props.item.id}`}
        className="copy-codeSnippet"
        onClick={() => this.copyToClipboard(this.props.item)}
        >
        Copy
        </div>
        </div>
      );

      const Close = () => (
        <div className="action-codeSnippet">
        <div
        id={`copy-codeSnippet-${this.props.item.id}`}
        className="close-codeSnippet action-codeSnippet"
        onClick={this.props.onClose}
        >
        Close
        </div>
        </div>
      );

      const Code = () => (
        <code
        id={`code-editable-${this.props.item.id}`}
        onKeyUp={(evt) => this.onEditCode(this.props.item, this.props.onEdit, evt)}
        contentEditable="true"
        suppressContentEditableWarning={true}
        className={`language-${this.props.item.type}`}
        >
        {this.props.item.content}
        </code>
      );

      return (
        <div className="col-lg-12 m-b-30">
          <h6>
            <FormattedMessage {...messages.result} />
          </h6>
          <pre>
            <div>
              <Close />
              <Copy />
            </div>
              <Code />
            </pre>
        </div>
      );
    }
    return null;
  }
}

CodeSnippetSelection.propTypes = {
  item: PropTypes.any,
  onClose: PropTypes.func,
  onEdit: PropTypes.func,
};

export default memo(CodeSnippetSelection);
