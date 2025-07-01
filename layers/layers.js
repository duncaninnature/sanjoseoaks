var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_DBHUnknown_1 = new ol.format.GeoJSON();
var features_DBHUnknown_1 = format_DBHUnknown_1.readFeatures(json_DBHUnknown_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DBHUnknown_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DBHUnknown_1.addFeatures(features_DBHUnknown_1);
var lyr_DBHUnknown_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DBHUnknown_1, 
                style: style_DBHUnknown_1,
                popuplayertitle: 'DBH Unknown',
                interactive: true,
                title: '<img src="styles/legend/DBHUnknown_1.png" /> DBH Unknown'
            });
var format_DBH18Inches_2 = new ol.format.GeoJSON();
var features_DBH18Inches_2 = format_DBH18Inches_2.readFeatures(json_DBH18Inches_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DBH18Inches_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DBH18Inches_2.addFeatures(features_DBH18Inches_2);
var lyr_DBH18Inches_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DBH18Inches_2, 
                style: style_DBH18Inches_2,
                popuplayertitle: 'DBH >18 Inches',
                interactive: true,
                title: '<img src="styles/legend/DBH18Inches_2.png" /> DBH >18 Inches'
            });
var format_DBH6518inches_3 = new ol.format.GeoJSON();
var features_DBH6518inches_3 = format_DBH6518inches_3.readFeatures(json_DBH6518inches_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DBH6518inches_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DBH6518inches_3.addFeatures(features_DBH6518inches_3);
var lyr_DBH6518inches_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DBH6518inches_3, 
                style: style_DBH6518inches_3,
                popuplayertitle: 'DBH 6.5-18 inches',
                interactive: true,
                title: '<img src="styles/legend/DBH6518inches_3.png" /> DBH 6.5-18 inches'
            });
var format_DBH06inches_4 = new ol.format.GeoJSON();
var features_DBH06inches_4 = format_DBH06inches_4.readFeatures(json_DBH06inches_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DBH06inches_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DBH06inches_4.addFeatures(features_DBH06inches_4);
var lyr_DBH06inches_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DBH06inches_4, 
                style: style_DBH06inches_4,
                popuplayertitle: 'DBH 0-6 inches',
                interactive: true,
                title: '<img src="styles/legend/DBH06inches_4.png" /> DBH 0-6 inches'
            });

lyr_Positron_0.setVisible(true);lyr_DBHUnknown_1.setVisible(true);lyr_DBH18Inches_2.setVisible(true);lyr_DBH6518inches_3.setVisible(true);lyr_DBH06inches_4.setVisible(true);
var layersList = [lyr_Positron_0,lyr_DBHUnknown_1,lyr_DBH18Inches_2,lyr_DBH6518inches_3,lyr_DBH06inches_4];
lyr_DBHUnknown_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMESCIENT': 'BOTANICAL_NAME', 'TRUNKDIAM': 'DBH', 'ADDRESSNUM': 'ADDRESS_NUMBER', 'STREETNAME': 'STREET_NAME', 'LASTUPDATE': 'LAST_UPDATE', });
lyr_DBH18Inches_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMESCIENT': 'BOTANICAL_NAME', 'TRUNKDIAM': 'DBH', 'ADDRESSNUM': 'ADDRESS_NUMBER', 'STREETNAME': 'STREET_NAME', 'LASTUPDATE': 'LAST_UPDATE', });
lyr_DBH6518inches_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMESCIENT': 'BOTANICAL_NAME', 'TRUNKDIAM': 'DBH', 'ADDRESSNUM': 'ADDRESS_NUMBER', 'STREETNAME': 'STREET_NAME', 'LASTUPDATE': 'LAST_UPDATE', });
lyr_DBH06inches_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMESCIENT': 'BOTANICAL_NAME', 'TRUNKDIAM': 'DBH', 'ADDRESSNUM': 'ADDRESS_NUMBER', 'STREETNAME': 'STREET_NAME', 'LASTUPDATE': 'LAST_UPDATE', });
lyr_DBHUnknown_1.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMESCIENT': 'TextEdit', 'TRUNKDIAM': 'TextEdit', 'ADDRESSNUM': 'TextEdit', 'STREETNAME': 'TextEdit', 'LASTUPDATE': 'DateTime', });
lyr_DBH18Inches_2.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMESCIENT': 'TextEdit', 'TRUNKDIAM': 'TextEdit', 'ADDRESSNUM': 'TextEdit', 'STREETNAME': 'TextEdit', 'LASTUPDATE': 'DateTime', });
lyr_DBH6518inches_3.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMESCIENT': 'TextEdit', 'TRUNKDIAM': 'TextEdit', 'ADDRESSNUM': 'TextEdit', 'STREETNAME': 'TextEdit', 'LASTUPDATE': 'DateTime', });
lyr_DBH06inches_4.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMESCIENT': 'TextEdit', 'TRUNKDIAM': 'TextEdit', 'ADDRESSNUM': 'TextEdit', 'STREETNAME': 'TextEdit', 'LASTUPDATE': 'DateTime', });
lyr_DBHUnknown_1.set('fieldLabels', {'NAMESCIENT': 'inline label - visible with data', 'TRUNKDIAM': 'inline label - visible with data', 'ADDRESSNUM': 'inline label - visible with data', 'STREETNAME': 'inline label - visible with data', 'LASTUPDATE': 'inline label - visible with data', });
lyr_DBH18Inches_2.set('fieldLabels', {'NAMESCIENT': 'inline label - visible with data', 'TRUNKDIAM': 'inline label - visible with data', 'ADDRESSNUM': 'inline label - visible with data', 'STREETNAME': 'inline label - visible with data', 'LASTUPDATE': 'inline label - visible with data', });
lyr_DBH6518inches_3.set('fieldLabels', {'NAMESCIENT': 'inline label - visible with data', 'TRUNKDIAM': 'inline label - visible with data', 'ADDRESSNUM': 'inline label - visible with data', 'STREETNAME': 'inline label - visible with data', 'LASTUPDATE': 'inline label - visible with data', });
lyr_DBH06inches_4.set('fieldLabels', {'NAMESCIENT': 'inline label - visible with data', 'TRUNKDIAM': 'inline label - visible with data', 'ADDRESSNUM': 'inline label - visible with data', 'STREETNAME': 'inline label - visible with data', 'LASTUPDATE': 'inline label - visible with data', });
lyr_DBH06inches_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});