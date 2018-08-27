({
    pageReferences: {
        accountHome: {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
			    actionName: 'list'
        	},
          state: {
		    filterName: 'Recent'
          }
    	},
        addressableCmp: {
            type: "standard__component",
            attributes: {
                componentName: "c__UrlAddressableWithState"
            },
            state: {
                c__Count: 0
            }
        }
    },
    getAddressableCmpPageRef: function(count) {
        var pageRef = this.pageReferences.addressableCmp;
        pageRef.state.c__Count = count;
        return pageRef;
    }
})