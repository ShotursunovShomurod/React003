import React from "react";
import "../Hero/Hero.scss";
import Hero__img from "./Hero__img/Hero__img";
import Hero__title from "./Hero__title/Hero__title";
import Hero__btn from "./Hero__btn/Hero__btn";

function Hero() {
  return (
    <div className="Hero">
      <div className="container">
        <div className="Hero__wrapper">
          <div className="Hero__suptitle">
            <p className="Navbar__bigtitle">
              Shop all latest offers and innovations
            </p>
            <a className="view" href=""><p>View all offers</p></a>
            <ul className="Hero__collection">
              <li className="Hero__title">Top Deals</li>
              <li className="Hero__title"> Mobile</li>
              <li className="Hero__title"> TV & Audio</li>
              <li className="Hero__title"> Home Appliances</li>
              <li className="Hero__title"> Computing</li>
            </ul>
          </div>
          <div className="Hero__block">
            <div className="Hero__card">
                <Hero__img/>
                <Hero__title/>
                <Hero__btn/>
            </div>
            <div className="Hero__card">
                <Hero__img/>
                <Hero__title/>
                <Hero__btn/>
            </div>
            <div className="Hero__card">
                <Hero__img/>
                <Hero__title/>
                <Hero__btn/>
            </div>
            <div className="Hero__card">
                <Hero__img/>
                <Hero__title/>
                <Hero__btn/>
            </div>
            <div className="Hero__card">
                <Hero__img/>
                <Hero__title/>
                <Hero__btn/>
            </div>
            <div className="Hero__card">
                <Hero__img/>
                <Hero__title/>
                <Hero__btn/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
