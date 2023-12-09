import React from 'react'

import ImgComercio1 from '../Images/comercio1.png'
import ImgComercio2 from '../Images/comercio2.png'
import ImgComercio3 from '../Images/comercio3.png'
import ImgComercio4 from '../Images/comercio4.png'

import '../Styles/Logos.css'

const Logos = () => {
  return (
      //  <!--==================== LOGOS ====================-->
        <section className="logos section">
            <div className="logos_container container grid">
                <img src= {ImgComercio1} alt="logo image" className="logos_img"/>
                <img src= {ImgComercio2} alt="logo image" className="logos_img"/>
                <img src= {ImgComercio3} alt="logo image" className="logos_img"/>
                <img src= {ImgComercio4} alt="logo image" className="logos_img"/>
            </div>
        </section>

  )
}

export default Logos