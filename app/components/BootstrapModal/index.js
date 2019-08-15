import React, { memo } from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import BlockButton from '../BlockButton';

function BootstrapModal({ show, title, body, onYes, onNo }) {
  /* document.onkeyup = function(e) {
    if (e.which == 27) {
      document.getElementById('btn-codeSnippet-close').click();
    } else if (e.which == 13) {
      document.getElementById('btn-codeSnippet').click();
    }
  }; */

  return (
    <Modal show={show} centered>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{body}</Modal.Body>

      <Modal.Footer>
        <BlockButton id="btn-codeSnippet" onClick={onYes} hotKey="Enter">
          Yes
        </BlockButton>

        <BlockButton
          id="btn-codeSnippet-close"
          className="tomato"
          onClick={onNo}
          hotKey="Escape"
        >
          No
        </BlockButton>
      </Modal.Footer>
    </Modal>
  );
}

BootstrapModal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.any.isRequired,
  body: PropTypes.any.isRequired,
  onYes: PropTypes.func.isRequired,
  onNo: PropTypes.func.isRequired,
};

BootstrapModal.defaultProps = {
  show: true,
};

export default memo(BootstrapModal);
