var express = require('express');
var app = express();
//----------------------catch data tool
const sp = require('superagent');
const cheerio = require('cheerio');
//--------------------------------------mongo db
const { MongoClient } = require('mongodb');
const url = "mongodb+srv://tung:29448953@cluster0.lfzgt.mongodb.net/test";
//---------------------------------------------
//-------------------------------Restful API
app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});

app.listen(8888, () => {
    console.log(`Hello world app listening on port 8888!`);

    //   MongoClient.connect(url, function(err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("Rest");
    //     var myobj = { name: "Company Inc", address: "Highway 37" };
    //     dbo.collection("Rest").insertOne(myobj, function(err, res) {
    //       if (err) throw err;
    //       console.log("1 document inserted");
    //       db.close();
    //     });
    //   });
});

// data link1:https://www.openrice.com/zh/hongkong/restaurants?where=%E9%95%B7%E6%B2%99%E7%81%A3
// data link2:https://www.openrice.com/zh/hongkong/restaurants?where=%E8%8D%94%E6%9E%9D%E8%A7%92

function catch_data() {
    const BASE_URL = "https://www.openrice.com/zh/hongkong/restaurants?where=%E9%95%B7%E6%B2%99%E7%81%A3";

    async () => {
        let html = await sp.get(BASE_URL);
        let $ = cheerio.load(html.text);
        let RestList = [];
        $('#or-route-poi-list-main ul li').each(function () {

        });
    }
}