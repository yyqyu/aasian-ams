
var map = new ol.Map({
             control:[],
             layers: [
                       new ol.layer.Tile({
                               source: new ol.source.TileWMS({
                               url:'http://106.37.210.226:8093/geoserver/World/wms',
                               params: { 'LAYERS': 'World:world_tif', 'TILED': true }
                             })
                       })
             ],
             target: 'mapid',
             extend: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
             projection: new ol.proj.Projection('EPSG:3857'),
             view: new ol.View({
                 center: ol.proj.fromLonLat([115.25, 41.03], 'EPSG:3857'),
                 zoom: 4
             })
})