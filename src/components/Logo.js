import React from 'react';
import logo from '../assets/logo.png';

export default function Logo() {
  return (
    <img
      src={logo}
      alt=""
      style={{
        width: '13%',
        margin: '1%',
        position: 'fixed',
        top: 'calc(50% - 7.5vw)',
        left: 0,
      }}
    />
  );
}
