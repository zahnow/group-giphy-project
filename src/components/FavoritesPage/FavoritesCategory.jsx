import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import {NavLink} from 'react-router-dom';


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
                    {categories.map(category => (<li key={category.id}> <NavLink to={`/favorites/${category.id}`} > {category.name} </NavLink> </li>))}
                </ul>
            </div>

            <h2>favorites</h2>
            {favorites.map(favorite => {return (
                <div>
                    <h3>{favorite.name}</h3>
                    <img src={favorite.path} />
                </div>
            )})}
        </>
    );
}

export default FavoritesCategory;