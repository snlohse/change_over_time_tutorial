mapboxgl.accessToken = 'pk.eyJ1IjoibG9oc2VzIiwiYSI6ImNtNnY0Ymt2aDA0cHkya3B5ZjZiMDFhbHUifQ.PbnaeqC0tz5auhy5sqjA5w';

const map = new mapboxgl.Map({
  container: 'map', // container element id
  style: 'mapbox://styles/mapbox/light-v11',
  center: [-74.0059, 40.7128], // initial map center in [lon, lat]
  zoom: 12
});
map.on('load', () => {
  map.addLayer({
    id: 'collisions',
    type: 'circle',
    source: {
      type: 'geojson',
      data: 'https://github.com/snlohse/change_over_time_tutorial/blob/main/data/collisions1601.geojson' // replace this with the url of your own geojson
    },
    paint: {
      'circle-radius': [
        'interpolate',
        ['linear'],
        ['number', ['get', 'Casualty']],
        0,
        4,
        5,
        24
      ],
      'circle-color': [
        'interpolate',
        ['linear'],
        ['number', ['get', 'Casualty']],
        0,
        '#2DC4B2',
        1,
        '#3BB3C3',
        2,
        '#669EC4',
        3,
        '#8B88B6',
        4,
        '#A2719B',
        5,
        '#AA5E79'
      ],
      'circle-opacity': 0.8
    }
  });
});