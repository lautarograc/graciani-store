import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    return(
        <div className="cart-widget">
            <div className="cart-widget-header">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>Cart</span>
            </div>
        </div>
    )
}

export default CartWidget;