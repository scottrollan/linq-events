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

  const showEnglish = () => {
    $('#registerEng').css('display', 'flex');
    $('#registerEsp').hide();
  };
  const showSpanish = () => {
    $('#registerEsp').css('display', 'flex');
    $('#registerEng').hide();
  };

  useEffect(() => {
    $('#register').addClass('active');
  });
  return (
    <div>
      <Menu />
      <div className={styles.register}>
        <MessagePopup />
        <div id="registerEsp" className={styles.registerEsp}>
          <div className={styles.header}>
            <h3>¡Regístrese!</h3>
          </div>
          <p className={styles.translate} onClick={() => showEnglish()}>
            <em>
              <u>see this page in English</u>
            </em>
          </p>
          <div className={styles.section}>
            <Button
              className={styles.button}
              href="https://latinolinq-org.zoom.us/meeting/register/tJUlfu6hpj0vHdNgOVKitA_jvgEF8zKlYqVd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Registración gratis - día 1
            </Button>
            <Button
              className={styles.button}
              href="https://latinolinq-org.zoom.us/meeting/register/tJUpce2qpjosGtVA0-vBjSFZqLDe9wESo98D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Registración gratis - día 2
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
              Estoy interesado en recibir un paquete de cuidado personal.
              <em>
                Nota: debe ser una de las primeras 50 personas en registrarse.
              </em>{' '}
            </span>
          </div>
        </div>
        <div id="registerEng" className={styles.registerEng}>
          <div className={styles.header}>
            <h3>Register!</h3>
          </div>
          <p className={styles.translate} onClick={() => showSpanish()}>
            <em>
              <u>ver esta página en español</u>
            </em>
          </p>
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
              <em>
                Note: You must be one of the first 50 people to register.{' '}
              </em>{' '}
            </span>
          </div>
        </div>
        <div>
          <Button
            className={`${styles.button} ${styles.regalitoBtn}`}
            id="regalitoBtn"
            href="https://docs.google.com/forms/d/1AoerqGOUNMENUzHf3jz4co3MpDTUdTGswSo-9kWXBNk/edit"
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
