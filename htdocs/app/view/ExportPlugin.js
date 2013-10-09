Ext.define('CF.view.ExportPlugin', {
    extend: 'Ext.AbstractPlugin',
    alias: 'plugin.cf_exportplugin',

    requires: [
        'Ext.button.Button'
    ],

    // public properties (mandatory)

    // the OpenLayers.Format to use to write the features as a string
    format: null,

    // the url used to export and download the grid features using defined
    // format as writer
    url: null,

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

        Ext.Ajax.request({
            url: this.url,
            params: {
                fileContent: this.format.write(features)
            },
            success: function(response) {
                var responseObj = Ext.decode(response.responseText),
                    success = responseObj.success,
                    id = responseObj.id,
                    error = responseObj.error,
                    downloadUrl;
                if (success && id) {
                    this.download(Ext.urlAppend(this.url, 'id=' + id));
                } else {
                    alert(error);
                }
            },
            failure: function(response) {
                alert("An unknown error occured. Please, contact your administrator.");
            },
            scope: this
        });
    },

    download: function(url) {
        if (Ext.isOpera) {
            // Make sure that Opera don't replace the content tab with
            // the pdf
            window.open(url);
        } else {
            // This avoids popup blockers for all other browsers
            window.location.href = url;                        
        }
    }
});
