import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './InfoSection.css';

const InfoSection = () => (
  <>
    <section className="dark-section">
      <h1 className="dark-section__text">
        Просто лучшая студия
        <br />
        Керамики в городе!
      </h1>
      <h2 className="dark-section__text m-t-30">Но это не точно ...</h2>
      <div className="centralize">
        <button type="button" className="light-btn_primary m-t-50">
          <span className="light-btn__text_primary">Записаться на мастер класс</span>
        </button>
      </div>
    </section>
    <section className="info-section">
      <Link to="/master-class/" className="info-section__text">
        <h1>Узнать подробнее о мастер-классах</h1>
      </Link>
    </section>
  </>
);

export default memo(InfoSection);
