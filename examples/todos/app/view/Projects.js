Ext.define('Todo.view.Projects', {
    alias: 'widget.todo-projects',
    extend: 'Ext.panel.Panel',
    
    initComponent: function() {
        Ext.applyIf(this, {
            title: 'Projects',
            region: 'west',
            collapsible: true,
            split: true,
            width: 200,
            cls: 'todo-main-panel',
            margin: '10 0 10 10',
            
            layout: {
                type: 'accordion'
            },
            
            defaults: {
                collapsible: true,
                border: false,
                cls: 'extro-panel-child'
            },
            
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    text: 'Foo',
                    scale: 'medium'
                }]
            }]
        });
                
        this.callParent(arguments);
    },
    
    setStore: function(store) {
        this.store = store;
        this.store.on('load', this.onStoreLoad, this);
    },
    
    onStoreLoad: function() {
        var me = this;
        
        me.removeAll();
        
        me.store.each(function(project) {
            project.lists().each(function(list) {
                console.log(list.data.name);
                
                list.tasks().each(function(task) {
                    console.log(' - '+task.data.text)
                })
            });
            
            me.add({
                title: project.data.name
            });
        });
    }
});