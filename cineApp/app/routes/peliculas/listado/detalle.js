import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    const model = this.modelFor('peliculas.listado.index');

    if(model) {
        return model.filterBy('id', params.id)[0];
    }

    return [];
  },

  afterModel(model) {
    if (model.length === 0) {
      this.transitionTo('peliculas.listado.index');
    }
  }
});
