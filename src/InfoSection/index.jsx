import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './InfoSection.css';

function InfoSection() {
  return (
    <section className="info-section">
      <h1 className="info-section__text">Мастер классы</h1>
      <Link to="/master-class/">Записаться на мастер класс</Link>
    </section>
  );
}

export default memo(InfoSection);
