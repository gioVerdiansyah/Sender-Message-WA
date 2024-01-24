const whatsappClient = require('../services/WhatsAppClient');

const sending = (req, res) => {
    const data = req.body;
    console.log(data);

    whatsappClient.sendMessage(data.phone, data.message);
    res.send();
}

module.exports = {
    sending
}