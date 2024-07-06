const crypto = require('crypto');

function generateRequestId() {
    const date = new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos', hour12: false });
    const formattedDate = date.replace(/[^0-9]/g, '').slice(0, 12);
    const randomString = crypto.randomBytes(5).toString('hex');
    return formattedDate + randomString;
}

module.exports = { generateRequestId };