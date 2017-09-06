import Ember from 'ember';

const { Route, set } = Ember;

export default Route.extend({

  model() {
    const model = this.controllerFor('peliculas.index').get('model');

    if (model) {
      return model.map((pelicula, index) => {
        set(pelicula, 'id', index.toString());

        return pelicula;
      })
    }

    return [];
  }
});
