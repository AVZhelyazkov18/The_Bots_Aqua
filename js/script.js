var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
<<<<<<< HEAD
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([25.5, 42.73]),
    zoom: 7.75,
    maxZoom: 18,
    minZoom: 7.75
  })
});

const strokeStyle = new ol.style.Stroke({
  color: [45, 45,45,1],
  width: 1.2
})

const circleStyle = new ol.style.Circle({
  fill: new ol.style.Fill({
    color: [40,40,240, 1]
  }),
  radius: 7,
  stroke: strokeStyle
  
})

const RiversGeoJSON = new ol.layer.VectorImage({
  source: new ol.source.Vector ({
    url: 'mapVector/map.geojson', 
    format: new ol.format.GeoJSON()
  }),

  visible: true,
  title: 'Rivers In Bulgaria',
  style: new ol.style.Style({
    image: circleStyle
  })
})

map.addLayer(RiversGeoJSON);

// Vector Feature popup Logic
map.on('click', function(e) {
  map.forEachFeatureAtPixel(e.pixel, function(feature, layer) {
    let.clickedCoordinate = e.coordinate;
    let.clickedFeatureName = feature.get('river-name');
    let.clickedFeatureId = feature.get('river-id');
    overlayLayer.setPosition(clickedCoordinate);
    overlayFeatureName.innerHTML = clickedFeatureName;
  })
})
=======
  });

  
>>>>>>> 1f1e637e95e7bf80b4decc58b62b4357abd5cb6d
