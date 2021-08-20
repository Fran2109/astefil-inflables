import './Item.css';
import React from 'react';

const Item = ({object}) => {
    return(
        <div className="item">
            {console.log(object)}
            {object.name}
        </div>
    )
}

export default Item;