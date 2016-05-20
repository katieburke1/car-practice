import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('car');
    return this.store.findAll('part');
  }
});
