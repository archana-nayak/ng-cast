angular.module('video-player')
  
  .component('app', {
    // TODO
    controller: function() {
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];
      // this.onClick = this.handleVideoItemClick;
      
      //click handler for video list item
      this.handleClick = (value) => {
        // console.log('in app ', value);
        // console.log('in app2', this.onClick);
        this.currentVideo = this.videos[value];
      };
    },
    templateUrl: 'src/templates/app.html', 

  });
