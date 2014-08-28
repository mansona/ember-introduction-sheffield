import Ember from 'ember';

export
default Ember.Route.extend({
    model: function() {
        return [{
            "status": "upcoming",
            "visibility": "public",
            "maybe_rsvp_count": 0,
            "venue": {
                "id": 21813072,
                "lon": -1.470783,
                "repinned": false,
                "name": "Union St. Co-working space",
                "address_1": "18-20 Union Street, Sheffield, S1 2JP",
                "lat": 53.378372,
                "country": "gb",
                "city": "Sheffield"
            },
            "id": "201099832",
            "utc_offset": 3600000,
            "duration": 7200000,
            "time": 1409247000000,
            "waitlist_count": 0,
            "updated": 1408098507000,
            "yes_rsvp_count": 18,
            "created": 1408098507000,
            "event_url": "http://www.meetup.com/Sheffield-js/events/201099832/",
            "description": "<p>This month we have a change of venue, around ~10mins walk from the train station. We're going to be helping the new Union St. Co-working space test out their event space, so come have a nosey!</p> <p><br/>Talks:</p> <p><br/>• \"An introduction to EmberJS\" -  Chris Manson (<a href=\"http://twitter.com/real_ate\">@real_ate</a>), from bloo.ie</p> <p><br/>Introducing some of the core concepts of EmberJS while discussing some of the advances in the Ember build tool ember-cli. Along with some live coding there will be some examples of what the future holds for ember developers.</p> <p>• \"How to React Appropriately\" - Glen Mailer (<a href=\"http://twitter.com/glenathan\">@glenathan</a>)</p> <p>An intro to the thinking behind Facebook's React JavaScript library, which presents a fresh take on how to effectively build rich user interfaces. We'll take a look at how the library works, how it fits into a frontend web stack, and what makes it worth using.</p> <p><br/>As usual, we'll be heading to the pub afterwards :)</p>",
            "how_to_find_us": "Opposite First Point, it's a new co-working space so may not be on google maps yet",
            "name": "Talk night #8",
            "headcount": 0,
            "group": {
                "id": 9128092,
                "group_lat": 53.380001068115234,
                "name": "Sheffield.js",
                "group_lon": -1.5099999904632568,
                "join_mode": "open",
                "urlname": "Sheffield-js",
                "who": "ECMAScript Enthusiasts"
            }
        }];
    }
});
