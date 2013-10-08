Ext.define('CF.view.summit.Log', {
    extend: 'Ext.form.Panel',
    alias : 'widget.summitlog',

    requires: [
        'Ext.form.*'
    ],

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

        Ext.apply(this, {
            title:'Log',
            id: 'company-form',
            bodyPadding: 5,
            fieldDefaults: {
                labelAlign: 'left',
                msgTarget: 'side'
            },
            items: [fieldset]
        });

        this.callParent(arguments);
    }
});
