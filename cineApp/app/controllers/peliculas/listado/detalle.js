import Ember from 'ember';

export default Ember.Controller.extend({
  data: Ember.computed.alias('model'),
  allAudiences: Ember.computed.reads('data.allAudiences'),
  peliculaApta: Ember.computed('allAudiences', function() {
    const allAudiences = this.get('allAudiences');

    return allAudiences ? 'Si' : 'No';
  }),

  actions: {
    volver() {
      this.transitionToRoute('peliculas.listado.index');
    }
  }
});
