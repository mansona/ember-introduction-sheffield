import DS from 'ember-data';

var Post = DS.Model.extend({});

Post.reopenClass({
    FIXTURES: [
        {id: 1}
    ]
});

export default Post;
