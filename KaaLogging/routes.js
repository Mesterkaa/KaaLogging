"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (app, dbrw) {
    app.post('/ViewLogs', (req, res) => {
        console.log(req.body);
        if (req.body.KaaToken != undefined) {
            var AcceptedBool = true;
            for (var x in req.body) {
                if (["KaaToken", "Category", "Title"].indexOf(x) == -1) {
                    AcceptedBool = false;
                }
            }
            if (AcceptedBool) {
                dbrw.Logs.find(req.body, (err, docs) => {
                    console.log(docs);
                    res.json(docs);
                });
            }
            else {
                res.send("Unknown paramenter send");
            }
        }
        else {
            res.send("KaaToken not supplied");
        }
    });
};
//# sourceMappingURL=routes.js.map