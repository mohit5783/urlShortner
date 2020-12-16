const client = require("../DB/db.js")

const getAllURLs = async (req, res) => {
    client.connectDB(async (err) => {
        try {
            if (err) {
                console.log(err);
                return res.status(400).send({ success: false, err });
            }
            const db = await client.getDb()
            const dbrec = db.collection('urldata').find().toArray().then(result => {
                return res.status(200).send(result);
            }).catch(err => {
                return res.sendStatus(500).send({
                    message: err.message || "some error occured"
                });
            });
        }
        catch (err) {
            console.log(err);
            return res.sendStatus(500).send({
                message: err.message || "some error occured"
            });
        }
    })
};

const AddURL = async (req, res) => {
    client.connectDB(async (err) => {
        try {
            if (err) {
                console.log(err);
                return res.status(400).send({ success: false, err });
            }

            if (isValidUrl(req.body.LongURL)) {
                const db = await client.getDb()
                const dbrec = db.collection('urldata')
                var urlexist = false;
                const findrec = await db.collection('urldata').find({ "LongURL": req.body.LongURL }).toArray().then(result => {
                    if (result.length > 0) {
                        urlexist = true;
                        return res.status(200).send(result[0]);
                    }
                });
                if (!urlexist) {
                    const surl = CreateNewShortURL(req.get('host'));
                    await dbrec.insertOne({ LongURL: req.body.LongURL, ShortURL: surl })
                    return res.status(200).send({ LongURL: req.body.LongURL, ShortURL: surl });
                }
            }
            else {
                let errmsg = "This is not a valid URL";
                return res.status(500).send({
                    message: errmsg || "some error occured"
                });
            }
        }
        catch (err) {
            console.log(err);
            return res.sendStatus(500).send({
                message: err.message || "some error occured"
            });
        }
    })
};

function CreateNewShortURL(hosted) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i <= 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    //assume to be http unless you see that req.get('X-Forwarded-Protocol') is set and has the value
    var surl = "http://" + hosted + "/" + text
    client.connectDB(async (err) => {
        try {
            if (err) {
                console.log(err);
                return res.status(400).send({ success: false, err });
            }
            const db = await client.getDb()
            const findrec = await db.collection('urldata').find({ "ShortURL": surl }).toArray().then(result => {
                if (result.length > 0) {
                    CreateNewShortURL(hosted);
                    return;
                }
            });
        }
        catch (err) {
            console.log(err);
            return res.sendStatus(500).send({
                message: err.message || "some error occured"
            });
        }
    })
    return surl;
}

function isValidUrl(urlstring) {
    try {
        new URL(urlstring);
    } catch (e) {
        return false;
    }
    return true;
}

module.exports = { getAllURLs, AddURL, CreateNewShortURL, isValidUrl }