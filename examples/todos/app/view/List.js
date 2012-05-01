Ext.define('Todo.view.List', {
    alias: 'widget.todo-list',
    extend: 'Ext.panel.Panel',
    
    initComponent: function() {
        Ext.applyIf(this, {
            title: 'To Do',
            region: 'center',
            cls: 'todo-main-panel',
            border: false,
            frame: true,
            margin: '10 10 10 0'
        });
                
        this.callParent(arguments);
    }
});