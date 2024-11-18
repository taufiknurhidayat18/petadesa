ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.258077, -7.478482, 109.280001, -7.466644]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AdministrasiDesa_1 = new ol.format.GeoJSON();
var features_AdministrasiDesa_1 = format_AdministrasiDesa_1.readFeatures(json_AdministrasiDesa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AdministrasiDesa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiDesa_1.addFeatures(features_AdministrasiDesa_1);
var lyr_AdministrasiDesa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrasiDesa_1, 
                style: style_AdministrasiDesa_1,
                popuplayertitle: "Administrasi Desa",
                interactive: true,
                title: '<img src="styles/legend/AdministrasiDesa_1.png" /> Administrasi Desa'
            });
var format_BatasRW_2 = new ol.format.GeoJSON();
var features_BatasRW_2 = format_BatasRW_2.readFeatures(json_BatasRW_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BatasRW_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRW_2.addFeatures(features_BatasRW_2);
var lyr_BatasRW_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasRW_2, 
                style: style_BatasRW_2,
                popuplayertitle: "Batas RW",
                interactive: true,
    title: 'Batas RW<br />\
    <img src="styles/legend/BatasRW_2_0.png" /> RW 1<br />\
    <img src="styles/legend/BatasRW_2_1.png" /> RW 2<br />\
    <img src="styles/legend/BatasRW_2_2.png" /> RW 3<br />\
    <img src="styles/legend/BatasRW_2_3.png" /> RW 4<br />\
    <img src="styles/legend/BatasRW_2_4.png" /> RW 5<br />\
    <img src="styles/legend/BatasRW_2_5.png" /> RW 6<br />\
    <img src="styles/legend/BatasRW_2_6.png" /> RW 7<br />\
    <img src="styles/legend/BatasRW_2_7.png" /> RW 8<br />'
        });
var format_KolamIkan_3 = new ol.format.GeoJSON();
var features_KolamIkan_3 = format_KolamIkan_3.readFeatures(json_KolamIkan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KolamIkan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KolamIkan_3.addFeatures(features_KolamIkan_3);
var lyr_KolamIkan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KolamIkan_3, 
                style: style_KolamIkan_3,
                popuplayertitle: "Kolam Ikan",
                interactive: true,
                title: '<img src="styles/legend/KolamIkan_3.png" /> Kolam Ikan'
            });
var format_Batasrtfix_4 = new ol.format.GeoJSON();
var features_Batasrtfix_4 = format_Batasrtfix_4.readFeatures(json_Batasrtfix_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Batasrtfix_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batasrtfix_4.addFeatures(features_Batasrtfix_4);
var lyr_Batasrtfix_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batasrtfix_4, 
                style: style_Batasrtfix_4,
                popuplayertitle: "Batasrtfix",
                interactive: true,
    title: 'Batasrtfix<br />\
    <img src="styles/legend/Batasrtfix_4_0.png" /> RT  6 RW 8<br />\
    <img src="styles/legend/Batasrtfix_4_1.png" /> RT 1 RW 1<br />\
    <img src="styles/legend/Batasrtfix_4_2.png" /> RT 1 RW 2<br />\
    <img src="styles/legend/Batasrtfix_4_3.png" /> RT 1 RW 3<br />\
    <img src="styles/legend/Batasrtfix_4_4.png" /> RT 1 RW 4<br />\
    <img src="styles/legend/Batasrtfix_4_5.png" /> RT 1 RW 5<br />\
    <img src="styles/legend/Batasrtfix_4_6.png" /> RT 1 RW 6<br />\
    <img src="styles/legend/Batasrtfix_4_7.png" /> RT 1 RW 7<br />\
    <img src="styles/legend/Batasrtfix_4_8.png" /> RT 1 RW 8<br />\
    <img src="styles/legend/Batasrtfix_4_9.png" /> RT 2 RW 1<br />\
    <img src="styles/legend/Batasrtfix_4_10.png" /> RT 2 RW 2<br />\
    <img src="styles/legend/Batasrtfix_4_11.png" /> RT 2 RW 3<br />\
    <img src="styles/legend/Batasrtfix_4_12.png" /> RT 2 RW 4<br />\
    <img src="styles/legend/Batasrtfix_4_13.png" /> RT 2 RW 5<br />\
    <img src="styles/legend/Batasrtfix_4_14.png" /> RT 2 RW 6<br />\
    <img src="styles/legend/Batasrtfix_4_15.png" /> RT 2 RW 7<br />\
    <img src="styles/legend/Batasrtfix_4_16.png" /> RT 2 RW 8<br />\
    <img src="styles/legend/Batasrtfix_4_17.png" /> RT 3 RW 1<br />\
    <img src="styles/legend/Batasrtfix_4_18.png" /> RT 3 RW 3<br />\
    <img src="styles/legend/Batasrtfix_4_19.png" /> RT 3 RW 5<br />\
    <img src="styles/legend/Batasrtfix_4_20.png" /> RT 3 RW 6<br />\
    <img src="styles/legend/Batasrtfix_4_21.png" /> RT 3 RW 7<br />\
    <img src="styles/legend/Batasrtfix_4_22.png" /> RT 3 RW 8<br />\
    <img src="styles/legend/Batasrtfix_4_23.png" /> RT 4 RW 5<br />\
    <img src="styles/legend/Batasrtfix_4_24.png" /> RT 4 RW 6<br />\
    <img src="styles/legend/Batasrtfix_4_25.png" /> RT 4 RW 7<br />\
    <img src="styles/legend/Batasrtfix_4_26.png" /> RT 4 RW 8<br />\
    <img src="styles/legend/Batasrtfix_4_27.png" /> RT 5 RW 6<br />\
    <img src="styles/legend/Batasrtfix_4_28.png" /> RT 5 RW 8<br />\
    <img src="styles/legend/Batasrtfix_4_29.png" /> RT 6 RW 6<br />'
        });
