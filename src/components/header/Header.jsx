import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../assets/cart.svg';
import Favorite from '../../assets/favorite.svg';
import Logo from '../../assets/logo.png';
import User from '../../assets/user.svg';
import AppContext from '../../context';
import './Header.scss';

const Header = ({ onClickCart }) => {
    const { card } = React.useContext(AppContext)
    const total = card.reduce((sum, obj) => parseFloat(obj.price) + sum, 0);
    return (
        <div className="header d-flex justify-between">
            <Link to={process.env.PUBLIC_URL + '/'}>
                <div className="header-block__left d-flex align-center">
                        <img width={100} height={100} src={Logo} alt="logo" className="header-logo" />
                    <div className="header-title ml-10">
                        <h2>REACT SKIRTS</h2>
                        <div className="header-descr">
                            Магазин лучших юбок
                        </div>
                    </div>
                </div>
            </Link>
            <div className="header-block__right">
                <div className="header-cart cu-p d-flex align-center" onClick={onClickCart}>
                    <img  src={Cart} alt="cart" className="header-cart__img" />
                    <b className="pl-10">{total} тг.</b>
                </div>
                <Link to={process.env.PUBLIC_URL + '/favorite'}>
                    <img src={Favorite} alt="favorite" className="header-favorite__img cu-p " />
                </Link>
                
                <Link to={process.env.PUBLIC_URL + '/orders'}>
                    <img src={User} alt="user" className="header-user__img cu-p" />
                </Link>
            </div>
        </div>
    );
}

export default Header;