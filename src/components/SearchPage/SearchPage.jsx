import axios from 'axios';
import react, {useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import './SearchPage.css';

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
        if (results===undefined) {
            return(
                <p>Nothing yet</p>
            )
        }
        else {
            console.log(results)
            return(
                results.map(gif => 
                    <div className='gifItemContainer'>
                        <img className="gifs" key={gif.id} src={gif.images.original.url} />
                        <h3 className='gifTitle'>{gif.title}</h3>
                        <p className='lineBreak'>this is invisible on purpose for the line break, dont touch</p> {/*dont touch it works*/}
                    </div>
                )
            )
        }
    }

    
    return(
        <>
            <form>
            <label>What would you like to search for: </label><input type='text' onChange={(event) => setInput(event.target.value)} value={input} placeholder="Search"></input>
            <button onClick={searchResult} >Submit</button>
            </form>
            <div className='gifContainer'>{displayGifs()}</div>
        </>
    );
}
export default SearchPage;