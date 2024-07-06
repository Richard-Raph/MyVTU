const { generateRequestId } = require('../../../helpers/requestId');
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
    const { billersCode, variation_code, phone } = req.body;
    const apiKey = process.env.API_KEY;
    const secretKey = process.env.SECRET_KEY;
    const requestId = generateRequestId();
    const sandboxUrl = process.env.SANDBOX_URL;

    try {
        const response = await axios.post(`${sandboxUrl}/pay`, {
            request_id: requestId,
            serviceID: 'glo-data',
            billersCode,
            variation_code,
            amount: '',  // Optional and ignored, so sending an empty string
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