//	lib.jsClass.delegatable.js
//	Evadne Wu at Iridia, 2010





JS.Delegatable = new JS.Module({

	extend: {
	
		extended: function (base) {
		
			base.extend({
			
				/* (Boolean succeeded) */ setDelegate: function(inObject) {
				
					if (inObject === undefined) return false;
				
					try {
					
						JS.Interface.ensure(inObject, (this.klass && this.klass.delegateProtocol));
					
					} catch (exception) {
					
						return false;
					
					}
					
					this.delegate = inObject;
					return true;
					
				}
			
			});
		
		}
	
	}

});




