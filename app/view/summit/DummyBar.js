Ext.define('CF.view.summit.DummyBar', {
    extend: 'Ext.container.Container',
    alias : 'widget.summitdummybar',

    // public

    cls: "cf-summitdummybar",

    initComponent: function() {
        Ext.apply(this, {
            width: 346,
            height: 56,
            hidden: true
        });

        this.callParent(arguments);
    },

    update: function(record) {
        var oldCls,
            newCls,
            holeType;

        holeType = record.get('holeType');
        this.show();
        newCls = ["cf-summitdummybar-", holeType].join('');

        this.removeCls("cf-summitdummybar-1");
        this.removeCls("cf-summitdummybar-2");
        this.removeCls("cf-summitdummybar-3");
        this.removeCls("cf-summitdummybar-4");

        this.addCls(newCls);
    }
});
