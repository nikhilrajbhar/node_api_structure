const express = require('express');
const SellAndBuyRouter = require("./router/sellAndBuy");
const bodyParser = require("body-parser");
//Database Connection
const port = process.env.PORT ?? 3000;
import("./mongoose/connect_Db/connection.js");
const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");

    console.log("=============", req.method);
    if (req.method === "OPTIONS") {
        console.log("==OPTIONS===========",);
        res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH");
        return res.status(200).json({});
    }

    console.log("next=============");
    next();
});

app.use(SellAndBuyRouter);



app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
