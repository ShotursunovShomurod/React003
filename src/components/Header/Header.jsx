import React from 'react'
import "../Header/Header.scss"
let logo = "https://www.samsung.com/us/"


const Header = () => {

    return (
<div  className='Header'>
<div className="container">
    <div className="Header__wrapper">
        <div className="Header__logo">
            <img className='Header__img' src="/image.png" alt="" />
        </div>
        <div className="Header__content">
            <ul className='Header__collection'>
                <li className='Header__item'>Shop</li>
                <li className='Header__item'>Al</li>
                <li className='Header__item'>Mobile</li>
                <li className='Header__item'>TV & Audio</li>
                <li className='Header__item'>Appliances</li>
                <li className='Header__item'>Computing</li>
                <li className='Header__item'>Displays</li>
                <li className='Header__item'>Assesories</li>
                <li className='Header__item'>SmartThings</li>
            </ul>
        </div>
        <div className="Header__icon">
            <ul className='Header__collection2'>
                <li className='Header__item'>Explore</li>
                <li className='Header__item'>Support</li>
                <li className='Header__item'>For Business</li>
                <li className='Header__item'></li>
                <li className='Header__item'>Explore</li>
                <li className='Header__item'>Explore</li>
            </ul>
        </div>
    </div>
</div>
</div>
    )
}

export default Header