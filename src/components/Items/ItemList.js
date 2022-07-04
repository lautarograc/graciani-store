import {useState, useEffect} from 'react';
import Item from './Item';

function ItemList(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(props.items);
    }, 2000);
  }
    );
    useEffect(() => {
        myPromise.then(data => {
            setItems(data);
            setLoading(false);
        }
        );
        }
        , []);
    return (
        <div className="list-of-items">
            {loading ? <div>Loading...</div> :
                items.map(item => <Item key={item.id} {...item} />)
            }
        </div>
    );
}
export default ItemList;