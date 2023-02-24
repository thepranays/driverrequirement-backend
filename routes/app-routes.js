const express = require('express');
const router = express.Router();
const { sendPushNotification } = require("../controllers/noti-controller");


//post routes
router.post("/send-driverreq", sendPushNotification);

module.exports = router;