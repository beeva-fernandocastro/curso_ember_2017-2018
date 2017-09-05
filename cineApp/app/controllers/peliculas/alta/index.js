import Ember from 'ember';

export default Ember.Controller.extend({
  generos: ["Accion", "Ciencia ficcion", "Terror"],
  peliculasController: Ember.inject.controller('peliculas.index'),

  actions: {
    guardar() {
      this.get('peliculasController').get('model').push(this.get('model'));
      this.transitionToRoute('peliculas.alta.confirmacion');
    },
    volver() {
      this.transitionToRoute('peliculas.index');
    }
  }
});
