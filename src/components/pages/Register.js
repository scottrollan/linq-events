import React, { useEffect } from 'react';
import $ from 'jquery';
import { Button } from 'react-bootstrap';
import Menu from '../Menu';
import MessagePopup from '../MessagePopup';
import RegisterForm from '../RegisterForm';
import styles from './Register.module.scss';

export default function Register() {
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
        <RegisterForm />
        <div className={styles.form}>
          <div className="form-label">
            Considere hacer una donación para apoyar a Latino Linq en sus
            esfuerzos por promover la equidad LGBTQ.
          </div>
          <Button
            variant="secondary"
            className={styles.donate}
            href="https://www.paypal.com/fundraiser/charity/1436824"
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
