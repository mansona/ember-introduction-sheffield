var request = require('request');


module.exports = function(app){
    app.get("/api/posts", function(req, res) {

        request.get({
            url: "https://api.meetup.com/2/events?&sign=true&photo-host=public&group_id=9128092&key=2f49622286060fb3f5d105f96f39",
            json:true}, function (e, r, json) {
          res.json(json.results);
      });
    });

    app.get("/api/post/:id", function(req, res) {

        request.get({
            url: "https://api.meetup.com/2/event_comments?&sign=true&photo-host=public&event_id=" + req.params.id + "&key=2f49622286060fb3f5d105f96f39",
            json:true}, function (e, r, json) {

          res.json(json.results);
      });
    });
};
