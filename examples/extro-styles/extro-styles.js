Ext.require([
    'Ext.panel.Panel',
    'Ext.layout.*'
]);

Ext.onReady(function() {
    
    function getDefaultPanel() {
        return {
            title: 'Default Panel',
            width: 200,
            height: 150,
            x: 30,
            y: 20,
            layout: 'fit',
            bodyStyle: 'padding:10px;',
            
            items: [{
                title: 'Default Child Panel',
                cls: 'extro-panel-child',
                bodyStyle: 'padding:10px;',
                html: "<code>cls: 'extro-panel-child'</code>"
            }]
        };
    }
    
    function getStyledPanel(name, cls, x, y) {
        return {
            title: '"' + name + '" Panel',
            width: 200,
            height: 150,
            x: x,
            y: y,
            cls: 'extro-panel-' + cls,
            bodyStyle: 'padding:10px;',
            html: "<code>cls: 'extro-panel-" + cls + "'</code>"
        };
    }
    
    function getMultiPanel() {
        return {
            title: 'Multi-Nested',
            width: 200,
            height: 150,
            x: 910,
            y: 20,
            layout: 'fit',
            bodyStyle: 'padding:10px;',
            
            items: [{
                title: 'First Child',
                cls: 'extro-panel-danger',
                layout: 'fit',
                bodyStyle: 'padding:10px;',
                
                items: [{
                    title: 'Second Child',
                    cls: 'extro-panel-warning'
                }]
            }]
        }
    }
    
    function getBorderLayoutPanel() {
        return {
            title : 'BorderLayout Panel with Child Styles',
            width : 450,
            height: 350,
            x: 660, y: 190,
            collapsible: true,
            layout: {
                type: 'border',
                padding: 5
            },
            defaults: {
                collapsible: true,
                split: true,
                cls: 'extro-panel-child'
            },
            
            items: [{
                title: 'North',
                region: 'north',
                html: 'North',
                ctitle: 'North',
                height: 70
            },{
                title: 'South',
                region: 'south',
                html: 'South',
                collapseMode: 'mini',
                height: 70
            },{
                title: 'West',
                region: 'west',
                html: 'West',
                collapseMode: 'mini',
                width: 100
            },{
                title: 'East',
                region: 'east',
                html: 'East',
                width: 100
            },{
                title: 'Center',
                region: 'center',
                collapsible: false,
                html: 'Center'
            }]
        };
    }

    Ext.create('Ext.Viewport', {
        layout: 'border',
        items: [{
            region: 'north',
            height: 80,
            contentEl: 'header',
            border: 0
        },{
            region: 'center',
            layout: 'absolute',
            border: 0,
            
            items: [
                // Row 1
                getDefaultPanel(),
                getStyledPanel('Inverse', 'inverse', 250, 20),
                getStyledPanel('Warning', 'warning', 470, 20),
                getStyledPanel('Danger', 'danger', 690, 20),
                getMultiPanel(),
                
                // Row 2
                getBorderLayoutPanel()
            ]
        }]
    })
});
