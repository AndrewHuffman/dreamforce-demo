({
    init: function(cmp, event, helper) {
        var navService = cmp.find("navService");
        cmp.set("v.targetCount", Math.round(Math.random() * 100));
        cmp.set("v.error", "");
        var myPageRef = cmp.get("v.pageReference");
        navService.generateUrl(helper.pageReferences.accountHome)
            .then($A.getCallback(function(url) {
                cmp.set("v.accountHomeUrl", url);
            }), $A.getCallback(function(error){
                cmp.set("v.accountHomeUrl", "javascript" + ":alert('unable to generate url')");
                cmp.set("v.error", error.message);
            }));
    },
    
    onTargetCountChange: function(cmp, event, helper) {
        var pageRef = helper.getAddressableCmpPageRef(cmp.get('v.targetCount'));
        var navService = cmp.find("navService");
        navService.generateUrl(pageRef)
        	.then($A.getCallback(function(url) {
                cmp.set("v.cmpUrl", url);
            }), $A.getCallback(function(error){
                cmp.set("v.cmpUrl", "javascript" + ":alert('unable to generate url')");
                cmp.set("v.error", error.message);
            }));
    },
	gotoAccount: function(cmp, event, helper) {
		var navService = cmp.find("navService");
        navService.navigate(helper.pageReferences.accountHome);
	},
    gotoCmp: function(cmp, event, helper) {
        var navService = cmp.find("navService");
        var targetCount = cmp.get("v.targetCount");
        var pageRef = helper.getAddressableCmpPageRef(targetCount);
        navService.navigate(pageRef)
    }
})