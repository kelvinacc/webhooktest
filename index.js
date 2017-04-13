'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/', function (req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again.";
    console.log("These are the results:" + req.body);

    /*if (req.body.result.metadata.intentName == "GoBack") {
        speech = "Going back dude";
         
        return res.json({
            speech: speech,
            displayText: speech,
            source: 'webhook-sample'
        });
    }
    else if (req.body.result.metadata.intentName == "Next") {
        speech = "Forward it is";
        return res.json({
            speech: speech,
            displayText: speech,
            source: 'webhook-sample'
        });
    }
    else if (req.body.result.metadata.intentName == "Play") {
        speech = "Playing nothing now, enjoy the nothingness";
        return res.json({
            speech: speech,
            displayText: speech,
            source: 'webhook-sample'
        });
    }
    else {
        speech = "You know what, I just don't get you";
        return res.json({
            speech: speech,
            displayText: speech,
            source: 'webhook-sample'
        });
    }*/

});

restService.listen((process.env.PORT || 4200), function () {
    console.log("Server up and listening");
});
