import React from 'react'

import ImgProgram1 from '../Images/program1.png'
import ImgProgram2 from '../Images/program2.png';
import ImgProgram3 from '../Images/program3.png';
import ImgProgram4 from '../Images/program4.png';

import '../Styles/Program.css'


const Programs = () => {
  return (
          //  <!--==================== PROGRAM ====================-->
        <section className="program section" id="program">
            <div className="container">
                <div className="section_data">
                    <h2 className="section_subtitle">Nuestros Programas</h2>
                    <div className="section_titles">
                        <h1 className="section_title-border">PARA CONSTRUIR</h1>
                        <h1 className="section_title">TU MEJOR VERSIÓN</h1>
                    </div>
                </div>
                <div className="program_container grid">
                    <article className="program_card" id="musculacion">
                        <div className="program-shape">
                            <img src={ImgProgram1} alt="" className="program_img"/>
                        </div>
                        <h3 className="program_title">Salas de Musculación</h3>
                        <p className="program_description">
                            ¿Es tu primera vez entrenando o ya tienes experiencia? No te preocupes, en nuestros gimnasios encontrarás una amplia variedad y calidad de máquinas y pesas libres para fortalecer tu cuerpo, aumentar la musculatura y tonificar. Siempre estarás guiado por nuestros instructores, y además, tendrás acceso a diversas rutinas diseñadas tanto para principiantes como para desafiarte cada día.
                            </p>
                        <a href="" className="program_button">
                            <i className="ri-arrow-right-line"></i>
                        </a>
                    </article>
                    <article className="program_card" id="cardio">
                        <div className="program-shape">
                            <img src={ImgProgram2} alt="" className="program_img"/>
                        </div>
                        <h3 className="program_title">Salas de Cardio</h3>
                        <p className="program_description">
                            ¿Piensas que hacer cardio es aburrido? Con nuestro plan de musculación, también tendrás a tu disposición todos nuestros equipos de cardio: cintas, bicis, elípticos, remos, airbikes, entre otros. Elige el que más te divierta y sea adecuado para ti. Con estos equipos, podrás quemar todas las calorías que te propongas o simplemente calentar antes de comenzar tu rutina. 💪🏻
                            
                        </p>
                        <a href="" className="program_button">
                            <i className="ri-arrow-right-line"></i>
                        </a>
                    </article>
                    <article className="program_card" id="yoga">
                        <div className="program-shape">
                            <img src={ImgProgram3} alt="" className="program_img"/>
                        </div>
                        <h3 className="program_title">Salas de clases grupales</h3>
                        <p className="program_description">
                            ¿Y si pruebas entrenar en compañía con nuestras clases grupales? Crossfit, funcional, zumba, aeróbicos y muchas otras actividades para que elijas según tus gustos y objetivos. Siempre tendrás a tu disposición coaches que te orientarán, ya sea que estés empezando desde cero o perfeccionándote si ya tienes experiencia. ¡Consulta las clases disponibles en tu sede! Si sientes que las actividades individuales no son para ti, aquí encontrarás tu lugar😀   
                        </p>
                        <a href="" className="program_button">
                            <i className="ri-arrow-right-line"></i>
                        </a>
                    </article>
                    <article className="program_card" id="cross">
                        <div className="program-shape">
                            <img src={ImgProgram4} alt="" className="program_img"/>
                        </div>
                        <h3 className="program_title">Actividades Kids</h3>
                        <p className="program_description">
                        ¿Sabías lo importante que es la actividad física en los niños? Por eso, contamos con diferentes actividades grupales para ellos. Todas están guiadas por profesionales y pensadas para que se diviertan mientras acompañan su desarrollo físico y social, desde las etapas más tempranas.

                        </p>
                        <a href="" className="program_button">
                            <i className="ri-arrow-right-line"></i>
                        </a>
                    </article>
                </div>
            </div>
        </section>
  )
}

export default Programs