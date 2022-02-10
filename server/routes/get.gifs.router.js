const express = require('express');
const router = express.Router();
const axios = require('axios');

import { useSelector } from 'react-redux';
const search = useSelector(store => store.searchResults)

router.get('/', (req, res) => {
    axios({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${process.env.GIPHY_API_KEY}&limit=1&rating=r`
    }).then((response) => {
        console.log('response from giphy', response.data);
        const giphyResponse = response.data
        res.send(giphyResponse.data)
    }).catch((error) => {
        console.log('error from giphy', error);
    })
})

module.exports = router;