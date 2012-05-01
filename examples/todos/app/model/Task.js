Ext.define('Todo.model.Task', {
    extend: 'Ext.data.Model',
    
    belongsTo: 'Todo.model.TaskList',
    
    fields: [
        'id',
        'text',
        'due',
        'done'
    ]
});
