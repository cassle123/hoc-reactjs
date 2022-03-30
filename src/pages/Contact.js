import React from 'react'
import PizzaLeft from "../assets/pizzaLeft.jpg"
import '../style/Contact.css'
function Contact() {
  return (
    <div className="contact">
        <div className="leftSide" 
            style={{ backgroundImage: `url(${PizzaLeft})` }}>
            sadasdasd
        </div>
        <div className="rightSide">
            <h1> Liên hệ với chúng tôi</h1>
            <form id="contact-form" method="POST">
                <label htmlFor="name">Full Name</label>
                <input  name="name" placeholder="Nhập họ tên của bạn" type="text" />
                <label htmlFor="email">Email</label>
                <input  name="email" placeholder="Nhập email của bạn" type="email" />
                <label htmlFor="message">Nhắn tin</label>
                <textarea  rows="6" placeholder="Nhập tin nhắn..." name="message" required>
                </textarea>
                <button type="submit">Gửi tin nhắn</button>
            </form>
        </div>
    </div>
  )
}

export default Contact