angular.module('video-player')
  .service('youTube', function($http){
    this.getSearchResults = function(query, callback) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search?',
        params: {
          maxResults: '5',
          part: 'snippet',
          q: query,
          key: 'AIzaSyAJJSIjJEgWsO1rinOyO7OBwOeSaW2RqaE'
        }
      })
        .then( (params) => {
          callback(params.data.items);
        }),
      function() {
        console.log('failed');
      }; 
    };
  });
