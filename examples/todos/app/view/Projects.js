Ext.define('Todo.view.Projects', {
    alias: 'widget.todo-projects',
    extend: 'Ext.panel.Panel',
    
    taskListTpl: [
        '<tpl for=".">',
            '<div class="todo-tasklist">',
                '<div class="name">',
                    '<a href="#">{name}</a>',
                    '<span class="todo-task-count">{[values.tasks.length]}</span>',
                '</div>',
            '</div>',
        '</tpl>'
    ],
    
    initComponent: function() {
        Ext.applyIf(this, {
            title: 'Projects',
            region: 'west',
            collapsible: true,
            split: true,
            width: 240,
            cls: 'todo-main-panel',
            margin: '10 0 10 10',
            
            layout: {
                type: 'accordion',
                multi: true
            },
            
            defaults: {
                collapsible: true,
                border: false,
                autoScroll: true,
                cls: 'todo-project'
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
    
    getProjectConfig: function(project) {
        return {
            // This is a panel that contains a data view bound to
            // this project's set of task lists.
            title: project.data.name,
            layout: 'fit',
            items: [{
                xtype: 'dataview',
                store: project.lists(),
                itemSelector: '.todo-tasklist',
                overItemCls: 'todo-tasklist-hover',
                trackOver: true,
                tpl: this.taskListTpl
            }]
        }
    },
    
    onStoreLoad: function() {
        var me = this;
        
        me.removeAll();
        
        me.store.each(function(project) {
            me.add(me.getProjectConfig(project));
        });
    }
});