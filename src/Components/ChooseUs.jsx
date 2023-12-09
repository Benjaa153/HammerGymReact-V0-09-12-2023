import React from 'react'

import ImgChoose from '../Images/choose-img.png'

import '../Styles/Choose.css'

const ChooseUs = () => {
  return (
    //  <!--==================== CHOOSE US ====================-->
    <section className="choose section" id="choose">
      <div className="choose_overflow">
        <div className="choose_container container grid">
          <div className="choose_content">
            <div className="section_data">
              <h2 className="section_subtitle">La Mejor Razón del</h2>
              <div className="section_titles">
                <h1 className="section_title-border">POR QUÉ</h1>
                <h1 className="section_title">ELEGIRNOS?</h1>
              </div>
            </div>
            <p className="choose_description">
              Cuando entres en <b>HAMMER GYM</b>
              encontrarás un montón de actividades grupales e individuales
              pensadas y programadas para vos. ¡Contanos tu objetivo y te
              asesoramos sin preocuparte por tu nivel o experiencia, nuestro
              profe o coach se encargará de todo!
            </p>
            <div className="choose_data">
              <div className="choose_group">
                <h3 className="choose_number">+400</h3>
                <p className="choose_subtitle">Miembros Actuales</p>
              </div>
              <div className="choose_group">
                <h3 className="choose_number">+40 Profesionales</h3>
                <p className="choose_subtitle">Altamente Capacitados</p>
              </div>
              <div className="choose_group">
                <h3 className="choose_number">Infinidad</h3>
                <p className="choose_subtitle">De Programas Personalizados</p>
              </div>
              <div className="choose_group">
                <h3 className="choose_number">+50 Maquinas</h3>
                <p className="choose_subtitle">De Ultima Tecnologia</p>
              </div>
            </div>
          </div>

          <div className="choose_images">
            <img src={ImgChoose} alt="gym image" className="choose_img" />

            <div className="choose_triangle choose_triangle-1"></div>
            <div className="choose_triangle choose_triangle-2"></div>
            <div className="choose_triangle choose_triangle-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs