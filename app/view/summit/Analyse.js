Ext.define('CF.view.summit.Analyse', {
    extend: 'Ext.form.Panel',
    alias : 'widget.summitanalyse',

    requires: [
        'Ext.form.*',
    ],

    initComponent: function() {
        var fieldset = {
            columnWidth: 0.4,
            margin: '0 0 0 10',
            xtype: 'fieldset',
            title:'Métaux',
            defaults: {
                width: 240,
                labelWidth: 90
            },
            defaultType: 'textfield',
            items: []
        }

        fieldset.items.push({
            fieldLabel: 'Fer',
            name: 'fer'
        });

        fieldset.items.push({
            fieldLabel: 'Cuivre',
            name: 'cuivre'
        });

        fieldset.items.push({
            fieldLabel: 'Or',
            name: 'or'
        });

        fieldset.items.push({
            fieldLabel: 'Platine',
            name: 'platine'
        });

        Ext.apply(this, {
            title:'Analyses',
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
