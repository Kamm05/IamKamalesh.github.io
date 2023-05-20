function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 10.675240, lng: 76.999970};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Vadugapalayam , Pollachi' // Title Location
    });
}