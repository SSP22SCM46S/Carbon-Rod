<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCTBe4DTrCcXr7UmBdP6i-IY14C3qRCnq4&callback=initialize_map">
</script>

var markerlocations = [
    [18.906438, 72.814472, 'Unit 1', 'images/rtrash.svg'],
    [18.906999, 72.816812, 'Unit 2', 'images/gtrash.svg'],
    [18.906974, 72.812549, 'Unit 3', 'images/rtrash.svg'],
    [18.904831, 72.815814, 'Unit 4', 'images/gtrash.svg'],
    [18.906944, 72.812568, 'Unit 5', 'images/rtrash.svg'],
    [18.908398, 72.812402, 'Unit 6', 'images/gtrash.svg'],
    [18.909573, 72.817241, 'Unit 7', 'images/rtrash.svg'],
    [18.910541, 72.820340, 'Unit 8', 'images/gtrash.svg'],
    [18.908372, 72.812453, 'Unit 9', 'images/rtrash.svg'],
    [18.909002, 72.811915, 'Unit 10', 'images/gtrash.svg'],
    [18.910176, 72.810239, 'Unit 11', 'images/rtrash.svg'],
    [18.907456, 72.809917, 'Unit 12', 'images/gtrash.svg'],
    [18.907476, 72.808061, 'Unit 13', 'images/rtrash.svg'],
    [18.905365, 72.807106, 'Unit 14', 'images/gtrash.svg'],
    [18.906289, 72.806677, 'Unit 15', 'images/rtrash.svg'],
    [18.907496, 72.808040, 'Unit 16', 'images/gtrash.svg'],
    [18.904949, 72.805315, 'Unit 17', 'images/rtrash.svg'],
    [18.896046, 72.813554, 'Unit 18', 'images/gtrash.svg'],
    [18.902188, 72.807450, 'Unit 19', 'images/rtrash.svg'],
    [18.900339, 72.811314, 'Unit 20', 'images/gtrash.svg'],
];
var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 18.903, lng: 72.811 },
    zoom: 15
    mapTypeId: google.maps.mapTypeId.ROADMAP
});

    
    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < markerlocations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(markerlocations[i][0], markerlocations[i][1]),
            map: map,
            icon: markerlocations[i][3]
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][2]);
                infowindow.open(map, marker);
            }
        })(marker, i));

    }
