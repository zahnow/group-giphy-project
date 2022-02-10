import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'

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
                    {categories.map(category => <li>{category.name}</li>)}
                </ul>
            </div>
            {JSON.stringify(categories)}

            <h2>favorites</h2>
            {JSON.stringify(favorites)}
        </>
    );
}
export default FavoritesPage;