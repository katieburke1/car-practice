import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  car: DS.belongsTo('car'),
  items: DS.hasMany('item')
});
