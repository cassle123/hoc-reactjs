import React from 'react'
import MultiplePizza from "../assets/multiplePizzas.jpeg"
import '../style/About.css'
function About() {
  return (
    <div className="about">
        <div className="aboutTop" 
            style={{backgroundImage : `url(${MultiplePizza})` }}>
        </div>
        <div className="aboutBottom">
            <h1>Về chúng tôi</h1>
            <p>Với sự nỗ lực và phát triển của bản thân tôi sẽ thành công trong lĩnh vực ReactJS này và giúp cho bản thân tôi phát triển hơn trong tương lai</p>
        </div>
    </div>
  )
}

export default About