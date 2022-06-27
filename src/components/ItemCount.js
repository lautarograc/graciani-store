import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
 
const ItemCount = ({count, stock, onChange}) => {
  const [value, setValue] = useState(count);
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue > stock) {
      setValue(stock);
    } else if (newValue < 0) {
      setValue(0);
    } else {
      setValue(newValue);
    }
    onChange(newValue);
  }
  return (
    <div className="item-count">
      <FontAwesomeIcon icon={faMinus} onClick={() => handleChange({target: {value: value - 1}})} />
      <input type="number" value={value} onChange={handleChange} />
      <FontAwesomeIcon icon={faPlus} onClick={() => handleChange({target: {value: value + 1}})} />
      <p>Stock: {stock}</p>
    </div>
  );
}
export default ItemCount;