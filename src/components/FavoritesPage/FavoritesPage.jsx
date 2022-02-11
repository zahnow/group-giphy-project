import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './Favorites.css';

function FavoritesPage(){
    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favorites);
    const categories = useSelector(store => store.categories);

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

            <h2>favorites</h2>
            {favorites.map(favorite => {return (
                <div key={favorite.id}>
                    <h3>{favorite.name}</h3>
                    <img src={favorite.path} />
                </div>
            )})}
        </>
    );
}
export default FavoritesPage;