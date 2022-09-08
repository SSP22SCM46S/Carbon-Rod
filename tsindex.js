const lblue = {
    unit14: {
        center: { lat: 18.905365, lng: 72.807106 },
        population: 2,
    },
    unit19: {
        center: { lat: 18.902188, lng: 72.807450 },
        population: 1,
    },
    unit20: {
        center: { lat: 18.900339, lng: 72.811314 },
        population: 2.5,
    },
    unit11: {
        center: { lat: 18.910176, lng: 72.810239 },
    population: 2,
},
};

const mblue = {
    unit18: {
        center: { lat: 18.896046, lng: 72.813554 },
        population: 1,
    },
    unit12: {
        center: { lat: 18.907456, lng: 72.809917 },
        population: 1,
    },
    unit4: {
        center: { lat: 18.904831, lng: 72.815814 },
        population: 2,
    },
    unit8: {
        center: { lat: 18.910541, lng: 72.820340 },
        population: 2,
    },
    unit13: {
        center: { lat: 18.903778, lng: 72.809607 },
        population: 2,
    },
};

const dblue = {
    unit9: {
        center: { lat: 18.894718, lng: 72.809182 },
        population: 2,
    },
    unit7: {
        center: { lat: 18.909573, lng: 72.817241 },
        population: 1.5,
    },
    unit5: {
        center: { lat: 18.906944, lng: 72.812568 },
        population: 1,
    },
    unit16: {
        center: { lat: 18.907496, lng: 72.808040 },
        population: 2,
    },
};



function initMap() {
    // Create the map.
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: { lat: 18.904686, lng: 72.810407 },
        mapTypeId: "roadmap",

    });


    for (const city in lblue) {
        // Light blue
        const cityCircle = new google.maps.Circle({
            strokeColor: "#63EAFF",
            strokeOpacity: 1,
            // circle outline thickness
            strokeWeight: 2,
            fillColor: "#63EAFF",
            // circle fill opacity
            fillOpacity: 0.6,
            map,
            center: lblue[city].center,
            radius: Math.sqrt(lblue[city].population) * 100,
        });
    }

    for (const city in mblue) {
        // Medium blue
        const cityCircle = new google.maps.Circle({
            strokeColor: "#14A3E0",
            strokeOpacity: 1,
            strokeWeight: 2,
            fillColor: "#14A3E0",
            fillOpacity: 0.6,
            map,
            center: mblue[city].center,
            radius: Math.sqrt(mblue[city].population) * 100,
        });
    }

    for (const city in dblue) {
        // Dark blue
        const cityCircle = new google.maps.Circle({
            strokeColor: "#0C5EB0",
            strokeOpacity: 1,
            strokeWeight: 2,
            fillColor: "#0C5EB0",
            fillOpacity: 0.6,
            map,
            center: dblue[city].center,
            radius: Math.sqrt(dblue[city].population) * 100,
        });
    }

}