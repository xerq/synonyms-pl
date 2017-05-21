var synonyms = require("../index.js");

var words = ["jestem", "tam", "człowiek"];

words.map(function(word) {
    describe("Get synonyms for word " + word, function() {
        it("Should not return empty array", function(done) {
            synonyms(word).then(function(synonyms) {
                done(synonyms.length > 0 ? null : "failed");
            }).catch(done);
        });
    });
});
