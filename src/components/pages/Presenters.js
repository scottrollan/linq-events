import React from 'react';
import Menu from '../Menu';
import Leo from '../../assets/Leo Martinez.jpg';
import Renato from '../../assets/Renato Perez.png';
import Mario from '../../assets/Mario Tovar.jpg';
import Maria from '../../assets/Maria Limon.jpg';
import { bios } from '../../data/bios';
import { Card } from 'react-bootstrap';
import HTMLParser from 'react-html-parser';
import styles from './Presenters.module.scss';

export default function Presenters() {
  return (
    <div>
      <Menu />
      <div className={styles.cardList}>
        {bios.map((b, index) => {
          let image;
          switch (true) {
            case b.imageURL === 'Leo':
              image = Leo;
              break;
            case b.imageURL === 'Renato':
              image = Renato;
              break;
            case b.imageURL === 'Mario':
              image = Mario;
              break;
            case b.imageURL === 'Maria':
              image = Maria;
              break;
            default:
              console.log(`No image found for ${b.name}`);
              break;
          }
          return (
            <Card key={`${b.name}${index}`} className={styles.card}>
              <Card.Header as="h4">{b.name}</Card.Header>
              <Card.Img
                variant="top"
                src={image}
                className={styles.image}
              ></Card.Img>
              <Card.Body>{HTMLParser(b.bio)}</Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
