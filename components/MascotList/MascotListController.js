({
    doSort: function(cmp, event, helper) {
        helper.sort(cmp, cmp.get("v.sortDirection"));
    },
    onPageRefUpdate: function(cmp, event, helper) {
        var pageRef = event.getParam("value");
        if (pageRef.state.c__direction) {
            cmp.set("v.sortDirection", pageRef.state.c__direction);
        }
        if (pageRef.state.c__viewMode) {
            cmp.set("v.viewMode", pageRef.state.c__viewMode);
        }
    },
    onViewModeChange: function(cmp, event, helper) {
        var viewMode = typeof event.getParam === 'function' ?
            event.getParam("value") : event.currentTarget.value
        if (viewMode) {
            helper.updatePageState(cmp, {
                c__viewMode: viewMode
	        });
        }
    },
    onSortChange: function(cmp, event, helper) {
        var direction = event.currentTarget.value;
        if (direction) {
            helper.updatePageState(cmp, {
                c__direction: direction
	        });
        }
    },
    gotoNew: function(cmp, event, helper) {
        var pageRef = cmp.get("v.pageReference");
        var newPageRef = {
            type: pageRef.type,
            attributes: Object.assign({}, pageRef.attributes, {
                actionName: "new"
            }),
            state: pageRef.state
        };
        cmp.find("navService").navigate(newPageRef);
    },
    gotoList: function(cmp, event, helper) {
        var pageRef = cmp.get("v.pageReference");
        var newPageRef = {
            type: pageRef.type,
            attributes: Object.assign({}, pageRef.attributes, {
                actionName: "list"
            }),
            state: pageRef.state
        };
        cmp.find("navService").navigate(newPageRef);
    },
	init : function(cmp, event, helper) {
		var getMascots= cmp.get("c.getMascots");
        var pageRef = cmp.get("v.pageReference");
        if (pageRef.state.c__viewMode) {
            helper.updateViewMode(cmp, pageRef.state.c__viewMode)
        }
        helper.doAction(getMascots).then($A.getCallback(function(mascots){
            cmp.set("v.mascots", mascots);
            if (pageRef.state.c__view && pageRef.state.c__view.toUpperCase() !== "ALL") {
                cmp.find("navService")
                .navigate({
                    type: "standard__component",
                    attributes: {
                        componentName: "c__MascotCard"
                    },
                    state: {
                        mascotId: pageRef.state.c__view
                    }
                }, true);
            }
            if (pageRef.state.c__direction) {
                helper.sort(cmp, pageRef.state.c__direction);
            }
        }));
	},
})