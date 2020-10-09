import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <Breadcrumb className={styles.menu}>
      <Link to="/" className={[`breadcrumb-item`]} id="landing">
        Inicio<span className={styles.eng}> - Home</span>
      </Link>
      <Link to="/Register" className="breadcrumb-item" id="register">
        Registrarse<span className={styles.eng}> - Register</span>
      </Link>
      <Link to="/Presenters" className="breadcrumb-item" id="presenters">
        Presentadorxs<span className={styles.eng}> - Presenters</span>
      </Link>
    </Breadcrumb>
  );
}
