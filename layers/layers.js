var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_SanJoseHighways_1 = new ol.format.GeoJSON();
var features_SanJoseHighways_1 = format_SanJoseHighways_1.readFeatures(json_SanJoseHighways_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanJoseHighways_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanJoseHighways_1.addFeatures(features_SanJoseHighways_1);
var lyr_SanJoseHighways_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SanJoseHighways_1, 
                style: style_SanJoseHighways_1,
                popuplayertitle: 'San Jose Highways',
                interactive: true,
                title: '<img src="styles/legend/SanJoseHighways_1.png" /> San Jose Highways'
            });
var format_DBHUnknown_2 = new ol.format.GeoJSON();
var features_DBHUnknown_2 = format_DBHUnknown_2.readFeatures(json_DBHUnknown_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DBHUnknown_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DBHUnknown_2.addFeatures(features_DBHUnknown_2);
var lyr_DBHUnknown_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DBHUnknown_2,
maxResolution:7.00111653806549,
 
                style: style_DBHUnknown_2,
                popuplayertitle: 'DBH Unknown',
                interactive: true,
                title: '<img src="styles/legend/DBHUnknown_2.png" /> DBH Unknown'
            });
var format_DBH18Inches_3 = new ol.format.GeoJSON();
var features_DBH18Inches_3 = format_DBH18Inches_3.readFeatures(json_DBH18Inches_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DBH18Inches_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DBH18Inches_3.addFeatures(features_DBH18Inches_3);
var lyr_DBH18Inches_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DBH18Inches_3,
maxResolution:9.801563153291687,
 
                style: style_DBH18Inches_3,
                popuplayertitle: 'DBH >18 Inches',
                interactive: true,
                title: '<img src="styles/legend/DBH18Inches_3.png" /> DBH >18 Inches'
            });
var format_DBH6518inches_4 = new ol.format.GeoJSON();
var features_DBH6518inches_4 = format_DBH6518inches_4.readFeatures(json_DBH6518inches_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DBH6518inches_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DBH6518inches_4.addFeatures(features_DBH6518inches_4);
var lyr_DBH6518inches_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DBH6518inches_4,
maxResolution:9.801563153291687,
 
                style: style_DBH6518inches_4,
                popuplayertitle: 'DBH 6.5-18 inches',
                interactive: true,
                title: '<img src="styles/legend/DBH6518inches_4.png" /> DBH 6.5-18 inches'
            });
var format_DBH06inches_5 = new ol.format.GeoJSON();
var features_DBH06inches_5 = format_DBH06inches_5.readFeatures(json_DBH06inches_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DBH06inches_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DBH06inches_5.addFeatures(features_DBH06inches_5);
var lyr_DBH06inches_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DBH06inches_5,
maxResolution:9.801563153291687,
 
                style: style_DBH06inches_5,
                popuplayertitle: 'DBH 0-6 inches',
                interactive: true,
                title: '<img src="styles/legend/DBH06inches_5.png" /> DBH 0-6 inches'
            });

lyr_BaseMap_0.setVisible(true);lyr_SanJoseHighways_1.setVisible(true);lyr_DBHUnknown_2.setVisible(true);lyr_DBH18Inches_3.setVisible(true);lyr_DBH6518inches_4.setVisible(true);lyr_DBH06inches_5.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_SanJoseHighways_1,lyr_DBHUnknown_2,lyr_DBH18Inches_3,lyr_DBH6518inches_4,lyr_DBH06inches_5];
lyr_SanJoseHighways_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FULLNAME': 'FULLNAME', });
lyr_DBHUnknown_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMESCIENT': 'BOTANICAL_NAME', 'TRUNKDIAM': 'DBH', 'ADDRESSNUM': 'ADDRESS_NUMBER', 'STREETNAME': 'STREET_NAME', 'LASTUPDATE': 'LAST_UPDATE', });
lyr_DBH18Inches_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMESCIENT': 'BOTANICAL_NAME', 'TRUNKDIAM': 'DBH', 'ADDRESSNUM': 'ADDRESS_NUMBER', 'STREETNAME': 'STREET_NAME', 'LASTUPDATE': 'LAST_UPDATE', });
lyr_DBH6518inches_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMESCIENT': 'BOTANICAL_NAME', 'TRUNKDIAM': 'DBH', 'ADDRESSNUM': 'ADDRESS_NUMBER', 'STREETNAME': 'STREET_NAME', 'LASTUPDATE': 'LAST_UPDATE', });
lyr_DBH06inches_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMESCIENT': 'BOTANICAL_NAME', 'TRUNKDIAM': 'DBH', 'ADDRESSNUM': 'ADDRESS_NUMBER', 'STREETNAME': 'STREET_NAME', 'LASTUPDATE': 'LAST_UPDATE', });
lyr_SanJoseHighways_1.set('fieldImages', {'OBJECTID': 'Range', 'FULLNAME': 'TextEdit', });
lyr_DBHUnknown_2.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMESCIENT': 'TextEdit', 'TRUNKDIAM': 'TextEdit', 'ADDRESSNUM': 'TextEdit', 'STREETNAME': 'TextEdit', 'LASTUPDATE': 'DateTime', });
lyr_DBH18Inches_3.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMESCIENT': 'TextEdit', 'TRUNKDIAM': 'TextEdit', 'ADDRESSNUM': 'TextEdit', 'STREETNAME': 'TextEdit', 'LASTUPDATE': 'DateTime', });
lyr_DBH6518inches_4.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMESCIENT': 'TextEdit', 'TRUNKDIAM': 'TextEdit', 'ADDRESSNUM': 'TextEdit', 'STREETNAME': 'TextEdit', 'LASTUPDATE': 'DateTime', });
lyr_DBH06inches_5.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMESCIENT': 'TextEdit', 'TRUNKDIAM': 'TextEdit', 'ADDRESSNUM': 'TextEdit', 'STREETNAME': 'TextEdit', 'LASTUPDATE': 'DateTime', });
lyr_SanJoseHighways_1.set('fieldLabels', {'OBJECTID': 'no label', 'FULLNAME': 'no label', });
lyr_DBHUnknown_2.set('fieldLabels', {'NAMESCIENT': 'inline label - visible with data', 'TRUNKDIAM': 'inline label - visible with data', 'ADDRESSNUM': 'inline label - visible with data', 'STREETNAME': 'inline label - visible with data', 'LASTUPDATE': 'inline label - visible with data', });
lyr_DBH18Inches_3.set('fieldLabels', {'NAMESCIENT': 'inline label - visible with data', 'TRUNKDIAM': 'inline label - visible with data', 'ADDRESSNUM': 'inline label - visible with data', 'STREETNAME': 'inline label - visible with data', 'LASTUPDATE': 'inline label - visible with data', });
lyr_DBH6518inches_4.set('fieldLabels', {'NAMESCIENT': 'inline label - visible with data', 'TRUNKDIAM': 'inline label - visible with data', 'ADDRESSNUM': 'inline label - visible with data', 'STREETNAME': 'inline label - visible with data', 'LASTUPDATE': 'inline label - visible with data', });
lyr_DBH06inches_5.set('fieldLabels', {'NAMESCIENT': 'inline label - visible with data', 'TRUNKDIAM': 'inline label - visible with data', 'ADDRESSNUM': 'inline label - visible with data', 'STREETNAME': 'inline label - visible with data', 'LASTUPDATE': 'inline label - visible with data', });
lyr_DBH06inches_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});