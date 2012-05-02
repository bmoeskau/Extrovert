Ext.define('Todo.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'border',
    
    requires: [
        'Todo.view.Header',
        'Todo.view.Projects',
        'Todo.view.List'
    ],
    
    initComponent: function() {
        Ext.apply(this, {
            items: [
                Ext.create('Todo.view.Header'),
                Ext.create('Todo.view.Projects'),
                Ext.create('Todo.view.List')
            ]
        });
                
        this.callParent(arguments);
    }
});