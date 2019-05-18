import React, { memo } from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import BlockButton from '../BlockButton';

function BootstrapModal({ show, title, body, onYes, onNo }) {
  return (
    <Modal show={show} centered>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{body}</Modal.Body>

      <Modal.Footer>
        <BlockButton id="btn-codeSnippet" onClick={onYes}>
          Yes
        </BlockButton>

        <BlockButton
          id="btn-codeSnippet-close"
          className="tomato"
          onClick={onNo}
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
