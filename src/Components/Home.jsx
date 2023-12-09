import React from 'react'
import '../Styles/Home.css'
import HomeImg from '../Images/home-img.png'
const Home = () => {
  return (
          //  <!--==================== HOME ====================-->
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_data">
                    <h2 className="home_subtitle">BIENVENIDO A</h2>
                    <h2 className="home_title">HAMMER</h2>
                    <p className="home_description">
                        Este es nuestro sitio oficial.
                        Todo lo que necesitas saber para entrenar con nosotros en un solo lugar.
                    </p>
                    <a href="#pricing" className="button button_flex">
                        Comienza ahora!
                    </a>
                </div>
                <div className="home_images">
                    <img src={HomeImg} alt="gim image" className="home_img"/>
                    <div className="home_triangle home_triangle-3"></div>
                    <div className="home_triangle home_triangle-2"></div>
                    <div className="home_triangle home_triangle-1"></div>
                </div>
            </div>

        </section>
  )
}

export default Home