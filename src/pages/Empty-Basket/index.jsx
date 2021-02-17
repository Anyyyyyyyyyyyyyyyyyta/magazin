import React from 'react' 
import emptyBasket from '../../img/empty-cart.png'

export const EmptyBusket = ({}) => {
    return(
        <div>
            <div className="container container--cart">
                <div className="cart cart--empty">
                    <h2>Корзина пустая <icon>😑</icon></h2>
                    <p>
                    Вероятней всего, вы не заказывали ещё игрушки.<br />
                    Для того, чтобы заказать игрушки, перейдите на главную страницу.
                    </p>
                    <img src={emptyBasket} alt="Empty cart" />
                    <a href="/" className="button button--black">
                    <span>Вернуться назад</span>
                    </a>
                </div>
            </div>
        </div>
    )
}