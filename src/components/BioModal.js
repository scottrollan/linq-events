import React from 'react';
import { bios } from '../data/bios';
import { Modal, Button } from 'react-bootstrap';
import HTMLParser from 'react-html-parser';

export default function BioModal({ name }) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="secondary"
        title={`ver el bio de ${name}`}
        onClick={handleShow}
        style={{ marginLeft: '2rem' }}
      >
        {name}
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        {bios.map((b) => {
          return (
            <span
              key={b.name}
              style={{
                display: b.name === name ? 'flex' : 'none',
                flexDirection: 'column',
              }}
            >
              <Modal.Header closeButton>
                <Modal.Title>{b.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>{HTMLParser(b.bio)}</div>
                <img
                  src={b.imageURL}
                  alt=""
                  style={{ alignSelf: 'flex-end' }}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </span>
          );
        })}
      </Modal>
    </>
  );
}
