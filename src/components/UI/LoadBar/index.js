import React from 'react';

import './styles.scss';

export default function LoadBar({percent = 0}) {
  const formattedPercent = Math.round(Math.abs(parseInt(percent, 10))) || 0;
  let width = formattedPercent >= 100 ? 100 : formattedPercent;
  width = `${width}%`;

  return (
    <div className="loadbar-container">
      <div className="background-container" />
      <div className="progressbar"style={{width}} />
    </div>
  );
}