var format_Pemakaman_5 = new ol.format.GeoJSON();
var features_Pemakaman_5 = format_Pemakaman_5.readFeatures(json_Pemakaman_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pemakaman_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemakaman_5.addFeatures(features_Pemakaman_5);
var lyr_Pemakaman_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemakaman_5, 
                style: style_Pemakaman_5,
                popuplayertitle: "Pemakaman",
                interactive: true,
                title: '<img src="styles/legend/Pemakaman_5.png" /> Pemakaman'
            });
var format_Bangunan_6 = new ol.format.GeoJSON();
var features_Bangunan_6 = format_Bangunan_6.readFeatures(json_Bangunan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bangunan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_6.addFeatures(features_Bangunan_6);
var lyr_Bangunan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_6, 
                style: style_Bangunan_6,
                popuplayertitle: "Bangunan",
                interactive: true,
                title: '<img src="styles/legend/Bangunan_6.png" /> Bangunan'
            });
var format_Pesawahan_7 = new ol.format.GeoJSON();
var features_Pesawahan_7 = format_Pesawahan_7.readFeatures(json_Pesawahan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pesawahan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pesawahan_7.addFeatures(features_Pesawahan_7);
var lyr_Pesawahan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pesawahan_7, 
                style: style_Pesawahan_7,
                popuplayertitle: "Pesawahan",
                interactive: true,
                title: '<img src="styles/legend/Pesawahan_7.png" /> Pesawahan'
            });
var format_Jalan_8 = new ol.format.GeoJSON();
var features_Jalan_8 = format_Jalan_8.readFeatures(json_Jalan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Jalan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_8.addFeatures(features_Jalan_8);
var lyr_Jalan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_8, 
                style: style_Jalan_8,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_8.png" /> Jalan'
            });
var format_Lokasi_9 = new ol.format.GeoJSON();
var features_Lokasi_9 = format_Lokasi_9.readFeatures(json_Lokasi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lokasi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokasi_9.addFeatures(features_Lokasi_9);
var lyr_Lokasi_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokasi_9, 
                style: style_Lokasi_9,
                popuplayertitle: "Lokasi",
                interactive: true,
                title: '<img src="styles/legend/Lokasi_9.png" /> Lokasi'
            });
