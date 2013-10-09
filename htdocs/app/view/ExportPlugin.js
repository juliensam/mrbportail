Ext.define('CF.view.ExportPlugin', {
    extend: 'Ext.AbstractPlugin',
    alias: 'plugin.cf_exportplugin',

    requires: [
        'Ext.button.Button'
    ],

    // public properties (mandatory)

    format: null,

    // public properties (optional)

    position: 'top',

    text: 'KML Export',

    constructor: function(config) {
        var me = this;
        Ext.apply(me, config);

        this.callParent(arguments);
    },

    init: function() {
        var toolbar,
            cmp = this.getCmp();

        this.callParent(arguments);

        // if component doesn't have a store, the plugin can't work properly
        if (!cmp.store) {
            return;
        }

        Ext.each(cmp.dockedItems.getRange(), function(item, index) {
            if (item instanceof Ext.Toolbar && item.dock == this.position) {
                toolbar = item;
                return;
            }
        }, this);

        // if component doesn't have a toolbar, it can't work properly
        if (!toolbar) {
            return;
        }

        toolbar.add({
            text: this.text,
            iconCls: "cf-button-export",
            handler: this.onButtonClick,
            scope: this
        });
    },

    onButtonClick: function() {
        var cmp = this.getCmp(),
            store = cmp.getStore(),
            records = [],
            features = [],
            record,
            newWindow;

        // if component has indexes to filter, get them only, else get all
        if (cmp.indexes && cmp.indexes.length) {
            Ext.each(cmp.indexes, function(index) {
                record = store.getAt(index);
                if (record.raw instanceof OpenLayers.Feature.Vector) {
                    features.push(record.raw);
                }
            }, this);
        } else {
            store.each(function(record) {
                if (record.raw instanceof OpenLayers.Feature.Vector) {
                    features.push(record.raw);
                }
            }, this);
        }

        if (!features.length) {
            return;
        }

        // open result in new window
        newWindow = window.open(
            '', 
            this.text + ' ' + (new Date()).getTime(), "width=300, height=300"
        );
        newWindow.document.write(
           '<textarea style="width: 100%; height: 100%">' + 
           this.format.write(features) +
           '</textarea>'
        );
    }
});
