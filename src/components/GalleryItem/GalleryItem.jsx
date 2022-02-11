import './GalleryItem.css';
import { useDispatch } from 'react-redux';

function GalleryItem(props) {
    let gif = props.giphy
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
        <>
        <div className='gifItemContainer'>
            <img className="gifs" key={gif.id} src={gif?.images?.original?.url} />
            <h3 className='gifTitle'>{gif.title}</h3>
            <p className='lineBreak'>this is invisible on purpose for the line break, dont touch</p> {/*dont touch it works*/}
            <button onClick={FavoriteItem}>Heart</button>
        </div>
        </>
    );
}

export default GalleryItem;