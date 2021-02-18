import React from 'react' 
import {Link} from 'react-router-dom'
import emptyBasket from '../../img/empty-cart.png'

export const EmptyBusket = ({}) => {
    return(
        <div>
            <div className="container container--cart">
                <div className="cart cart--empty">
                    <h2>Корзина пустая <b>😑</b></h2>
                    <p>
                    Вероятней всего, вы не заказывали ещё игрушки.<br />
                    Для того, чтобы заказать игрушки, перейдите на главную страницу.
                    </p>
                    <img src={emptyBasket} alt="Empty cart" />
                    <Link to="/" className="button button--black">
                        <span>Вернуться назад</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}