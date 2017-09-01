import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    guardar() {

      this.transitionToRoute('peliculas.alta.confirmacion');
    }
  }
});
