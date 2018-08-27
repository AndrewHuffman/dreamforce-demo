({
	getPageRef : function(cmp) {
		return cmp.get('v.pageReference')
	},
    getCount: function(cmp) {
        return this.getPageRef(cmp).state.c__Count;
    },
    updatePageState: function(cmp, newState) {
        var pageRef = this.getPageRef(cmp);
		var newPageRef = {
            type: pageRef.type,
            attributes: pageRef.attributes,
            state: Object.assign({}, pageRef.state, newState)
		};
		cmp.find("navService").navigate(newPageRef, true);
	},
    
    updateCountLabel: function(cmp) {
		var count = this.getCount(cmp);
        cmp.set("v.count", !isNaN(count) ? count 0)
    }
})