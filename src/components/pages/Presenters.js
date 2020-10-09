import React, { useEffect } from 'react';
import $ from 'jquery';
import Menu from '../Menu';

export default function Presenters() {
  useEffect(() => {
    $('#presenters').addClass('active');
  });
  return (
    <div>
      <Menu />
      <h2>This is the Presenters Page</h2>
    </div>
  );
}
