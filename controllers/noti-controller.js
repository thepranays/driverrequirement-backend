var admin = require("firebase-admin");



exports.sendPushNotification = async (req, res, next) => {

    try {
        //send push notification on drivereq subscribed user's channel

        admin.messaging().sendToTopic('drivereq', {
            notification: {
                title: req.body.vehicle + " driver required",
                body: req.body.from + " to " + req.body.to,
                image: req.body.imageUrl,
                clickAction: 'FLUTTER_NOTIFICATION_CLICK',//to trigger on click


            },


            data: {
                timedate: req.body.date + " | " + req.body.time,
                dist: req.body.dist,
                image: req.body.imageUrl,


            }

        });

        res.status(200).json({ message: "Request Sent Succefully" });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
        return next(new Error("Error 500:Internal server error"));
    }
};

