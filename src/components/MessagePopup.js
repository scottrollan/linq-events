import React from 'react';
import { Button } from 'react-bootstrap';
import $ from 'jquery';
import styles from './MessagePopup.module.scss';

export default function MessagePopup() {
  return (
    <div className={styles.alertDiv} id="messagePopup">
      <div className={styles.fadeIn}>
        <div>
          <h4>Considere hacer una donación a Latino LinQ.</h4>
          <h4>
            <em>Please consider donating to Latino LinQ.</em>
          </h4>
        </div>
        <div className={styles.buttonRow}>
          <Button
            variant="secondary"
            onClick={() => $('#messagePopup').css('display', 'none')}
            style={{
              margin: '1rem 0.5rem',
              fontSize: 'large',
            }}
          >
            No, gracias.
          </Button>
          <Button
            variant="secondary"
            href="https://secure.everyaction.com/JLZYxY_D9kqnTm7ezSa0bA2"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              margin: '1rem 0.5rem',
              fontSize: 'x-large',
            }}
          >
            Donar / Donate
          </Button>
        </div>
        <div>
          <h6>Gracias por registrarte.</h6>
          <h6>
            <em>Thank you for registering.</em>
          </h6>
        </div>
      </div>
    </div>
  );
}
