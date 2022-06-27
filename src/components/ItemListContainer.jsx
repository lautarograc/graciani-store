import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = props => {
    return (
        <div className="item-list-container">
            <div className="item-list-header">
                <h1 className="item-list-header-title">{props.title}</h1>
                <ItemCount count={props.count} stock={props.stock} />
            </div>
            <div className="item-list-body">
                {props.children ? props.children : null}

            </div>
        </div>
    )
} //style this

export default ItemListContainer