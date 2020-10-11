import React, { useEffect } from 'react';
import BioModal from '../BioModal';
import Menu from '../Menu';
import { Accordion, Card, Button } from 'react-bootstrap';
import $ from 'jquery';
import styles from './Agenda.module.scss';

export default function Agenda() {
  useEffect(() => {
    $('#agenda').addClass('active');
  });
  return (
    <div className={styles.agenda}>
      <Menu />
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              29 de octubre
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className={styles.body}>
              <Card.Text className={styles.text}>
                6pm - Como el trauma afecta nuestra salud mental: Una historia
                personal -{' '}
                <em>
                  How Trauma Affects Our Mental Health: A Personal History
                </em>
                <BioModal name="Leo Martínez" />
              </Card.Text>
              <Card.Text className={styles.text}>
                7pm - La salud mental entre la comunidad LGBT+ -{' '}
                <em>Mental Health Within the LGBT+ Commmunity</em>
                <BioModal name="Renato Pérez" />
              </Card.Text>
              <Card.Text className={styles.text}>8pm - Panel </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              30 de octubre
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className={styles.body}>
              <Card.Text className={styles.text}>
                12pm - Soy trans, ¿y qué? - <em>I'm Trans, So What?</em>
                <BioModal name="Bamby Salcedo" />
              </Card.Text>
              <Card.Text className={styles.text}>
                1pm - La psicología de justicia -{' '}
                <em>The Psychology of Justice</em>
                <BioModal name="Dr. Mario Tovar" />
              </Card.Text>
              <Card.Text className={styles.text}>
                2pm - La conexión nos protege - <em>Connection Protects Us</em>
                <BioModal name="María Limón" />
              </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
