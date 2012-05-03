Ext.define('Todo.view.Header', {
    extend: 'Ext.Component',
    
    dock: 'top',
    baseCls: 'todo-header',
    
    initComponent: function() {
        Ext.applyIf(this, {
            region: 'north',
            height: 60,
            html: 'Extrovert ToDo'
        });
                
        this.callParent(arguments);
    },
    
    notifyResize: function(viewportBox) {
        // this.animate({
            // to: {
                // height: viewportBox.width < 800 ? 40 : 60
            // }
        // });
        
        this.setHeight(viewportBox.width < 800 ? 40 : 60);
    }
});