Ext.define('Todo.view.Header', {
    extend: 'Ext.Component',
    
    dock: 'top',
    baseCls: 'todo-header',
    
    initComponent: function() {
        Ext.applyIf(this, {
            html: 'Extrovert ToDo'
        });
                
        this.callParent(arguments);
    }
});