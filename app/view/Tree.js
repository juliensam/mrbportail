Ext.define('CF.view.Tree', {
    extend: 'GeoExt.tree.Panel',
    alias : 'widget.cf_tree',

    requires: [
        'Ext.tree.plugin.TreeViewDragDrop',
        'GeoExt.panel.Map',
        'GeoExt.tree.OverlayLayerContainer',
        'GeoExt.tree.BaseLayerContainer',
        'GeoExt.data.LayerTreeModel',
        'GeoExt.tree.View',
        'GeoExt.tree.Column'
    ],

    initComponent: function() {
        var store = Ext.create('Ext.data.TreeStore', {
            model: 'GeoExt.data.LayerTreeModel',
            root: {
                expanded: true,
                children: [
                    {
                        plugins: ['gx_baselayercontainer'],
                        expanded: true,
                        text: "Base Maps"
                    }, {
                        plugins: ['gx_overlaylayercontainer'],
                        expanded: true
                    }
                ]
            }
        });

        Ext.apply(this, {
            border: true,
            region: "west",
            title: "Layers",
            width: 180,
            minWidth: 150,
            maxWidth: 400,
            split: true,
            collapsible: true,
            collapseMode: "mini",
            autoScroll: true,
            store: store,
            rootVisible: false,
            lines: false
        });

        this.callParent(arguments);
    }
});
