import React from 'react';
import Menu from '../Menu';
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
          return (
            <Card key={`${b.name}${index}`} className={styles.card}>
              <Card.Header as="h4">{b.name}</Card.Header>
              <Card.Img variant="top" src={b.imageURL}></Card.Img>
              <Card.Body>{HTMLParser(b.bio)}</Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
