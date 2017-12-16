angular.module('video-player')
  .component('videoList', {
    // TODO
    bindings: {
      videos: '<',
      handleClick: '<'
    },
    controller: function() {
      // this.videos = $scope.videos;
      
      // console.log('In videoList ', this);
      
      
    },
    
    templateUrl: 'src/templates/videoList.html',
    
  });
