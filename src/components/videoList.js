angular.module('video-player')
  .component('videoList', {
    // TODO
    bindings: {
      videos: '<',
      onClick: '<'
    },
    controller: function() {
      // this.videos = $scope.videos;
      
      // console.log('In videoList ', this);
      
      
    },
    
    templateUrl: 'src/templates/videoList.html',
    
  });
