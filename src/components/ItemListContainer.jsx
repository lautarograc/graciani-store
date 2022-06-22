import React from 'react'

const ItemListContainer = props => {
    return (
        <div className="item-list-container">
            <div className="item-list-header">
                <h1 className="item-list-header-title">{props.title}</h1>
                <p className="item-list-header-subtitle">{props.subtitle}</p>
            </div>
            <div className="item-list-body">
                {props.children}
            </div>
        </div>
    )
} //style this

export default ItemListContainer