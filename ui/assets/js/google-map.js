(function($) {
    "use strict";
    
    
    $(document).ready(function(){        
        
        /*----------------------------------------------------*/
        /*  Google Map
        /*----------------------------------------------------*/        
        var map = new GMaps({
            el: '#mapBox',
            lat: 51.5338299,
            lng: -0.0570841,
            scrollwheel: false
        });
        map.addMarker({
            lat: 51.5338299,
            lng: -0.0570841,
            title: 'Lima',
            icon: 'images/contact/map-marker.png',
            infoWindow: {
                content: 'HOSTPRESS'
            }
        })
        
        
    })
    
})(jQuery)