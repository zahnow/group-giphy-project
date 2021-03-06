import axios from 'axios';
import react, {useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import './SearchPage.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function SearchPage(){

    const dispatch = useDispatch();
    let [input, setInput] = useState('');

    const searchResult = (event) => {
        console.log('Search result has changed...');
        console.log('the input value is: ', input);
        dispatch({
            type: 'FETCH_SEARCH_RESULTS',
            payload: input
        });
    }

    let results = useSelector(store => store.searchResults)
    results = results.data;
    console.log('results:',results)

    function displayGifs() {
        if (results!==undefined) {
            console.log(results)
            return(
                results.map(gif => 
                    <GalleryItem key={gif.id} giphy={gif} />
                )
            )
        }
    }

    
    return(
        <>
            <form>
                <input type='text' onChange={(event) => setInput(event.target.value)} value={input} placeholder="Search"></input>
            <button onClick={searchResult} >Submit</button>
            </form>
            <div className='gifContainer'>{displayGifs()}</div>
        </>
    );
}
export default SearchPage;