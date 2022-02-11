import axios from 'axios';
import { useState } from 'react';
import {useDispatch} from 'react-redux';

function FavoritesItem( {favorite, categories} ) {
    const [catInput, setCatInput] = useState({});
    const dispatch = useDispatch();

    function handleAddCategory() {
        axios.put(`/api/favorite/${favorite.id}`, {action: "ADD", category_id: catInput})
    }

    function handleCatChange(event) {
        console.log('in cat change', event.target.value);
        setCatInput(event.target.value);
    }

    return (
        <div>
            <h3>{favorite.name}</h3>
            <img src={favorite.path} />
            <select onChange={handleCatChange}>
                {categories.map(cat => (<option key={cat.id} value={cat.id}>{cat.name}</option>))}
            </select>
            {<button onClick={handleAddCategory}>Add To Category</button>}
        </div>
    )
}

export default FavoritesItem;