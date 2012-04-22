Ext.define('Todo.view.List', {
    alias: 'widget.todo-list',
    extend: 'Ext.panel.Panel',
    
    initComponent: function() {
        Ext.apply(this, {
            title: 'To Do',
            border: false
        });
                
        this.callParent(arguments);
    }
});