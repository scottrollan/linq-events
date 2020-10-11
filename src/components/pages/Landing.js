import React, { useEffect } from 'react';
import Menu from '../Menu';
import Logo from '../Logo';
import Register from './Register';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { Card } from 'react-bootstrap';
import styles from './Landing.module.scss';

export default function Landing() {
  useEffect(() => {
    $('#landing').addClass('active');
  });
  return (
    <div className={styles.Landing}>
      <Menu />
      <Logo className={styles.logo} />
      <Card className={styles.card}>
        <Card.Header as="h3">Título de la conferencia</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p className={styles.pp}>
              Únete a nosotrxs para la edición 2020 de la conferencia auspiciada
              por Latino LinQ, en la cual exploraremos la intersección de la
              salud mental y el VIH. El propósito de esta conferencia virtual es
              concientizar a la comunidad Latinx sobre el bienestar mental y
              cómo se relaciona con el VIH. Durante este evento de dos días se
              encontrarán defensorxs, miembrxs de la comunidad Latinx, y un
              distinguido grupo de presentadorxs. Y si eres unx de las primeras
              50 personas en registrarte, serás elegible para recibir un
              regalito en el correo. Entonces, no esperes y registrate hoy mismo
              e invita a unx amigx! NOTA IMPORTANTE: La conferencia será en
              español y ofreceremos interpretación simultánea.
            </p>
            <footer>
              <Link to="/Register" className={styles.registerBtn}>
                ¡Regístrate!
              </Link>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
      <Card className={styles.card}>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p className={styles.pp}>
              Join us for the 2020 edition of Latino LinQ's virtual conference
              exploring the intersection of mental health and HIV. The goal of
              this conference is to build awareness about mental wellbeing and
              how it relates to HIV. The two-day event will bring together
              advocates, members of the Latinx community, and a distinguished
              lineup of presenters. If you are one of the first 50 to register
              for the conference, you will be eligible to receive a care
              package, so register today and invite a friend. IMPORTANT NOTE:
              The conference will be held in Spanish and simultaneous
              interpretation will be available.
            </p>
            <footer>
              <Link to="/Register" className={styles.registerBtn}>
                Register!
              </Link>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
      <Card className={styles.card}>
        <Card.Body>
          <Link to="/Agenda" className={styles.registerBtn}>
            Ver la agenda
          </Link>
        </Card.Body>
      </Card>
      <Register />
    </div>
  );
}
