Ext.define('Todo.view.SideBar', {
    alias: 'widget.todo-sidebar',
    extend: 'Ext.panel.Panel',
    
    initComponent: function() {
        Ext.apply(this, {
            title: 'Projects',
            dock: 'left',
            width: 180,
            border: false,
            cls: 'todo-sidebar'
            // tools: [{
                // type: 'left',
                // handler: function(e, toolEl, header) {
                // }
            // }]
        });
                
        this.callParent(arguments);
    }
});