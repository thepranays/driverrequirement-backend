const express = require("express");
const app = express();
var admin = require("firebase-admin");
var serviceAccount = require("./secret-config/service-accountkey.json");
const router = require("./routes/app-routes");

//middlwares and routers
app.use(express.json());
app.use("/", router);

//initalizing firebase service account
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


//start server 
app.listen(3000 || process.env.PORT, function () {
    console.log("Started server..");
});





