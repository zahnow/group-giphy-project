const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/:search', (req, res) => {
    console.log('this should be the search',req.params.search)
    let search = req.params.search
    axios({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${process.env.GIPHY_API_KEY}&limit=10&rating=r`
    }).then((response) => {
        console.log('response from giphy', response.data);
        const giphyResponse = response.data
        res.send(giphyResponse.data)
    }).catch((error) => {
        console.log('error from giphy', error);
        res.sendStatus(500);
    })
})

module.exports = router;