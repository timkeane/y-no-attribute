import olms from 'ol-mapbox-style';
import View from 'ol/View.js';

let layer;

const click = event => {
  layer.getFeatures(event.pixel).then(features => {
    features.forEach(feature => {
      console.warn(feature.getProperties());
    });
  }).catch(err => {/* ignore */});
};

olms(
  'map',
  'https://www.arcgis.com/sharing/rest/content/items/2ee3ac7f481548c88d53ea50268525e7/resources/styles/root.json?f=json'
).then(map => {
  const view = map.getView();
  // view.setCenter([-8235252, 4969073]);
  // view.setZoom(12);
  view.setCenter([-8233354.868776077, 4950260.91548914]);
  view.setZoom(18);
  layer = map.getLayers().getArray()[0];
  map.on('click', click);
});
