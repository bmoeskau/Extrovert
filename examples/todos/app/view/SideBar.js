Ext.define('Todo.view.SideBar', {
    alias: 'widget.todo-sidebar',
    extend: 'Ext.panel.Panel',
    
    initComponent: function() {
        Ext.applyIf(this, {
            title: 'Projects',
            region: 'west',
            collapsible: true,
            split: true,
            width: 200,
            cls: 'todo-main-panel',
            margin: '10 0 10 10',
            
            layout: {
                type: 'accordion'
            },
            
            defaults: {
                collapsible: true,
                border: false,
                cls: 'extro-panel-child'
            },
            
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
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
        });
                
        this.callParent(arguments);
    }
});