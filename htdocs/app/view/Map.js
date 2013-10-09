/**
 * The GeoExt.panel.Map used in the application.  Useful to define map options
 * and stuff.
 * @extends GeoExt.panel.Map
 */
Ext.define('CF.view.Map', {
    // Ext.panel.Panel-specific options:
    extend: 'GeoExt.panel.Map',
    alias : 'widget.cf_mappanel',
    requires: [
        'Ext.window.MessageBox',
        'GeoExt.Action',
        'CF.view.help.Action'
    ],
    border: 'false',
    region: 'center',
    // GeoExt.panel.Map-specific options :
    center: '-67.336,52.451',
    zoom: 9,

    initComponent: function() {
        var me = this,
            items = [],
            ctrl;

        var map = new OpenLayers.Map({
            controls: [
                new OpenLayers.Control.Zoom()
            ]
        });

        // ZoomToMaxExtent control, a "button" control
        OpenLayers.Control.ZoomToCustomExtent = OpenLayers.Class(OpenLayers.Control.Button, {
            extent: null,
            trigger: function() {
                if (this.map) {
                    this.map.zoomToExtent(this.extent);
                }    
            },
            CLASS_NAME: "OpenLayers.Control.ZoomToCustomExtent"
        });

        items.push(Ext.create('Ext.button.Button', Ext.create('GeoExt.Action', {
            control: new OpenLayers.Control.ZoomToCustomExtent({
                extent: new OpenLayers.Bounds.fromArray([
                    -67.799306191407,
                    52.014141957032,
                    -66.927266396485,
                    52.957592884766
                ])
            }),
            map: map,
            text: "Initial View",
            tooltip: "Zoom to the initial view.",
            iconCls: 'cf-button-maxextent'
        })));

        items.push("-");

        // Navigation control
        items.push(Ext.create('Ext.button.Button',Ext.create('GeoExt.Action', {
            text: "Navigation",
            control: new OpenLayers.Control.Navigation(),
            map: map,
            // button options
            toggleGroup: "draw",
            allowDepress: false,
            pressed: true,
            tooltip: "Pan/Zoom the map.",
            // check item options
            group: "draw",
            checked: true,
            iconCls: 'cf-button-navigation'
        })));

        items.push("-");

        // Navigation history - two "button" controls
        ctrl = new OpenLayers.Control.NavigationHistory();
        map.addControl(ctrl);
        
        items.push(Ext.create('Ext.button.Button', Ext.create('GeoExt.Action', {
            text: "Previous",
            control: ctrl.previous,
            disabled: true,
            tooltip: "Go back in map navigation history.",
            iconCls: 'cf-button-history-back'
        })));
        
        items.push(Ext.create('Ext.button.Button', Ext.create('GeoExt.Action', {
            text: "Next",
            control: ctrl.next,
            disabled: true,
            tooltip: "Redo navigation history.",
            iconCls: 'cf-button-history-next'
        })));
        items.push("->");

        // Help action
        /*
        items.push(
            Ext.create('Ext.button.Button', Ext.create('CF.view.help.Action', {
                windowContentEl: "help"
            }))
        );
        */
        
        Ext.apply(me, {
            map: map,
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: items,
                style: {
                    border: 0,
                    padding: 0
                }
                    }]
        });
                
        me.callParent(arguments);
    }
});
