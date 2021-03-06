import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      // comments: this.store.findAll('comment')
    });
  },
  actions: {

    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
      return this.disconnectOutlet({
        outlet: 'my-modal',
        parentView: 'index'
      });
    },
    closeModal: function() {
       return this.disconnectOutlet({
         outlet: 'my-modal',
         parentView: 'index'
       });
     },
     searchPrompt() {
       alert("Jason sucks donkey dong");
     },
    openModal: function(modalName) {
      return this.render(modalName, {
        into: 'index',
        outlet: 'my-modal'
      });
    }
  }
});
