import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const model = this.controllerFor('peliculas.index').get('model');

    return model.map((pelicula, index) => {
      Ember.set(pelicula, 'id', index.toString());

      return pelicula;
    })
  }
});
