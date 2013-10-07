/**
 * The grid in which summits are displayed
 * @extends Ext.grid.Panel
 */
Ext.define('CF.view.summit.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.summitgrid',
    requires: [
        'GeoExt.selection.FeatureModel',
        'GeoExt.grid.column.Symbolizer',
        'Ext.grid.plugin.CellEditing',
        'Ext.form.field.Number'
    ],
    initComponent: function() {
        Ext.apply(this, {
            border: false,
            columns: [
                {header: 'ID', dataIndex: 'HOLE_ID', flex: 3},
                {
                    header: 'Length',
                    dataIndex: 'LENGTH',
                    width: 30,
                    editor: {xtype: 'numberfield'}
                },
                {header: 'Project', dataIndex: 'PROJECT', flex: 4},
                {header: 'Township', dataIndex: 'TOWNSHIP', flex: 2},
                {header: 'Claim', dataIndex: 'CLAIM_NO', flex: 4},
                {header: 'Property', dataIndex: 'PROPERTY', flex: 4},
                {header: 'Collar Dip', dataIndex: 'COLLAR_DIP', flex: 4},
                {header: 'Collar AZ', dataIndex: 'COLLAR_AZ', flex: 4},
                {header: 'Year', dataIndex: 'YEAR', flex: 4}
            ],
            flex: 1,
            store: 'Summits',
            selType: 'featuremodel',
            plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 2
                })
            ]
        });
        this.callParent(arguments);
        // store singleton selection model instance
        CF.view.summit.Grid.selectionModel = this.getSelectionModel();
    }
});
