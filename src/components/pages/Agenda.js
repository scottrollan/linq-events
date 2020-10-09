import React, { useEffect } from 'react';
import Menu from '../Menu';
import $ from 'jquery';
import styles from './Agenda.module.scss';

export default function Agenda() {
  useEffect(() => {
    $('#agenda').addClass('active');
  });
  return (
    <div className={styles.agenda}>
      <Menu />
      <h2 style={{ color: 'var(--white)' }}>Agenda Page</h2>
    </div>
  );
}
