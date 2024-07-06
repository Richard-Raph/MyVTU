const { generateRequestId } = require('../../../helpers/requestId');
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
    const { amount, phone } = req.body;
    const apiKey = process.env.API_KEY;
    const secretKey = process.env.SECRET_KEY;
    const requestId = generateRequestId();

    try {
        const response = await axios.post('https://sandbox.vtpass.com/api/pay', {
            request_id: requestId,
            serviceID: 'glo',
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
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;