Ext.define('Todo.model.TaskList', {
    extend: 'Ext.data.Model',
    
    requires: [
        'Todo.model.Task',
        'Ext.data.association.HasMany',
        'Ext.data.association.BelongsTo'
    ],
    
    hasMany: {
        name: 'tasks',
        model: 'Todo.model.Task'
    },

    fields: [
        'id',
        'name'
    ]
});