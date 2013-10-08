Ext.define('CF.view.summit.DummyBar', {
    extend: 'Ext.container.Container',
    alias : 'widget.summitdummybar',

    // public

    cls: "cf-summitdummybar",

    // private

    count: 0,

    numStates: 4,

    initComponent: function() {
        Ext.apply(this, {
            width: 346,
                    height: 56,
                    hidden: true
                    //html: '<img src="resources/images/stacked-bars.jpg" />'
        });

        this.callParent(arguments);
    },

    update: function() {
        var oldCls,
            newCls;

        this.show();

        oldCls = ["cf-summitdummybar-", this.count].join('');

        if (this.count >= this.numStates) {
            this.count = 1;
        } else {
            this.count++;
        }

        newCls = ["cf-summitdummybar-", this.count].join('');

        this.removeCls(oldCls);
        this.addCls(newCls);
    }
});
