import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { Form, Button } from 'react-bootstrap';
import Menu from '../Menu';
import styles from './Register.module.scss';

export default function Register() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const registerMe = (e) => {
    const data = {
      'form-name': 'register',
      name,
      email,
      zip,
      message: 'Please sign me up for the Oct 29 conference',
    };

    fetch('/', {
      method: 'POST',
      body: encode(data),
    })
      .then(() => {
        setStatus('Form Submission Successful!');
        // $('#alertMessageSent').css('display', 'flex');
        // $('#alertMessageSent').delay(1500).fadeOut(1000);
        setName('');
        setEmail('');
        $('#newsletterEng')[0].reset();
      })
      .catch((error) => {
        setStatus('Form Submission Failed!');
        console.log(status, error);
      });
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      return setName(value);
    }
    if (name === 'email') {
      return setEmail(value);
    }
    if (name === 'zip') {
      const re = /^[0-9\b]+$/;
      if (e.target.value === '' || re.test(e.target.value)) {
        return setZip(value);
      }
    }
  };
  useEffect(() => {
    $('#register').addClass('active');
  });
  return (
    <div>
      <Menu />
      <div className={styles.register}>
        <h2 style={{ color: 'white' }}>This is the Register Page</h2>
        <Form onSubmit={registerMe} className={styles.form} id="registerForm">
          <Form.Group controlId="formBasicEmail">
            <input type="hidden" name="form-name" value="register" />
            <input
              type="hidden"
              name="message"
              value="Please register me for the Oct 29 conference"
            />

            <Form.Label className={styles.label}>
              Nombre y Apellido / Full Name
            </Form.Label>
            <Form.Control
              type="text"
              // id="name"
              name="name"
              value={name}
              onChange={(e) => handleChange(e)}
              required
            />
            <Form.Label className={styles.label}>
              Correo electrónico / Email
            </Form.Label>
            <Form.Control
              type="email"
              // id="name"
              name="email"
              value={email}
              onChange={(e) => handleChange(e)}
              required
            />
            <Form.Text className="text-muted">
              Nunca compartiremos su correo electrónico con nadie más. We'll
              never share your email with anyone else.
            </Form.Text>
            <Form.Label className={styles.label}>
              Código postal / ZIP code
            </Form.Label>
            <Form.Control
              type="text"
              pattern="[0-9]*"
              name="zip"
              value={zip}
              maxLength="5"
              onChange={(e) => handleChange(e)}
              required
            />
          </Form.Group>
          <Button variant="secondary" className={styles.submit} type="submit">
            Registrarse / Register
          </Button>
        </Form>
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
