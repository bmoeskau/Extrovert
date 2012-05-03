Ext.define('Todo.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'border',
    
    requires: [
        'Todo.view.Header',
        'Todo.view.Projects',
        'Todo.view.List'
    ],
    
    minWidthCls: 'extro-min-width',
    minHeightCls: 'extro-min-height',
    maxWidthCls: 'extro-max-width',
    maxHeightCls: 'extro-max-height',
    
    initComponent: function() {
        var me = this;
        
        me.header = Ext.create('Todo.view.Header');
        me.projectsPanel = Ext.create('Todo.view.Projects');
        me.listPanel = Ext.create('Todo.view.List');
                
        Ext.apply(me, {
            items: [
                me.header,
                me.projectsPanel,
                me.listPanel
            ],
            
            listeners: {
                'resize': me.onResize,
                scope: me
            }
        });
                
        me.callParent(arguments);
    },
    
    onResize: function(vp, width, height, oldWidth, oldHeight, e) {
        var box = {
                width: width,
                height: height,
                oldWidth: oldWidth,
                oldHeight: oldHeight
            },
            min800Cls = this.minWidthCls + '-' + 800;
        
        if (box.width < 800) {
            this.el.addCls(min800Cls);
        }
        else {
            this.el.removeCls(min800Cls);
        }
        
        this.header.notifyResize(box);
        this.projectsPanel.notifyResize(box);
        this.listPanel.notifyResize(box);
    }
});