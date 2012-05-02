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
                cls: 'extro-panel-child-light',
                frame: frame,
                bodyStyle: 'padding:10px;',
                html: "<code>cls: 'extro-panel-child-light'</code>"
            }]
        };
    }
    
    function getCustomPanel(name, cls, x, y, frame, w, h) {
        return {
            title: (frame ? 'Framed ' : '') + '"' + name + '" Panel',
            width: w || 200,
            height: h || 150,
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
            x: 890,
            y: 0,
            layout: 'fit',
            bodyStyle: 'padding:10px;',
            
            items: [{
                title: 'First Child',
                cls: 'extro-panel-child-danger-light',
                layout: 'fit',
                bodyStyle: 'padding:10px;',
                
                items: [{
                    title: 'Second Child',
                    cls: 'extro-panel-child-warning-light'
                }]
            }]
        }
    }
     
    var centerCls = 'extro-panel-child-danger';
    
    function getBorderLayoutPanel() {
        return {
            title : 'BorderLayout Panel with Child Styles',
            width : 410,
            height: 350,
            x: 680, y: 160,
            collapsible: true,
            layout: {
                type: 'border',
                padding: 5
            },
            defaults: {
                collapsible: true,
                split: true,
                cls: 'extro-panel-child-light'
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
                title: 'Danger',
                region: 'center',
                id: 'center-region',
                collapsible: false,
                bodyStyle: 'padding:10px;',
                html: 'You can change the panel style dynamically',
                cls: centerCls,
                
                dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    
                    items: [{
                        xtype: 'cycle',
                        showText: true,
                        menu: {
                            id: 'view-type-menu',
                            items: [{
                                text: 'Default'
                            },{
                                text: 'Danger',
                                checked: true
                            },{
                                text: 'Warning'
                            },{
                                text: 'Inverse'
                            }]
                        },
                        changeHandler: function(cycleBtn, activeItem) {
                            var center = Ext.getCmp('center-region'),
                                cls = 'extro-panel-child-' + activeItem.text.toLowerCase();
                            
                            center.removeCls(centerCls);
                            
                            if (activeItem.text === 'Default') {
                                centerCls = 'extro-panel-child-light';
                                center.setTitle('Center');
                            }
                            else {
                                centerCls = cls;
                                center.setTitle(activeItem.text);
                            }
                            center.addCls(centerCls).doLayout();
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
                getDefaultPanel(50, 0),
                getCustomPanel('Danger', 'danger', 260, 0),
                getCustomPanel('Warning', 'warning', 470, 0),
                getCustomPanel('Inverse', 'inverse', 680, 0),
                getMultiPanel(),
                
                // Row 2
                getDefaultPanel(50, 160, true),
                getCustomPanel('Danger', 'danger', 260, 160, true),
                getCustomPanel('Warning', 'warning', 470, 160, true),
                getBorderLayoutPanel(),
                
                // Row 3
                getCustomPanel('Special', 'special', 50, 320, true, 410)
            ]
        }]
    })
});
