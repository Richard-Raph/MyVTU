const { generateRequestId } = require('../../../helpers/requestId');
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
    const { request_id, amount, phone } = req.body;
    const apiKey = process.env.API_KEY;
    const secretKey = process.env.SECRET_KEY;

    try {
        const response = await axios.post('https://sandbox.vtpass.com/api/pay', {
            request_id,
            serviceID: 'mtn-airtime',
            amount,
            phone
        }, {
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