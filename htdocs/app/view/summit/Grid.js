/**
 * The grid in which summits are displayed
 * @extends Ext.grid.Panel
 */
Ext.define('CF.view.summit.Grid' ,{
    extend: 'Ext.ux.LiveSearchGridPanel',
    alias : 'widget.summitgrid',
    requires: [
        'GeoExt.selection.FeatureModel',
        'GeoExt.grid.column.Symbolizer',
        'Ext.util.*',
        'Ext.tip.QuickTipManager',
        'Ext.grid.plugin.CellEditing',
        'Ext.form.field.Number'
    ],
    initComponent: function() {
        Ext.apply(this, {
            border: false,
            columnLines: true,
            columns: [
                {header: 'ID', dataIndex: 'HOLE_ID', flex: 6},
                {
                    header: 'Length',
                    dataIndex: 'LENGTH',
                    flex: 4,
                    editor: {xtype: 'numberfield'}
                },
                {header: 'Project', dataIndex: 'PROJECT', flex: 10},
                {header: 'Township', dataIndex: 'TOWNSHIP', flex: 10},
                {header: 'Claim', dataIndex: 'CLAIM_NO', flex: 5},
                {header: 'Property', dataIndex: 'PROPERTY', flex: 8},
                {header: 'Dip', dataIndex: 'COLLAR_DIP', flex: 3},
                {header: 'AZ', dataIndex: 'COLLAR_AZ', flex: 3},
                {header: 'Year', dataIndex: 'YEAR', flex: 4}
            ],
            flex: 1,
            store: 'Summits',
            selType: 'featuremodel',
            plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 2
                })
            ],
            viewConfig: {
                stripeRows: true
            }
        });
        this.callParent(arguments);
        // store singleton selection model instance
        CF.view.summit.Grid.selectionModel = this.getSelectionModel();
    }
});
