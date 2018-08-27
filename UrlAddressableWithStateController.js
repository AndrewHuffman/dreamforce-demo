({
    init : function(cmp, event, helper) {
        helper.updateCountLabel(cmp);
    },
    
    onPageRefCommitted: function(cmp, event, helper) {
        helper.updateCountLabel(cmp);
    },
    
	goHome : function(cmp, event, helper) {
        var homePageRef = {
            type: "standard__namedPage",
            attributes: {
                pageName: "home"
            }
        };
        cmp.find("navService").navigate(homePageRef);
	},
    
    countUp : function(cmp, event, helper) {
        var count = helper.getCount(cmp);
        var newState = {
            c__Count: ++count
        };
        helper.updatePageState(cmp, newState);
    },
    
    countDown : function(cmp, event, helper) {
        var count = helper.getCount(cmp);
        var newState = {
            c__Count: --count
        };
        helper.updatePageState(cmp, newState);
    },
    
    resetCount : function(cmp, event, helper) {
        var count = helper.getCount(cmp);
        var newState = {
            c__Count: 0
        };
        helper.updatePageState(cmp, newState);
    }
})