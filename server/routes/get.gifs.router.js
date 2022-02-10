const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    axios({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}&limit=10`,
    }).then((response) => {
        console.log('response from giphy', response.data);
        const giphyResponse = response.data
        res.send(giphyResponse.data)
    }).catch((error) => {
        console.log('error from giphy', error);
    })
})

module.exports = router;