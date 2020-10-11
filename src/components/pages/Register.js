import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { Form, Button } from 'react-bootstrap';
import Menu from '../Menu';
import MessagePopup from '../MessagePopup';
import styles from './Register.module.scss';

export default function Register() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  const [message, setMessage] = useState(
    'Please sign me up for the Oct 29 conference'
  );

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
      message,
    };

    try {
      fetch('/', {
        method: 'POST',
        body: encode(data),
      });

      setStatus('Form Submission Successful!');
      $('#messagePopup').css('display', 'flex');
      // $('#alertMessageSent').delay(1500).fadeOut(1000);
      setName('');
      setEmail('');
      setZip('');
      $('#registerForm')[0].reset();
    } catch (error) {
      setStatus('Form Submission Failed!');
      console.log(status, error);
    }
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'zip':
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
          return setZip(value);
        } else {
          break;
        }
      case 'message':
        return setMessage(value);
      case 'checkbox':
        if (checked) {
          setMessage(
            'Please sign me up for the Oct 29 conference AND sign me up for the *** Latino Linq Newsletter ***'
          );
        } else {
          setMessage('Please sign me up for the Oct 29 conference.');
        }
        break;
      default:
        break;
    }
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
        <Form onSubmit={registerMe} className={styles.form} id="registerForm">
          <input type="hidden" name="form-name" value="register" />
          <input
            type="text"
            name="message"
            value={message}
            onChange={(e) => {
              handleChange(e);
            }}
            style={{ display: 'none' }}
          />
          <Form.Group className={styles.formGroup}>
            <Form.Label className={styles.label}>
              Nombre y Apellido / Full Name
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={(e) => handleChange(e)}
              required
            />
          </Form.Group>
          <Form.Group className={styles.formGroup} controlId="formBasicEmail">
            <Form.Label className={styles.label}>
              Correo electrónico / Email
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={(e) => handleChange(e)}
              required
            />
            <Form.Text className="text-muted">
              Nunca compartiremos su correo electrónico con nadie más. We'll
              never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <div
            className={styles.formGroup}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <input
              type="checkbox"
              id="signUpNewsletter"
              name="checkbox"
              onChange={(e) => handleChange(e)}
            />
            <span style={{ marginLeft: '1rem' }}>
              ¡Apúntame también al boletín de Latino LinQ!
            </span>
          </div>
          <Form.Group className={styles.formGroup} controlId="formGridZip">
            <Form.Label className={styles.label}>
              Código postal / ZIP code
            </Form.Label>
            <Form.Control
              type="text"
              pattern="[0-9]*"
              name="zip"
              value={zip}
              maxLength="5"
              style={{ width: '50%' }}
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
