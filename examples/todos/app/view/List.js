Ext.define('Todo.view.List', {
    alias: 'widget.todo-list',
    extend: 'Ext.panel.Panel',
    
    initComponent: function() {
        Ext.apply(this, {
            title: 'To Do',
            border: false,
            frame: true,
            flex: 1,
            margin: '12 12 12 0'
        });
                
        this.callParent(arguments);
    }
});