var Promise = require("promise");
var request = require("request");
var cheerio = require("cheerio");

module.exports = function(word) {
    return new Promise(function(resolve, reject) {
        request("http://en.bab.la/dictionary/polish-english/" + encodeURIComponent(word), function(err, resp, body) {
            if(err) {
                return reject(err);
            }

            var $ = cheerio.load(body);

            var synonyms = $("#synonyms ul.sense-group-results li a").map(function(index, element) {
                return $(element).text();
            }).toArray();

            resolve(synonyms);
        });
    });
};