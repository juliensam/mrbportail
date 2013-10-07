/**
 * The application header displayed at the top of the viewport
 * @extends Ext.Component
 */
Ext.define('CF.view.Header', {
    extend: 'Ext.Component',

    dock: 'top',
    baseCls: 'cf-header',

    initComponent: function() {
        Ext.applyIf(this, {
            html: 'Integration de donnees dans le domaine minier' +
                ''
        });

        this.callParent(arguments);
    }
});
