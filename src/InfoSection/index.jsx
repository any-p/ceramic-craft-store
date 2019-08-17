import React from 'react';
import { Link } from 'react-router-dom';
import './InfoSection.css';

function InfoSection() {
  return (
    <section className="bg-lesson">
      <h1>Мастер классы</h1>
      <Link to="/master-class/">Записаться на мастер класс</Link>
    </section>
  );
}

export default InfoSection;
