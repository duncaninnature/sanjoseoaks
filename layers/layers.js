var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Streets_1 = new ol.format.GeoJSON();
var features_Streets_1 = format_Streets_1.readFeatures(json_Streets_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streets_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streets_1.addFeatures(features_Streets_1);
var lyr_Streets_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streets_1, 
                style: style_Streets_1,
                popuplayertitle: 'Streets',
                interactive: true,
                title: '<img src="styles/legend/Streets_1.png" /> Streets'
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
                style: style_DBH06inches_5,
                popuplayertitle: 'DBH 0-6 inches',
                interactive: true,
                title: '<img src="styles/legend/DBH06inches_5.png" /> DBH 0-6 inches'
            });

lyr_Positron_0.setVisible(true);lyr_Streets_1.setVisible(true);lyr_DBHUnknown_2.setVisible(true);lyr_DBH18Inches_3.setVisible(true);lyr_DBH6518inches_4.setVisible(true);lyr_DBH06inches_5.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Streets_1,lyr_DBHUnknown_2,lyr_DBH18Inches_3,lyr_DBH6518inches_4,lyr_DBH06inches_5];
lyr_Streets_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FACILITYID': 'FACILITYID', 'INTID': 'INTID', 'STREETMAST': 'STREETMAST', 'FROMINTERI': 'FROMINTERI', 'TOINTERID': 'TOINTERID', 'FROMLEFT': 'FROMLEFT', 'TOLEFT': 'TOLEFT', 'FROMRIGHT': 'FROMRIGHT', 'TORIGHT': 'TORIGHT', 'ADDRNUMTYP': 'ADDRNUMTYP', 'FULLNAME': 'FULLNAME', 'ONEWAYDIR': 'ONEWAYDIR', 'MODELFLAG': 'MODELFLAG', 'STREETCLAS': 'STREETCLAS', 'FUNCTCLASS': 'FUNCTCLASS', 'SPEEDLIMIT': 'SPEEDLIMIT', 'PRIVATE': 'PRIVATE', 'OFFICIAL': 'OFFICIAL', 'MUNILEFT': 'MUNILEFT', 'MUNIRIGHT': 'MUNIRIGHT', 'ZIPLEFT': 'ZIPLEFT', 'ZIPRIGHT': 'ZIPRIGHT', 'FOCWIDTH': 'FOCWIDTH', 'ROWWIDTH': 'ROWWIDTH', 'FEATURECLA': 'FEATURECLA', 'PLANCRT': 'PLANCRT', 'PLANMOD': 'PLANMOD', 'LASTUPDATE': 'LASTUPDATE', 'NOTES': 'NOTES', 'Shape_Leng': 'Shape_Leng', 'INCORPORAT': 'INCORPORAT', 'RSN': 'RSN', 'PARCELID': 'PARCELID', 'ESNLEFT': 'ESNLEFT', 'ESNRIGHT': 'ESNRIGHT', 'FHWAFUNCTC': 'FHWAFUNCTC', 'CREATIONDA': 'CREATIONDA', 'RESPONSIBI': 'RESPONSIBI', });
lyr_DBHUnknown_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMESCIENT': 'BOTANICAL_NAME', 'TRUNKDIAM': 'DBH', 'ADDRESSNUM': 'ADDRESS_NUMBER', 'STREETNAME': 'STREET_NAME', 'LASTUPDATE': 'LAST_UPDATE', });
lyr_DBH18Inches_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMESCIENT': 'BOTANICAL_NAME', 'TRUNKDIAM': 'DBH', 'ADDRESSNUM': 'ADDRESS_NUMBER', 'STREETNAME': 'STREET_NAME', 'LASTUPDATE': 'LAST_UPDATE', });
lyr_DBH6518inches_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMESCIENT': 'BOTANICAL_NAME', 'TRUNKDIAM': 'DBH', 'ADDRESSNUM': 'ADDRESS_NUMBER', 'STREETNAME': 'STREET_NAME', 'LASTUPDATE': 'LAST_UPDATE', });
lyr_DBH06inches_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMESCIENT': 'BOTANICAL_NAME', 'TRUNKDIAM': 'DBH', 'ADDRESSNUM': 'ADDRESS_NUMBER', 'STREETNAME': 'STREET_NAME', 'LASTUPDATE': 'LAST_UPDATE', });
lyr_Streets_1.set('fieldImages', {'OBJECTID': 'Range', 'FACILITYID': 'TextEdit', 'INTID': 'Range', 'STREETMAST': 'Range', 'FROMINTERI': 'Range', 'TOINTERID': 'Range', 'FROMLEFT': 'Range', 'TOLEFT': 'Range', 'FROMRIGHT': 'Range', 'TORIGHT': 'Range', 'ADDRNUMTYP': 'TextEdit', 'FULLNAME': 'TextEdit', 'ONEWAYDIR': 'TextEdit', 'MODELFLAG': 'TextEdit', 'STREETCLAS': 'TextEdit', 'FUNCTCLASS': 'TextEdit', 'SPEEDLIMIT': 'Range', 'PRIVATE': 'TextEdit', 'OFFICIAL': 'TextEdit', 'MUNILEFT': 'TextEdit', 'MUNIRIGHT': 'TextEdit', 'ZIPLEFT': 'TextEdit', 'ZIPRIGHT': 'TextEdit', 'FOCWIDTH': 'TextEdit', 'ROWWIDTH': 'TextEdit', 'FEATURECLA': 'TextEdit', 'PLANCRT': 'TextEdit', 'PLANMOD': 'TextEdit', 'LASTUPDATE': 'DateTime', 'NOTES': 'TextEdit', 'Shape_Leng': 'TextEdit', 'INCORPORAT': 'TextEdit', 'RSN': 'TextEdit', 'PARCELID': 'TextEdit', 'ESNLEFT': 'TextEdit', 'ESNRIGHT': 'TextEdit', 'FHWAFUNCTC': 'Range', 'CREATIONDA': 'DateTime', 'RESPONSIBI': 'TextEdit', });
lyr_DBHUnknown_2.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMESCIENT': 'TextEdit', 'TRUNKDIAM': 'TextEdit', 'ADDRESSNUM': 'TextEdit', 'STREETNAME': 'TextEdit', 'LASTUPDATE': 'DateTime', });
lyr_DBH18Inches_3.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMESCIENT': 'TextEdit', 'TRUNKDIAM': 'TextEdit', 'ADDRESSNUM': 'TextEdit', 'STREETNAME': 'TextEdit', 'LASTUPDATE': 'DateTime', });
lyr_DBH6518inches_4.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMESCIENT': 'TextEdit', 'TRUNKDIAM': 'TextEdit', 'ADDRESSNUM': 'TextEdit', 'STREETNAME': 'TextEdit', 'LASTUPDATE': 'DateTime', });
lyr_DBH06inches_5.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMESCIENT': 'TextEdit', 'TRUNKDIAM': 'TextEdit', 'ADDRESSNUM': 'TextEdit', 'STREETNAME': 'TextEdit', 'LASTUPDATE': 'DateTime', });
lyr_Streets_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'FACILITYID': 'hidden field', 'INTID': 'hidden field', 'STREETMAST': 'hidden field', 'FROMINTERI': 'hidden field', 'TOINTERID': 'hidden field', 'FROMLEFT': 'hidden field', 'TOLEFT': 'hidden field', 'FROMRIGHT': 'hidden field', 'TORIGHT': 'hidden field', 'ADDRNUMTYP': 'hidden field', 'FULLNAME': 'inline label - always visible', 'ONEWAYDIR': 'hidden field', 'MODELFLAG': 'hidden field', 'STREETCLAS': 'hidden field', 'FUNCTCLASS': 'hidden field', 'SPEEDLIMIT': 'hidden field', 'PRIVATE': 'hidden field', 'OFFICIAL': 'hidden field', 'MUNILEFT': 'hidden field', 'MUNIRIGHT': 'hidden field', 'ZIPLEFT': 'hidden field', 'ZIPRIGHT': 'hidden field', 'FOCWIDTH': 'hidden field', 'ROWWIDTH': 'hidden field', 'FEATURECLA': 'hidden field', 'PLANCRT': 'hidden field', 'PLANMOD': 'hidden field', 'LASTUPDATE': 'hidden field', 'NOTES': 'hidden field', 'Shape_Leng': 'hidden field', 'INCORPORAT': 'hidden field', 'RSN': 'hidden field', 'PARCELID': 'hidden field', 'ESNLEFT': 'hidden field', 'ESNRIGHT': 'hidden field', 'FHWAFUNCTC': 'hidden field', 'CREATIONDA': 'hidden field', 'RESPONSIBI': 'hidden field', });
lyr_DBHUnknown_2.set('fieldLabels', {'NAMESCIENT': 'inline label - visible with data', 'TRUNKDIAM': 'inline label - visible with data', 'ADDRESSNUM': 'inline label - visible with data', 'STREETNAME': 'inline label - visible with data', 'LASTUPDATE': 'inline label - visible with data', });
lyr_DBH18Inches_3.set('fieldLabels', {'NAMESCIENT': 'inline label - visible with data', 'TRUNKDIAM': 'inline label - visible with data', 'ADDRESSNUM': 'inline label - visible with data', 'STREETNAME': 'inline label - visible with data', 'LASTUPDATE': 'inline label - visible with data', });
lyr_DBH6518inches_4.set('fieldLabels', {'NAMESCIENT': 'inline label - visible with data', 'TRUNKDIAM': 'inline label - visible with data', 'ADDRESSNUM': 'inline label - visible with data', 'STREETNAME': 'inline label - visible with data', 'LASTUPDATE': 'inline label - visible with data', });
lyr_DBH06inches_5.set('fieldLabels', {'NAMESCIENT': 'inline label - visible with data', 'TRUNKDIAM': 'inline label - visible with data', 'ADDRESSNUM': 'inline label - visible with data', 'STREETNAME': 'inline label - visible with data', 'LASTUPDATE': 'inline label - visible with data', });
lyr_DBH06inches_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});