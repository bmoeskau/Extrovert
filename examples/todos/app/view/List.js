Ext.define('Todo.view.List', {
    alias: 'widget.todo-list',
    extend: 'Ext.panel.Panel',
    
    noTasksText: 'No tasks',
    
    initComponent: function() {
        Ext.applyIf(this, {
            title: 'To Do',
            region: 'center',
            cls: 'todo-main-panel',
            border: false,
            frame: true,
            margin: '10 10 10 0',
            layout: 'fit',
            
            items: [{
                xtype: 'grid',
                itemId: 'taskGrid',
                cls: 'todo-task-grid',
                store: [],
                
                viewConfig: {
                    emptyText: '<div class="extro-empty-text">' + this.noTasksText + '</div>',
                    deferEmptyText: false
                },
                
                columns: [{
                    text: 'Due',
                    width: 120,
                    dataIndex: 'due'
                },{
                    text: 'Task',
                    flex: 1,
                    dataIndex: 'text'
                }]
            }]
        });
                
        this.callParent(arguments);
    },
    
    setStore: function(taskStore) {
        this.child('#taskGrid').reconfigure(taskStore);
    }
});