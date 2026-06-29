var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': 'Карта',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png'
            })
        });
var format_a = new ol.format.GeoJSON();
var features_a = format_a.readFeatures(json_a, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_a = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_a.addFeatures(features_a);
var lyr_a = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_a, 
                style: style_a,
                popuplayertitle: 'Граница г. Александров',
                interactive: false,
                title: '<img src="styles/legend/a.png" /> Граница г. Александров'
            });
var format_b = new ol.format.GeoJSON();
var features_b = format_b.readFeatures(json_b, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_b = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_b.addFeatures(features_b);
var lyr_b = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_b, 
                style: style_b,
                popuplayertitle: 'Автобусные маршруты',
                interactive: true,
    title: 'Автобусные маршруты<br />\
    <img src="styles/legend/b_0.png" /> 4<br />\
    <img src="styles/legend/b_1.png" /> 5<br />' });
var format_c = new ol.format.GeoJSON();
var features_c = format_c.readFeatures(json_c, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c.addFeatures(features_c);
var lyr_c = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_c, 
                style: style_c,
                popuplayertitle: 'Автобусная остановка',
                interactive: false,
                title: '<img src="styles/legend/c.png" /> Автобусная остановка'
            });
var format_d = new ol.format.GeoJSON();
var features_d = format_d.readFeatures(json_d, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_d = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_d.addFeatures(features_d);
var lyr_d = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_d, 
                style: style_d,
                interactive: true,
    title: 'Условные знаки<br />\
    <img src="styles/legend/d_0.png" /> Религиозное здание<br />\
    <img src="styles/legend/d_1.png" /> Историческое здание<br />\
    <img src="styles/legend/d_2.png" /> Памятник<br />\
    <img src="styles/legend/d_3.png" /> Музей<br />\
    <img src="styles/legend/d_4.png" /> Парк<br />\
    <img src="styles/legend/d_5.png" /> Вокзал<br />' });

lyr__0.setVisible(true);lyr_a.setVisible(true);lyr_b.setVisible(true);lyr_c.setVisible(true);lyr_d.setVisible(true);
var layersList = [lyr__0,lyr_a,lyr_b,lyr_c,lyr_d];
lyr_a.set('fieldAliases', {'id': 'id', '@id': '@id', '@relations': '@relations', 'addr:country': 'addr:country', 'addr:district': 'addr:district', 'addr:postcode': 'addr:postcode', 'addr:region': 'addr:region', 'crossing': 'crossing', 'highway': 'highway', 'name': 'name', 'name:de': 'name:de', 'name:en': 'name:en', 'name:eo': 'name:eo', 'name:hr': 'name:hr', 'name:ru': 'name:ru', 'place': 'place', 'type': 'type', });
lyr_b.set('fieldAliases', {'fid': 'fid', 'маршрут': 'маршрут', });
lyr_c.set('fieldAliases', {'fid': 'fid', });
lyr_d.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'type': 'type', 'description': 'description', 'photo': 'photo', 'popup': 'popup', 'address': 'address', 'photo2': 'photo2', });
lyr_a.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', '@relations': 'KeyValue', 'addr:country': 'TextEdit', 'addr:district': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:region': 'TextEdit', 'crossing': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'name:de': 'TextEdit', 'name:en': 'TextEdit', 'name:eo': 'TextEdit', 'name:hr': 'TextEdit', 'name:ru': 'TextEdit', 'place': 'TextEdit', 'type': 'TextEdit', });
lyr_b.set('fieldImages', {'fid': 'TextEdit', 'маршрут': 'Range', });
lyr_c.set('fieldImages', {'fid': 'TextEdit', });
lyr_d.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'description': 'TextEdit', 'photo': 'TextEdit', 'popup': 'TextEdit', 'address': 'TextEdit', 'photo2': 'TextEdit', });
lyr_a.set('fieldLabels', {'id': 'no label', '@id': 'no label', '@relations': 'no label', 'addr:country': 'no label', 'addr:district': 'no label', 'addr:postcode': 'no label', 'addr:region': 'no label', 'crossing': 'no label', 'highway': 'no label', 'name': 'no label', 'name:de': 'no label', 'name:en': 'no label', 'name:eo': 'no label', 'name:hr': 'no label', 'name:ru': 'no label', 'place': 'no label', 'type': 'no label', });
lyr_b.set('fieldLabels', {'fid': 'hidden field', 'маршрут': 'no label', });
lyr_c.set('fieldLabels', {'fid': 'no label', });
lyr_d.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'type': 'hidden field', 'description': 'hidden field', 'photo': 'hidden field', 'popup': 'no label', 'address': 'hidden field', 'photo2': 'hidden field', });
lyr_d.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});