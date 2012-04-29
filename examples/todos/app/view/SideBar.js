Ext.define('Todo.view.SideBar', {
    alias: 'widget.todo-sidebar',
    extend: 'Ext.panel.Panel',
    
    initComponent: function() {
        Ext.apply(this, {
            title: 'Projects',
            dock: 'left',
            width: 200,
            cls: 'todo-sidebar',
            frame: true,
            margin: '8 3 8 8',
            
            layout: {
                
            },
            
            defaults: {
                collapsible: 'true',
                border: false
            },
            
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                border: false,
                items: [{
                    text: 'Foo',
                    scale: 'medium'
                }]
            }],
            
            items: [{
                title: 'Foo',
                html: 'dfgsf'
            },{
                title: 'Bar',
                html: 'asddf'
            }]
            
            // tools: [{
                // type: 'left',
                // handler: function(e, toolEl, header) {
                // }
            // }]
        });
                
        this.callParent(arguments);
    }
});