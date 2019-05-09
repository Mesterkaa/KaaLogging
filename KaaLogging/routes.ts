import express = require('express');
const {OAuth2Client}  = require('google-auth-library');
module.exports = function (app: express.Application, dbrw) {
    
    app.get('/SignIn/:id', (req, res) => {
        var id = req.params.id;
        const client = new OAuth2Client("642311383172-771qivssmq9g7l38neqvp3jkh1koo1b2.apps.googleusercontent.com")

        async function verify() {
            const ticket = await client.verifyIdToken({
                idToken: id,
                audience: "642311383172-771qivssmq9g7l38neqvp3jkh1koo1b2.apps.googleusercontent.com"
            });
            const payload = ticket.getPayload();
            const userid = payload['sub'];
            const username = payload['name'];
            const useremail = payload['email'];
            dbrw.Users.find({ GoogleId: userid }, (err, docs) => {
                if (docs.length == 0) {
                    var InsertUser = (KaaToken) => {
                        dbrw.Users.insert({ GoogleId: userid, Name: username, Email: useremail, KaaToken: KaaToken }, (err, docs) => {
                            res.json(KaaToken);
                        })
                    }
                    GenerateKaaToken(10, InsertUser);
                } else {
                    res.json(docs[0].KaaToken);
                }
            })
        }
        verify().catch(() => {
            res.sendStatus(500);

        });
    })

    app.post('/PostLogs', (req, res) => {
        

        if (req.body.KaaToken != undefined && req.body.Content != undefined) {
            var AcceptedBool = true;
            for (var x in req.body) {
                if (["KaaToken", "Category", "Title", "Content"].indexOf(x) == -1) { AcceptedBool = false }
            }
            if (AcceptedBool) {
                dbrw.Users.find({ KaaToken: req.body.KaaToken }, (err, docs) => {
                    if (docs.length != 0) {
                        dbrw.Logs.insert(req.body, (err, docs) => {
                            res.json(docs);
                        })
                    } else {
                        res.statusCode = 500;
                        res.send("KaaToken: " + req.body.KaaToken + " doesn't exist")
                    }
                })
                
                
            } else {
                res.statusCode = 500;
                res.send("Unknown paramenter send")
            }

        } else {
            res.statusCode = 500;
            res.send("KaaToken or content not supplied")
        }
    })
    
    app.get('/GetLogs', (req, res) => {
        
        if (req.query.KaaToken != undefined) {
            var AcceptedBool = true;
            for (var x in req.query) {
                if (["KaaToken", "Category", "Title"].indexOf(x) == -1) { AcceptedBool = false }
            }
            if (AcceptedBool) {
                dbrw.Users.find({ KaaToken: req.query.KaaToken }, (err, docs) => {
                    if (docs.length != 0) {
                        dbrw.Logs.find(req.query, (err, docs) => {
                            res.json(docs);
                        })
                    } else {
                        res.statusCode = 500;
                        res.send("KaaToken: " + req.query.KaaToken + " doesn't exist")
                    }
                })
                
            } else {
                res.statusCode = 500;
                res.send("Unknown paramenter send")
            }

        } else {
            res.statusCode = 500;
            res.send("KaaToken not supplied")
        }
    })
    var GenerateKaaToken = (length, callback: (string) => void) => {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        dbrw.Users.find({ KaaToken: text }, (err, docs) => {
            if (docs.length == 0) {
                callback(text)
            } else {
                GenerateKaaToken(10, callback);
            }
        })
        
    }
    
}