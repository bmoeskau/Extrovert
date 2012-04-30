Ext.require([
    'Ext.panel.Panel'
]);

Ext.onReady(function() {
    
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
            
            items: [{
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
            },{
                title: '"Inverse" Panel',
                width: 200,
                height: 150,
                x: 250,
                y: 20,
                cls: 'extro-panel-inverse',
                bodyStyle: 'padding:10px;',
                html: "<code>cls: 'extro-panel-inverse'</code>"
            },{
                title: '"Warning" Panel',
                width: 200,
                height: 150,
                x: 470,
                y: 20,
                cls: 'extro-panel-warning',
                bodyStyle: 'padding:10px;',
                html: "<code>cls: 'extro-panel-warning'</code>"
            },{
                title: '"Danger" Panel',
                width: 200,
                height: 150,
                x: 690,
                y: 20,
                cls: 'extro-panel-danger',
                bodyStyle: 'padding:10px;',
                html: "<code>cls: 'extro-panel-danger'</code>"
            },{
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
            }]
        }]
    })
});
