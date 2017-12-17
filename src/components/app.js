angular.module('video-player')
  
  .component('app', {
    // TODO
    controller: function(youTube) {
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];
      this.callBack = (results) => {
        this.videos = results;
        console.log('in app results', results);
        this.currentVideo = this.videos[0];
      };

      this.searchClick = (value) => {
        youTube.getSearchResults(value, this.callBack);
      };
      this.handleClick = (value) => {

        this.currentVideo = this.videos[value];
      };
      
      
    },
    templateUrl: 'src/templates/app.html', 

  });
