
import { useDispatch } from 'react-redux';

function GalleryItem(props) {
    console.log('the props coming: ',props.giphy);
    let path = props.giphy?.images?.original?.url;
    let name = props.giphy.id;
    const dispatch = useDispatch();

    const FavoriteItem = () => {
        console.log('heart button was clicked!');
        dispatch({
            type: 'SET_FAVORITES',
            payload: {name, path}
        });
    }
    return (
        <li>
            {<img className="gifs" src={props.giphy?.images?.original?.url} />}
            <button onClick={FavoriteItem}>Heart</button>
        </li>
    );
}

export default GalleryItem;