import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './Favorites.css';
import FavoritesItem from './FavoritesItem';

function FavoritesPage(){
    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favorites);
    const categories = useSelector(store => store.categories);
    //const [catInput, ]

    useEffect(() => {
        dispatch({type: 'FETCH_CATEGORIES'});
        dispatch({type: 'FETCH_ALL_FAVORITES'})
    }, []);

    return(
        <>
            <h1>Favorites</h1>
            <div className='category-nav'>
                <ul>
                    {categories.map(category => (<li key={category.id}> <NavLink to={`/favorites/${category.id}`} > {category.name} </NavLink> </li>))}
                </ul>
            </div>

            <div className='gifContainer'>
            {favorites.map(favorite => {return (
                <FavoritesItem key={favorite.id} categories={categories} favorite={favorite} />
            )})}
            </div>
        </>
    );
}
export default FavoritesPage;