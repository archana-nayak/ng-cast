angular.module('video-player')
  .component('videoListEntry', {
  // TODO
    bindings: {
      index: '<',
      video: '<',
      handleClick: '<'
    },
    controller: function() {
      // console.log('in videoListEntry ', this);
      // debugger;
    },
    
    
    templateUrl: 'src/templates/videoListEntry.html', 
  
   
  
  })

  .filter('escape', () => {
    return window.encodeURIComponent;
  });

 