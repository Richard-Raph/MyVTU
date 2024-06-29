const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    const apiKey = process.env.API_KEY;
    const publicKey = process.env.PUBLIC_KEY;

    try {
        const response = await axios.get('https://sandbox.vtpass.com/api/service-variations?serviceID=mtn-data', {
            headers: {
                'Authorization': `Basic ${Buffer.from(`${apiKey}:${publicKey}`).toString('base64')}`
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;