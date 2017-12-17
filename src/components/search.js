angular.module('video-player')

  .component('search', {
    bindings: {
      searchClick:'<',
      ngClick:'<',
      query: '<'
    },
    controller: function() {
      console.log('in search ', this);  
      
    },

    templateUrl: 'src/templates/search.html'
  });
