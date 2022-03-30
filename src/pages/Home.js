import React from "react";
import {Link} from "react-router-dom"
import BannerImage from '../assets/pizza.jpeg';
import '../style/Home.css';
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}  >
      <div className="headerContainer">
        <h1> Okela </h1>
        <p>  Thơm ngon mời bạn ăn nha </p>
        <Link to="/menu">
          <button> Đặt hàng ngay </button>
        </Link>
      </div>
    </div>
  )
}

export default Home