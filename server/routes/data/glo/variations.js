const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    const apiKey = process.env.API_KEY;
    const secretKey = process.env.SECRET_KEY;
    const sandboxUrl = process.env.SANDBOX_URL;

    try {
        const response = await axios.get(`${sandboxUrl}/service-variations?serviceID=glo-data`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from(`${apiKey}:${secretKey}`).toString('base64')}`
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;