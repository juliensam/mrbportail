Ext.define('CF.view.summit.tab.Panel', {
    extend: 'Ext.tab.Panel',
    alias : 'widget.summittabpanel',

    requires: [
        'CF.view.summit.Chart',
        'CF.view.summit.Log',
        'CF.view.summit.Analyse'
    ],

    // private properties

    summitLog: null,

    summitAnalyse: null,

    initComponent: function() {
        var items = [];

        // log
        this.summitLog = Ext.create('CF.view.summit.Log');
        items.push(this.summitLog);

        // sections
        items.push({
            title: "Sections",
            disabled: true
        });

        // analyses
        this.summitAnalyse = Ext.create('CF.view.summit.Analyse');
        items.push(this.summitAnalyse);

        // qa/qc
        items.push({
            title: "QA/QC",
            disabled: true
        });

        // exploration
        items.push({
            title: "Exploration 2013",
            disabled: true
        });

        // 3d view
        items.push({
            title: "3D View",
            disabled: true
        });

/*
        items.push({
            title: "Chart",
            disabled: true//,
            //items: [Ext.create('CF.view.summit.Chart')]
        });
*/

        Ext.apply(this, {
            items: items
        });

        this.callParent(arguments);
    },

    // load specified record in children components
    loadRecord: function(record) {
        this.summitLog.getForm().loadRecord(record);
        this.summitLog.updateDummy(record);
        this.summitAnalyse.getForm().loadRecord(record);
    }
});
