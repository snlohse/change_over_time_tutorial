mapboxgl.accessToken = 'pk.eyJ1IjoibG9oc2VzIiwiYSI6ImNtNnY0Ymt2aDA0cHkya3B5ZjZiMDFhbHUifQ.PbnaeqC0tz5auhy5sqjA5w';

const map = new mapboxgl.Map({
  container: 'map', // container element id
  style: 'mapbox://styles/mapbox/light-v11',
  center: [-74.0059, 40.7128], // initial map center in [lon, lat]
  zoom: 12
});