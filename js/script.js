var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([26.14, 42.73]),
      zoom: 7.75,
      maxZoom: 18,
      minZoom: 7.75
    })
  });