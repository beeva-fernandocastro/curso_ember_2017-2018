import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    volver() {
      this.transitionToRoute('peliculas.index');
    }
  }
});
