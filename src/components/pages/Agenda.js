import React, { useEffect } from 'react';
import banner from '../../assets/Sign Up Page Banner.jpg';
// import BioModal from '../BioModal';
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
      <img src={banner} alt="" style={{ width: '100vw' }} />
      <div className={styles.header}>
        <h3>Agenda</h3>
      </div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Jueves 29 de octubre
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className={styles.body}>
              <Card.Text className={styles.text}>
                6pm - Como el trauma afecta nuestra salud mental: Una historia
                personal -
                <span style={{ fontSize: 'smaller' }}>
                  How Trauma Affects Our Mental Health: A Personal History
                </span>
                - presentado por <u>Leo Martínez</u>
                <br></br>
                <span className={styles.subText}>
                  <b>Sinopsis:</b> Participantes aprenderán acerca de los
                  efectos a lo largo de la vida de situaciones traumáticas. Como
                  estas afectan la salud física y mental, especialmente de las
                  personas que se identifican con la comunidad LGBTQI, a través
                  de una historia personal.
                </span>
                {/* <BioModal name="Leo Martínez" /> */}
              </Card.Text>
              <Card.Text className={styles.text}>
                7pm - La salud mental entre la comunidad LGBT+ -{' '}
                <span style={{ fontSize: 'smaller' }}>
                  Mental Health Within the LGBT+ Commmunity
                </span>{' '}
                - presentado por <u>Renato Pérez</u>
                <br></br>
                <span className={styles.subText}>
                  <b>Sinopsis:</b> La comunidad LGBT+ se enfrenta a mayor
                  disparidad de traumas que afectan nuestra salud mental. En
                  este taller les participantes recibirán información, donde
                  puedan aprender a reconocer síntomas y cómo lidiar utilizando
                  habilidades de afrontamiento
                </span>
                {/* <BioModal name="Renato Pérez" /> */}
              </Card.Text>
              <Card.Text className={styles.text}>8pm - Panel </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Viernes 30 de octubre
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className={styles.body}>
              <Card.Text className={styles.text}>
                12pm - Soy trans, ¿y qué? -{' '}
                <span style={{ fontSize: 'smaller' }}>I'm Trans, So What?</span>{' '}
                - presentado por <u>Bamby Salcedo</u>
                <br></br>
                <span className={styles.subText}>
                  <b>Sinopsis:</b> Este taller se enfocará en proveer
                  información pertinente a la comunidad trans, experiencias,
                  sobrevivencias y estrategias de resistencia y como es que la
                  comunidad trans se está empoderando para poder formar un mejor
                  mundo el cual vivir.
                </span>
                {/* <BioModal name="Bamby Salcedo" /> */}
              </Card.Text>
              <Card.Text className={styles.text}>
                1pm - La psicología de justicia -{' '}
                <span style={{ fontSize: 'smaller' }}>
                  The Psychology of Justice
                </span>{' '}
                = presentado por <u>Dr. Mario Tovar</u>
                <br></br>
                <span className={styles.subText}>
                  <b>Sinopsis:</b> Se describirá el concepto de justicia desde
                  diferentes perspectivas, y principios psicológicos para que
                  cada persona pueda reflexionar acerca de sus cualidades, para
                  convertirse en promotores de justicia social en sus
                  comunidades.
                </span>
                {/* <BioModal name="Dr. Mario Tovar" /> */}
              </Card.Text>
              <Card.Text className={styles.text}>
                2pm - La conexión nos protege -{' '}
                <span style={{ fontSize: 'smaller' }}>
                  Connection Protects Us
                </span>{' '}
                - presentado por <u>María Limón</u> <br></br>
                <span className={styles.subText}>
                  <b>Sinopsis:</b> Las historias de las comunidades latin@s en
                  los Estados Unidos es diversa; lo que tenemos en común es que
                  somos provenientes de varios pueblos colonizados. Aunque ya no
                  hay un conquistador derrotando nuestros barrios, los efectos
                  de la violencia que sobrevivieron nuestros antepasados sigue
                  afectando nuestras amistades, nuestras organizaciones,
                  nuestras relaciones, y nuestra salud. Tomaremos un tiempo para
                  analizar estos efectos e investigar algunos pasos que podamos
                  tomar para lidiar con los retos que la colonización presenta
                  en nuestras vidas hoy día.
                </span>
                {/* <BioModal name="María Limón" /> */}
              </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
