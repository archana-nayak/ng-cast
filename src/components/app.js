angular.module('video-player')
  
  .component('app', {
    // TODO
    controller: function() {
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];
      // console.log("In app", this);
      // console.log("videos ",this);
    },
    templateUrl: 'src/templates/app.html', 

  });
