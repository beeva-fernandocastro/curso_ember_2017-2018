import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        title: 'Terminator',
        director: 'James Cameron',
        genre: 'Ciencia ficción',
        year: '1989',
        allAudiences: false,
        description: 'adasdsasdsadadsada',
        url: 'https://i.pinimg.com/736x/3a/12/b8/3a12b83dc9261efdaf9e2d85aa20282e.jpg'
      },
      {
        title: 'Titanic',
        director: 'James Cameron',
        genre: 'Acción',
        year: '2001',
        allAudiences: true,
        description: 'werwerewrewrwrwrer',
        url: 'http://www.fotogramas.es/var/ezflow_site/storage/images/cinefilia/titanic-y-otras-catorce-peliculas-que-cumplen-20-anos/127659013-1-esl-ES/Titanic-y-otras-catorce-peliculas-que-cumplen-20-anos_reference.jpg'
      }
    ]
  }
});
