import 'https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.js';

const coordinates = [
    [
        13.404954,
        13.404954
    ]
];

mapboxgl.accessToken = "pk.eyJ1IjoiaWxpeWFzbzc3IiwiYSI6ImNsYWxhaG01YjAzbnY0MXRhbTdsMDlkbTkifQ.KRCQOPjEkNduPODxAEnhtQ";
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-122.486052, 37.830348],
zoom: 15
});

map.on('load', () => {
    map.addSource('route', {
    'type': 'geojson',
    'data': {
    'type': 'Feature',
    'properties': {},
    'geometry': {
    'type': 'LineString',
    'coordinates': [
    [-122.483696, 37.833818],
    [-122.483482, 37.833174],
    [-122.483396, 37.8327],
    [-122.483568, 37.832056],
    [-122.48404, 37.831141],
    [-122.48404, 37.830497],
    [-122.483482, 37.82992],
    [-122.483568, 37.829548],
    [-122.48507, 37.829446],
    [-122.4861, 37.828802],
    [-122.486958, 37.82931],
    [-122.487001, 37.830802],
    [-122.487516, 37.831683],
    [-122.488031, 37.832158],
    [-122.488889, 37.832971],
    [-122.489876, 37.832632],
    [-122.490434, 37.832937],
    [-122.49125, 37.832429],
    [-122.491636, 37.832564],
    [-122.492237, 37.833378],
    [-122.493782, 37.833683]
    ]
    }
    }
    });
    map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'route',
    'layout': {
    'line-join': 'round',
    'line-cap': 'round'
    },
    'paint': {
    'line-color': '#888',
    'line-width': 8
    }
    });
    });



