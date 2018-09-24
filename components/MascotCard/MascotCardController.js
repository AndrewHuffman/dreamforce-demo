({
    init: function(cmp, event, helper) {
        var mascot = cmp.get("v.mascot");
        var pageRef = cmp.get("v.pageReference");
        if (pageRef && pageRef.state.mascotId) {
            var getMascot = cmp.get("c.getMascot");
            getMascot.setParams({
                name: pageRef.state.mascotId
            });
            helper
            .doAction(getMascot)
            .then($A.getCallback(function(mascot){
                cmp.set("v.mascot", mascot);
                helper.update(cmp);
            }));
        } else if (mascot) {
            helper.update(cmp);
        }
    },
    onChange: function(cmp, event, helper) {
        helper.update(cmp);
    },
    onPageRefChange: function(cmp, event, helper) {
        var pageRef = event.getParam("value");
        if (pageRef && pageRef.state && pageRef.state.mascotId) {
            var getMascot = cmp.get("c.getMascot");
            getMascot.setParams({
                name: pageRef.state.mascotId
            });
            helper.doAction(getMascot).then($A.getCallback(function(mascot) {
                cmp.set("v.mascot", mascot);
                helper.update(cmp);
            }));
        }
    },
    handleRecordUpdated: function(cmp, event, helper) {
        alert('updated');
        helper.update(cmp);
    },
    viewCard: function(cmp, event, helper) {
        var mascotId = cmp.get("v.mascot").Id;
        cmp
        .find("navService")
        .navigate({
            type: "standard__component",
            attributes: {
                componentName: "c__MascotCard"
            },
            state: {
                mascotId: mascotId
            }
        })
    },
    goHome: function(cmp, event, helper) {
        cmp
        .find("navService")
        .navigate({
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Mascot__c",
                actionName: "home"
            }
        })
    }
})