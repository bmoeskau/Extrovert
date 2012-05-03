Ext.define('Todo.view.Projects', {
    alias: 'widget.todo-projects',
    extend: 'Ext.panel.Panel',
    
    newProjectText: 'New Project',
    newProjectIconCls: 'todo-btn-new-project',
    
    newTaskText: 'New Task',
    newTaskIconCls: 'todo-btn-new-task',
    
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
        var me = this;
        
        Ext.applyIf(me, {
            title: 'Projects',
            region: 'west',
            collapsible: true,
            split: true,
            width: 400,
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
                dock: 'left',
                cls: 'todo-main-toolbar',
                itemId: 'mainToolbar',
                
                items: [{
                    text: me.newProjectText,
                    tooltip: me.newProjectText,
                    itemId: 'newProjectButton',
                    scale: 'large',
                    handler: me.onNewProjectClick,
                    scope: me
                },{
                    text: me.newTaskText,
                    tooltip: me.newTaskText,
                    itemId: 'newTaskButton',
                    scale: 'large',
                    handler: me.onNewTaskClick,
                    scope: me
                }]
            }]
        });
        
        me.addEvents(
            'tasklistselect',
            'newproject',
            'newtask'
        );
                
        me.callParent(arguments);
    },
    
    setStore: function(projectStore) {
        this.store = projectStore;
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
                tpl: this.taskListTpl,
                listeners: {
                    'itemclick': this.onItemClick,
                    scope: this
                }
            }]
        }
    },
    
    notifyResize: function(viewportBox) {
        // this.animate({
            // to: {
                // width: viewportBox.width < 800 ? 200 : 400
            // }
        // });
        
        var me = this,
            lessThan800 = viewportBox.width < 800;
        
        me.setWidth(lessThan800 ? 220 : 400);
        
        me.child('#mainToolbar').items.each(function(button) {
            switch (button.itemId) {
                case 'newProjectButton':
                    button.setText(lessThan800 ? '' : me.newProjectText);
                    button.setIconCls(lessThan800 ? me.newProjectIconCls : '');
                    break;
                
                case 'newTaskButton':
                    button.setText(lessThan800 ? '' : me.newTaskText);
                    button.setIconCls(lessThan800 ? me.newTaskIconCls : '');
                    break;
            }
        });
    },
    
    onItemClick: function(view, rec, domNode) {
        this.fireEvent('tasklistselect', this, view, rec, domNode);
    },
    
    onNewProjectClick: function(btn, e) {
        this.fireEvent('newproject', this);
    },
    
    onNewTaskClick: function(btn, e) {
        this.fireEvent('newtask', this);
    },
    
    onStoreLoad: function() {
        var me = this;
        
        me.removeAll();
        
        me.store.each(function(project) {
            me.add(me.getProjectConfig(project));
        });
    }
});