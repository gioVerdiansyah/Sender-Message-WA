// app.js
const express = require("express");
const config = require("./config/app");
const apiRoutes = require("./routes/api");
const bodyParser = require("body-parser");

const whatsappClient = require('./services/WhatsAppClient');
whatsappClient.initialize();

const app = express();
// app.use(express.json);

app.use(bodyParser.json());

// Middleware untuk validasi x-api-key
const validateAPIKey = (req, res, next) => {
    const apiKeyHeader = req.headers['x-api-key'];
    const apiKeyEnv = config.API_KEY;

    if (!apiKeyHeader || apiKeyHeader !== apiKeyEnv) {
        return res.status(401).json({ error: 'Invalid API key' });
    }

    next();
};

// Gunakan middleware untuk setiap request
app.use(validateAPIKey);

// Panggil routes API
app.use("/", apiRoutes);

app.listen(config.PORT, () => {
    console.log("Server Listening on PORT: ", config.PORT);
});