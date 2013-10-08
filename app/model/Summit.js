/**
 * Model for a summit
 */
Ext.define('CF.model.Summit', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'symbolizer',
            convert: function(v, r) {
                return r.raw.layer.styleMap.createSymbolizer(r.raw, 'default');
            }
        },
        {
            name: 'fid',
            convert: function(value, record) {
                // record.raw a OpenLayers.Feature.Vector instance
                if (record.raw instanceof OpenLayers.Feature.Vector) {
                    return record.raw.fid;
                } else {
                    return "This is not a Feature";
                }
            }
        },
        {name: 'HOLE_ID', type: 'string'},
        {name: 'LOCATIONX', type: 'float'},
        {name: 'LOCATIONY', type: 'float'},
        {name: 'LOCATIONZ', type: 'float'},
        {name: 'LENGTH', type: 'int'},
        {name: 'PROJECT', type: 'string'},
        {name: 'TOWNSHIP', type: 'string'},
        {name: 'NTS', type: 'string'},
        {name: 'CLAIM_NO', type: 'string'},
        {name: 'PROPERTY', type: 'string'},
        {name: 'COLLAR_DIP', type: 'int'},
        {name: 'COLLAR_AZ', type: 'int'},
        {name: 'YEAR', type: 'int'},
        {name: 'LENGTH', type: 'int'},
        {
          name: 'elevation', 
          type: 'int',
          convert: function(value, record) {
                // record.raw a OpenLayers.Feature.Vector instance
                return 1000 - record.data.LENGTH;
            }
        },

        // custom fields
        {
          name: 'holeType', 
          type: 'int',
          convert: function(value, record) {
              // values: 1-4
              return Math.floor(Math.random() * 4) + 1;
          }
        },

        {
          name: 'fer', 
          type: 'string',
          convert: function(value, record) {
            return [Math.floor(Math.random() * 1000), ' ppm'].join('');
          }
        },
        {
          name: 'cuivre', 
          type: 'string',
          convert: function(value, record) {
            return [Math.floor(Math.random() * 1000), ' ppm'].join('');
          }
        },
        {
          name: 'or', 
          type: 'string',
          convert: function(value, record) {
            return [Math.floor(Math.random() * 1000), ' ppm'].join('');
          }
        },
        {
          name: 'platine', 
          type: 'string',
          convert: function(value, record) {
            return [Math.floor(Math.random() * 1000), ' ppm'].join('');
          }
        }
    ]
});
