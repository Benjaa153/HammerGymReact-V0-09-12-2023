import React from 'react'

import ImgCalculate from '../Images/calculate-img.png'

import '../Styles/Calculate.css'
const Calculate = () => {
  return (
    // <!--==================== CALCULATE ====================-->
    <section className="calculate section">
      <div className="calculate_container container grid">
        <div className="calculate_content">
          <div className="section_titles">
            <h1 className="section_title-border">CALCULA</h1>
            <h1 className="section_title">TU IMC</h1>
          </div>
          <p className="calculate_description">
            El índice de masa corporal (IMC) es el peso de una persona en
            kilogramos dividido por el cuadrado de la estatura en metros. El IMC
            es un método de evaluación fácil y económico para la categoría de
            peso: bajo peso, peso saludable, sobrepeso, y obesidad.
          </p>
          <form action="" className="calculate_form" id="calculate-form">
            <div className="calculate_box">
              {/* <input type="number" placeholder="Altura" className="calculate_input" id="calculate-cm"> */}
              <label htmlFor="" className="calculate_label">
                cm
              </label>
            </div>
            <div className="calculate_box">
              {/* <input type="number" placeholder="Peso" className="calculate_input" id="calculate-kg"> */}
              <label htmlFor="" className="calculate_label">
                Kg
              </label>
            </div>

            <button type="submit" className="button button_flex button">
              Calcular
            </button>
          </form>
          <p className="calculate_message" id="calculate-message"></p>
        </div>
        <img
          src={ImgCalculate}
          alt="calculate image"
          className="calculate_img"
        />
      </div>
    </section>
  );
}

export default Calculate