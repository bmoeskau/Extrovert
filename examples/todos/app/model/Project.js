Ext.define('Todo.model.Project', {
    extend: 'Ext.data.Model',
    
    requires: [
        'Todo.model.TaskList',
        'Ext.data.association.HasMany',
        'Ext.data.association.BelongsTo'
    ],
    
    hasMany: {
        name: 'lists',
        model: 'Todo.model.TaskList'
    },

    fields: [
        'id',
        'name'
    ]
});