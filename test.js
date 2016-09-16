var _ = require('underscore');
var request = require("request")
var url = "http://agl-developer-test.azurewebsites.net/people.json"

/* Consumption of RESTFul API */
request({
    url: url,
    json: true
}, function (error, response, body) {
    /* For grouping/sorting based on Gender */
    var groupedLists = _.groupBy(response.body, function (obj) { if ("Male" == obj.gender) return "Male"; else return "Female"; });
    var g1Cats = _.sortBy(groupedLists.Male, function (obj) {
        return obj.name;
    }
    );
    var g2Cats = _.sortBy(groupedLists.Female, function (obj) { return obj.name; });
    console.log("Male");
    console.log("----------------------------");
    g1Cats.forEach(function (element) {
        console.log(element.name);
    }, this);

    console.log("     ");
    console.log("Female");
    console.log("----------------------------");
    g2Cats.forEach(function (element) {
        console.log(element.name);
    }, this);
})


