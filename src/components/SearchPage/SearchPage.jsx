import axios from 'axios';
import react, {useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';

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

    return(
        <>
            <form>
            <label>What would you like to search for: </label><input type='text' onChange={(event) => setInput(event.target.value)} value={input} placeholder="Search"></input>
            <button onClick={searchResult} >Submit</button>
            </form>
        </>
    );
}
export default SearchPage;