import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  director: DS.attr('string'),
  allAudiences: DS.attr('boolean'),
  year: DS.attr('number'),
  genre: DS.attr('string'),
  url: DS.attr('string'),
  description: DS.attr('string')
});
