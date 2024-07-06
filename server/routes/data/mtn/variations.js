const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    const serviceID = 'mtn-data';
    const apiUrl = process.env.NODE_ENV === 'production'
        ? `https://api-service.vtpass.com/api/service-variations?serviceID=${serviceID}`
        : `https://sandbox.vtpass.com/api/service-variations?serviceID=${serviceID}`;

    try {
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;