Ext.define('Todo.controller.Projects', {
    extend: 'Ext.app.Controller',
    
    requires: ['Ext.window.MessageBox'],
    
    models: ['Project'],
    
    stores: ['Projects'],
    
    refs: [{
        ref: 'projectsPanel',
        selector: 'todo-projects'
    }],
    
    onLaunch: function() {
        var projectsPanel = this.getProjectsPanel();
        
        projectsPanel.setStore(this.getProjectsStore());
        projectsPanel.on('tasklistselect', this.onTaskListSelected);
        projectsPanel.on('newproject', this.onNewProject);
    },
    
    onTaskListSelected: function(panel, view, rec, domNode) {
        Ext.Msg.alert('Task List', 'You selected ' + rec.data.name);
    },
    
    onNewProject: function(panel) {
        Ext.Msg.alert('New Project', 'Create a new project');
    }
});