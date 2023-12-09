import React from 'react'

import '../Styles/Footer.css'
const Footer = () => {
  return (
    //  <!--==================== FOOTER ====================-->
    <footer className="footer section" id="footer">
        <div className="footer_container container grid">
            <div>
                <a href="#" className="footer_logo">
                    <img src="/img/logo--nav.png" alt=""/>
                </a>
                <p className="footer_description">
                    Subscribite para promociones y descuentos!
                </p>

                <form action="" className="footer_form" id="contact-form">
                    {/* <input type="email" name="user_email" placeholder="Ingresa tu Email" className="footer_input" id="contact-user"> */}
                    <button className="button" type="submit">
                        Subcribir
                    </button>
                </form>
                <p className="footer_message" id="contact-message"></p>
            </div>
            <div className="footer_content">
                <div>
                    <h3 className="footer_title">
                        SERVICIOS
                    </h3>
                    <ul className="footer_links">

                        <li>
                            <a href="#musculacion" className="footer_link">Musculación</a>
                        </li>
                        <li>
                            <a href="#cardio" className="footer_link">Cardio</a>
                        </li>
                        <li>
                            <a href="#yoga" className="footer_link">Grupal</a>
                        </li>
                        <li>
                            <a href="#cross" className="footer_link">Kids</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="footer_title">
                        PRECIOS
                    </h3>
                    <ul className="footer_links">
                        <li>
                            <a href="#plan-basico" className="footer_link">Plan Basico</a>
                        </li>
                        <li>
                            <a href="#plan-premiun" className="footer_link">Plan Premiun</a>
                        </li>
                        <li>
                            <a href="#plan-berserker" className="footer_link">Plan Berserker</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="footer_title">
                        UBICACIÓN
                    </h3>
                    <ul className="footer_links">
                        <li>
                            <a href="https://www.google.com/maps/dir/-27.1697365,-65.4994087/Juan+Bautista+Alberdi+240,+T4142+Monteros,+Tucum%C3%A1n/@-27.1719738,-65.4994747,16.84z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9423cacba06e68af:0x216d7d3e12e3d00f!2m2!1d-65.499415!2d-27.1697329?entry=ttu" className="footer_link" target="_blank"><i
                                    className="ri-map-pin-2-line"></i>Click Aqui!</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="footer_group">
                <ul className="footer_social">
                    <a href="https://www.instagram.com/hammer.ok/" target="_blank" className="footer_social-link">
                        <i className="ri-instagram-line"></i>
                    </a>
                    <a href="https://www.facebook.com/hammer.okey/" target="_blank" className="footer_social-link">
                        <i className="ri-facebook-box-line"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=543863564651&text=Hola%21+vengo+desde+el+sitio+oficial%21%21&type=phone_number&app_absent=0" target="_blank" className="footer_social-link">
                        <i className="ri-whatsapp-line"></i>
                    </a>
                </ul>
                <span className="footer_copy">
                    &#169; Copyright Apache90. All rights reserved
                </span>
            </div>
        </div>

    </footer>
  )
}

export default Footer