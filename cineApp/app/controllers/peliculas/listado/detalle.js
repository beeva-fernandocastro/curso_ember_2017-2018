import Ember from 'ember';
import moment from 'moment';

const { Controller, computed } = Ember;

export default Controller.extend({

  data: computed.alias('model'),

  allAudiences: computed.reads('data.allAudiences'),

  year: computed.reads('data.year'),

  peliculaApta: computed('allAudiences', function() {
    const allAudiences = this.get('allAudiences');

    return allAudiences ? 'Si' : 'No';
  }),

  antiguedad: computed('year', function() {
    const year = this.get('year');

    return moment([year, 0, 1]).toNow(true).replace('years', 'año(s)');
  }),

  actions: {
    volver() {
      this.transitionToRoute('peliculas.listado.index');
    }
  }
});
