Ext.define('Todo.store.Projects', {
    extend: 'Ext.data.Store',
    model: 'Todo.model.Project',
    
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'resources/data/projects.json'
    }
});