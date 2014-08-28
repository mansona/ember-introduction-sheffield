import Ember from 'ember';

var Router = Ember.Router.extend({
  location: DemoENV.locationType
});

Router.map(function() {
    this.resource('posts');
    this.resource('post', { path: '/post/:post_id' }, function() {
    this.route('edit');
    this.resource('comments', function() {
       this.route('new');
    });
  });
});

export default Router;
