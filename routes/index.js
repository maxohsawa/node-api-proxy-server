const url = require('url');
const express = require('express');
const router = express.Router();
const needle = require('needle');
const apicache = require('apicache');

// env variables
const API_BASE_URL = process.env.GOOGLE_PLACES_BASE_URL;
const API_KEY_NAME = process.env.GOOGLE_KEY_NAME;
const API_KEY_VALUE = process.env.GOOGLE_KEY;

// initialize cache
let cache = apicache.middleware;

// cache middleware will cache response for 2 minutes
router.get('/', cache('2 minutes'), async (req, res) => {
  try {
    // build parameter object based on the incoming request
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
      ...url.parse(req.url, true).query,
    });

    // set header options
    const options = {
      'Access-Control-Allow-Origin': '*',
    };

    // use parameter object to build outgoing request
    const apiRes = await needle('get', `${API_BASE_URL}?${params}`, options);
    const data = apiRes.body;

    // logs request to the public API during testing
    if (process.env.NODE_ENV !== 'production') {
      console.log(`REQUEST: ${API_BASE_URL}?${params}`);
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
