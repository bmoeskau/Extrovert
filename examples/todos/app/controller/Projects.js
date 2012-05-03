Ext.define('Todo.controller.Projects', {
    extend: 'Ext.app.Controller',
    
    requires: ['Ext.window.MessageBox'],
    
    models: ['Project', 'TaskList', 'Task'],
    
    stores: ['Projects'],
    
    refs: [{
        ref: 'projectsPanel',
        selector: 'todo-projects'
    },{
        ref: 'taskListPanel',
        selector: 'todo-list'
    }],
    
    onLaunch: function() {
        var projectsPanel = this.getProjectsPanel();
        
        projectsPanel.setStore(this.getProjectsStore());
        
        projectsPanel.on({
            'tasklistselect': this.onTaskListSelected,
            'newproject': this.onNewProject,
            'newtask': this.onNewTask,
            scope: this
        });
    },
    
    onTaskListSelected: function(panel, view, rec, domNode) {
        this.getTaskListPanel().setStore(rec.tasks());
    },
    
    onNewProject: function(panel) {
        Ext.Msg.alert('New Project', 'Create a new project');
    },
    
    onNewTask: function(panel) {
        Ext.Msg.alert('New Task', 'Add a new task');
    }
});