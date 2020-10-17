import React, { useEffect } from 'react';
import $ from 'jquery';
import { Button } from 'react-bootstrap';
import Menu from '../Menu';
import MessagePopup from '../MessagePopup';
// import RegisterForm from '../RegisterForm';
import styles from './Register.module.scss';

export default function Register() {
  const handleChange = () => {
    $('#regalitoBtn').toggle('display');
  };

  useEffect(() => {
    $('#register').addClass('active');
  });
  return (
    <div>
      <Menu />
      <MessagePopup />
      <div className={styles.register}>
        <div className={styles.header}>
          <h3>¡Registrarse!</h3>
        </div>
        <div className={styles.section}>
          <Button
            className={styles.button}
            href="https://latinolinq-org.zoom.us/meeting/register/tJUlfu6hpj0vHdNgOVKitA_jvgEF8zKlYqVd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Free Registration - Day 1
          </Button>
          <Button
            className={styles.button}
            href="https://latinolinq-org.zoom.us/meeting/register/tJUpce2qpjosGtVA0-vBjSFZqLDe9wESo98D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Free Registration - Day 2
          </Button>
        </div>
        <div className={styles.section}>
          <input
            type="checkbox"
            id="regalito"
            name="checkbox"
            onChange={(e) => handleChange(e)}
            style={{ fontSize: '24px' }}
          />
          <span style={{ marginLeft: '1rem', fontSize: '24px' }}>
            I'm interested in receiving a self-care package.{' '}
            <em>Note: You must be one of the first 50 people to register. </em>{' '}
          </span>
        </div>
        <div>
          <Button
            className={`${styles.button} ${styles.regalitoBtn}`}
            id="regalitoBtn"
            href="https://secure.everyaction.com/JLZYxY_D9kqnTm7ezSa0bA2 "
          >
            Click here to fill out the entry form
          </Button>
        </div>
        {/* <RegisterForm /> */}
        <div className={`${styles.form} ${styles.section}`}>
          <div className="form-label">
            Considere hacer una donación para apoyar a Latino Linq en sus
            esfuerzos por promover la equidad LGBTQ.
          </div>
          <Button
            variant="secondary"
            className={styles.donate}
            href="https://secure.everyaction.com/JLZYxY_D9kqnTm7ezSa0bA2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donar / Donate
          </Button>
          <div className="form-label">
            Please consider making a donation to support Latino Linq in their
            efforts to advance LGBTQ equity.
          </div>
        </div>
      </div>
    </div>
  );
}
