Ext.define('CF.view.summit.Log', {
    extend: 'Ext.form.Panel',
    alias : 'widget.summitlog',

    requires: [
        'Ext.form.*',
        'CF.view.summit.DummyBar'
    ],

    // private

    dummyBar: null,

    initComponent: function() {
        var fieldset = {
            columnWidth: 0.4,
            margin: '0 0 0 10',
            xtype: 'fieldset',
            title:'Borehole informations',
            defaults: {
                width: 240,
                labelWidth: 90
            },
            defaultType: 'textfield',
            items: []
        }

        fieldset.items.push({
            fieldLabel: 'Hole ID',
            name: 'HOLE_ID'
        });

        this.dummyBar = Ext.create('CF.view.summit.DummyBar');

        Ext.apply(this, {
            title:'Log',
            id: 'company-form',
            bodyPadding: 5,
            fieldDefaults: {
                labelAlign: 'left',
                msgTarget: 'side'
            },
            items: [
                fieldset,
                {html: '<h2>Composition borehole</h2>', border: false},
                this.dummyBar
            ]
        });

        this.callParent(arguments);
    },

    // public
    updateDummy: function(record) {
        this.dummyBar.update(record);
    }
});
