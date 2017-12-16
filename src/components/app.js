angular.module('video-player')
  
  .component('app', {
    // TODO
    controller: function() {
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];
      
      //click handler for video list item
      this.handleVideoItemClick = (value) => {
        this.currentVideo = value;
      };
    },
    templateUrl: 'src/templates/app.html', 

  });
