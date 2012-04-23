Ext.define('Todo.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'fit',
    
    requires: [

    ],
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    xtype: 'panel',
                    id: 'todo-viewport',
                    border: false,
                    bodyBorder: false,
                    
                    layout: {
                        type: 'fit'
                    },
                    
                    dockedItems: [
                        Ext.create('Todo.view.Header'),
                        Ext.create('Todo.view.SideBar')
                    ],
                    
                    items: [
                        Ext.create('Todo.view.List')
                    ]
                }
            ]
        });
                
        me.callParent(arguments);
    }
});