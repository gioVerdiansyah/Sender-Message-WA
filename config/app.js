require('dotenv').config();

const PORT = process.env.APP_PORT || 3030;
const API_KEY = process.env.APP_API_KEY;

module.exports = {
    PORT,
    API_KEY
}