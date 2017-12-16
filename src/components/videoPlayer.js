angular.module('video-player')

  .component('videoPlayer', {
    // TODO
    bindings: {
      video: '<'
    },
    
    controller: function() {
      
      // console.log('in video Player ', this);
      this.url = function() {
        return `https://www.youtube.com/embed/${this.video.id.videoId}`;
      };
      
      // this.videoUrl = 
      // videoUrl = "https://www.youtube.com/embed/" ;
    },
    // 
    templateUrl: 'src/templates/videoPlayer.html',
  });
