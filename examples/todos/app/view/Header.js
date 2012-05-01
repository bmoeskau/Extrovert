Ext.define('Todo.view.Header', {
    extend: 'Ext.Component',
    
    dock: 'top',
    baseCls: 'todo-header',
    
    initComponent: function() {
        Ext.applyIf(this, {
            region: 'north',
            height: 60,
            html: 'Extrovert ToDo'
        });
                
        this.callParent(arguments);
    }
});