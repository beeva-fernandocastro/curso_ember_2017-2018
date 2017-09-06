import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({

  actions: {
    volver() {
      this.transitionToRoute('peliculas.index');
    }
  }
});
