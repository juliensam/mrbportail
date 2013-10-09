/**
 * Ext.Loader
 */
Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false,
    paths: {
        // for dev use:
        //GeoExt: "/geoext2/src/GeoExt",
        //Ext: "http://cdn.sencha.io/ext-4.1.0-gpl/src"

        // for build purpose
        GeoExt: "geoext2/src/GeoExt",
        Ext: "extjs-4.1.0/src",
        'Ext.ux': "extjs-4.1.0/examples/ux"
    }
});

/**
 * CF.app
 * A MVC application demo that uses GeoExt and Ext components to display
 * geospatial data.
 */
Ext.application({
    name: 'CF',
    appFolder: 'app',
    controllers: [
        'Map'
    ],
    autoCreateViewport: true
});

/**
 * For dev purpose only
 */
var ctrl, map, mapPanel;
