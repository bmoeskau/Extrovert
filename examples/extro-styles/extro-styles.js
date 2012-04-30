Ext.require([
    'Ext.panel.Panel',
    'Ext.layout.*'
]);

Ext.onReady(function() {
    
    function getDefaultPanel(x, y, frame) {
        return {
            title: (frame ? 'Framed ' : '') + 'Default Panel',
            layout: 'fit',
            bodyStyle: 'padding:10px;',
            collapsible: true,
            width: 200,
            height: 150,
            x: x,
            y: y,
            frame: frame,
            
            items: [{
                title: (frame ? 'Framed ' : '') + 'Child Panel',
                cls: 'extro-panel-child',
                frame: frame,
                bodyStyle: 'padding:10px;',
                html: "<code>cls: 'extro-panel-child'</code>"
            }]
        };
    }
    
    function getCustomPanel(name, cls, x, y, frame) {
        return {
            title: (frame ? 'Framed ' : '') + '"' + name + '" Panel',
            width: 200,
            height: 150,
            x: x,
            y: y,
            frame: frame,
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
            width : 420,
            height: 350,
            x: 690, y: 190,
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
                id: 'center-region',
                bodyStyle: 'padding:10px;',
                html: 'You can change the panel style dynamically',
                
                dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    
                    items: [{
                        xtype: 'cycle',
                        showText: true,
                        menu: {
                            id: 'view-type-menu',
                            items: [{
                                text: 'Default',
                                checked: true
                            },{
                                text: 'Danger'
                            },{
                                text: 'Warning'
                            },{
                                text: 'Inverse'
                            }]
                        },
                        changeHandler: function(cycleBtn, activeItem) {
                            var center = Ext.get('center-region'),
                                cls = 'extro-panel-' + activeItem.text.toLowerCase();
                            
                            // Remove the previous one, if any
                            center.removeCls(center.extroCls);
                            
                            if (cls !== 'default') {
                                center.extroCls = cls;
                                center.addCls(center.extroCls);
                            }
                        }
                    }]
                }]
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
            autoScroll: true,
            border: 0,
            
            items: [
                // Row 1
                getDefaultPanel(30, 20),
                getCustomPanel('Danger', 'danger', 250, 20),
                getCustomPanel('Warning', 'warning', 470, 20),
                getCustomPanel('Inverse', 'inverse', 690, 20),
                getMultiPanel(),
                
                // Row 2
                getDefaultPanel(30, 190, true),
                getCustomPanel('Danger', 'danger', 250, 190, true),
                getCustomPanel('Warning', 'warning', 470, 190, true),
                getBorderLayoutPanel()
            ]
        }]
    })
});
