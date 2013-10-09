/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('CF.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'fit',

    requires: [
        'Ext.layout.container.Border',
        'Ext.resizer.Splitter',
        'CF.view.Header',
        'CF.view.Map',
        'CF.view.Tree',
        //'CF.view.summit.Chart',
        'CF.view.summit.Grid',
        'CF.view.summit.tab.Panel'
    ],

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items: [{
                xtype: 'panel',
                border: false,
                layout: 'border',
                dockedItems: [
                    Ext.create('CF.view.Header')
                ],
                items: [{
                    xtype: 'cf_mappanel'
                }, {
                    xtype: 'cf_tree'
                },{
                    xtype: 'panel',
                    region: 'east',
                    border: false,
                    id    : 'viewport',
                    width: 600,
                    maxWidth: 800,
                    minWidth: 400,
                    split: true,
                    collapsible: true,
                    collapseMode: "mini",
                    resizable: true,
                    title: "Boreholes",
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        Ext.create('CF.view.summit.Grid'),
                        {xtype: 'splitter'},
                        //Ext.create('CF.view.summit.Chart')
                        Ext.create('CF.view.summit.tab.Panel')
                    ]
                }]
            }]
        });

        me.callParent(arguments);
    }
});
