//	lib.jsClass.delegatable.js
//	Evadne Wu at Iridia, 2010





JS.Delegatable = new JS.Module({

	/* (Boolean succeeded) */ setDelegate: function(inObject) {
	
		if (inObject === undefined) return false;
	
		try {
		
			JS.Interface.ensure(inObject, (this.delegateProtocol || (this.klass && this.klass.delegateProtocol)));
		
		} catch (exception) {
		
			mono.error(exception);
			return false;
		
		}
		
		this.delegate = inObject;
		return true;
		
	}

});




