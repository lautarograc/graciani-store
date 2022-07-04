import React from 'react';
import ItemCount from '../ItemCount';
function Item(props) {
  return (
    <div className="item">
      <div className="item__image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="item__info">
        <h3 className="item__title">{props.title}</h3>
        <p className="item__text">{props.text}</p>
        <p className="item__price">{props.price}</p>
        <ItemCount />
      </div>
    </div>
  );
}
export default Item;