var format_Sungai_10 = new ol.format.GeoJSON();
var features_Sungai_10 = format_Sungai_10.readFeatures(json_Sungai_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sungai_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_10.addFeatures(features_Sungai_10);
var lyr_Sungai_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_10, 
                style: style_Sungai_10,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_10.png" /> Sungai'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AdministrasiDesa_1.setVisible(true);lyr_BatasRW_2.setVisible(true);lyr_KolamIkan_3.setVisible(true);lyr_Batasrtfix_4.setVisible(true);lyr_Pemakaman_5.setVisible(true);lyr_Bangunan_6.setVisible(true);lyr_Pesawahan_7.setVisible(true);lyr_Jalan_8.setVisible(true);lyr_Lokasi_9.setVisible(true);lyr_Sungai_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AdministrasiDesa_1,lyr_BatasRW_2,lyr_KolamIkan_3,lyr_Batasrtfix_4,lyr_Pemakaman_5,lyr_Bangunan_6,lyr_Pesawahan_7,lyr_Jalan_8,lyr_Lokasi_9,lyr_Sungai_10];
lyr_AdministrasiDesa_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', });
lyr_BatasRW_2.set('fieldAliases', {'id': 'id', 'Wilayah': 'Wilayah', });
lyr_KolamIkan_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Batasrtfix_4.set('fieldAliases', {'id': 'id', 'Wilayah': 'Wilayah', });
lyr_Pemakaman_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Bangunan_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'grades': 'grades', 'addr_provi': 'addr_provi', 'layer': 'layer', 'official_n': 'official_n', 'official_1': 'official_1', 'official_2': 'official_2', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'shop': 'shop', 'drive_thro': 'drive_thro', 'currency_I': 'currency_I', 'atm': 'atm', 'wheelchair': 'wheelchair', 'religion': 'religion', 'denominati': 'denominati', 'building_l': 'building_l', 'amenity': 'amenity', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'name': 'name', 'type': 'type', });
lyr_Pesawahan_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Jalan_8.set('fieldAliases', {'id': 'id', 'Nama Jalan': 'Nama Jalan', 'Lebar': 'Lebar', });
lyr_Lokasi_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Sungai_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_AdministrasiDesa_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', });
lyr_BatasRW_2.set('fieldImages', {'id': 'TextEdit', 'Wilayah': 'TextEdit', });
lyr_KolamIkan_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Batasrtfix_4.set('fieldImages', {'id': 'TextEdit', 'Wilayah': 'TextEdit', });
lyr_Pemakaman_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Bangunan_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'grades': 'TextEdit', 'addr_provi': 'TextEdit', 'layer': 'TextEdit', 'official_n': 'TextEdit', 'official_1': 'TextEdit', 'official_2': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'brand': 'TextEdit', 'shop': 'TextEdit', 'drive_thro': 'TextEdit', 'currency_I': 'TextEdit', 'atm': 'TextEdit', 'wheelchair': 'TextEdit', 'religion': 'TextEdit', 'denominati': 'TextEdit', 'building_l': 'TextEdit', 'amenity': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Pesawahan_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Jalan_8.set('fieldImages', {'id': 'TextEdit', 'Nama Jalan': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_Lokasi_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Sungai_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_AdministrasiDesa_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Kecamatan': 'no label', 'Kabupaten': 'no label', 'Provinsi': 'no label', });
lyr_BatasRW_2.set('fieldLabels', {'id': 'no label', 'Wilayah': 'no label', });
lyr_KolamIkan_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Batasrtfix_4.set('fieldLabels', {'id': 'no label', 'Wilayah': 'no label', });
lyr_Pemakaman_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Bangunan_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'grades': 'no label', 'addr_provi': 'no label', 'layer': 'no label', 'official_n': 'no label', 'official_1': 'no label', 'official_2': 'no label', 'brand_wiki': 'no label', 'brand_wi_1': 'no label', 'brand': 'no label', 'shop': 'no label', 'drive_thro': 'no label', 'currency_I': 'no label', 'atm': 'no label', 'wheelchair': 'no label', 'religion': 'no label', 'denominati': 'no label', 'building_l': 'no label', 'amenity': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'addr_city': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_Pesawahan_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Jalan_8.set('fieldLabels', {'id': 'no label', 'Nama Jalan': 'no label', 'Lebar': 'no label', });
lyr_Lokasi_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Sungai_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Sungai_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});