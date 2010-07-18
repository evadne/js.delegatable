//	lib.jsClass.delegatable.js
//	Evadne Wu at Iridia, 2010





JS.Delegatable = new JS.Module({

	/* (void) */ setDelegate: function(inObject) {
	
		try {
		
			JS.Interface.ensure(inObject, this.delegateProtocol);
		
		} catch (exception) {
		
			return mono.die(mono.error(exception));
		
		}
		
		this.delegate = inObject;
		
	}

});




