angular.module('video-player')
  .component('videoListEntry', {
  // TODO
    bindings: {
      video: '<',
      clickHandler: '<'
    },
    controller: function() {
      // console.log('in videoListEntry ', this);
    },
    
    templateUrl: 'src/templates/videoListEntry.html', 
  
   
  
  });
 