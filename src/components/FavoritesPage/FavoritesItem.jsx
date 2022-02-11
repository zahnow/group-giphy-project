import axios from 'axios';
import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';

function FavoritesItem( {favorite, categories} ) {
    const [catInput, setCatInput] = useState({});
    const [favCategories, setFavCategories] = useState([]);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     axios.get(`/api/favorite/categories/${favorite.id}`)
    //         .then(response => setFavCategories(response.data));
    // });

    function handleAddCategory() {
        axios.put(`/api/favorite/${favorite.id}`, {action: "ADD", category_id: catInput})
    }

    function handleRemoveCategory() {
        axios.put(`/api/favorite/${favorite.id}`, {action: "REMOVE", category_id: catInput})
    }

    function handleCatChange(event) {
        console.log('in cat change', event.target.value);
        setCatInput(event.target.value);
    }

    return (
        <div className='gifItemContainer'>
            <img className='gifs' src={favorite.path} />
            <h3 className='gifTitle'>{favorite.name}</h3>
            <select onChange={handleCatChange}>
                {categories.map(cat => (<option key={cat.id} value={cat.id}>{cat.name}</option>))}
            </select>
            {<button onClick={handleAddCategory}>Add To Category</button>}
            <ul>
                {favCategories.map(category => {
                    <li>{category.name}</li>
                })}
            </ul>
        </div>
    )
}

export default FavoritesItem;