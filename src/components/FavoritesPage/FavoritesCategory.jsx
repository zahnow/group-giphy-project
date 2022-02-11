import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import FavoritesItem from './FavoritesItem';
import './Favorites.css';


function FavoritesCategory () {
    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favorites);
    const categories = useSelector(store => store.categories);
    const params = useParams();

    useEffect(() => {
        dispatch({type: 'FETCH_CATEGORIES'});
        dispatch({type: 'FETCH_FAVORITES_IN_CATEGORY', payload: params.id});
    }, []);

    return(
        <>
            <h1>{categories.find(category => category?.id === params?.id)} Favorites</h1>
            <div className='category-nav'>
                <ul>
                    {categories.map(category => (<li key={category.id}> <NavLink key={category.id} to={`/favorites/${category.id}`} > {category.name} </NavLink> </li>))}
                </ul>
            </div>
            {favorites.map(favorite => {return (
                <FavoritesItem key={favorite.id} categories={categories} favorite={favorite} />
            )})}
        </>
    );
}

export default FavoritesCategory;