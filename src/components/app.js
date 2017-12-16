angular.module('video-player')
  
  .component('app', {
    // TODO
    controller: function() {
      this.videos = exampleVideoData;
      console.log("In app", this);
      // console.log("videos ",exampleVideoData);
    },
    templateUrl: 'src/templates/app.html', 

  });
