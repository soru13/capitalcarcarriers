var ajax=(function($){
    function started(){ 
    	
    	$('#mapa').on('shown.bs.modal', function (e) {
		  // do something...
		  	var lat = 45.163779;                     
	        var lng = -75.756359;  
	        var position = new google.maps.LatLng(lat,lng);
	        $('#map_canvas').gmap({ 'center': new google.maps.LatLng(lat, lng), 'zoom': 13});
	        $('#map_canvas').gmap('addMarker', {'position': position}).click(function(){
	                 $('#map_canvas').gmap('openInfoWindow', {'content': 'Hello World! here is capital car carriers'}, this);
	                 $('#map_canvas').gmap('getMap').panTo(position);
	        });      
		});
       
    }
         


  return{
    inicio:started,
  }
              
})(jQuery);

(function() {
    $(document).on('ready',ajax.inicio);
}).call(this);