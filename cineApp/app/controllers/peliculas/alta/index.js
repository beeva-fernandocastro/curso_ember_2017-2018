import Ember from 'ember';

export default Ember.Controller.extend({
  generos: ["Accion", "Ciencia ficcion", "Terror"],

  actions: {
    guardar() {
      this.store.createRecord('pelicula', this.get('model'));
      this.transitionToRoute('peliculas.alta.confirmacion');
    },
    volver() {
      this.transitionToRoute('peliculas.index');
    }
  }
});
