(function(){
	events = {
		failed: "iframe_failed",
		succeed:"iframe_succeed"
	}

	window.IframeTester = {
		test: function(url){
			var iframe = document.createElement('iframe');

			iframe.onload = function() {
				if(iframe.contentWindow.length == 0){
					//It failed
					var event = new Event(events.failed);
					document.dispatchEvent(event);
				}else{
					//it didn't failed
					var event = new Event(events.succeed);
					document.dispatchEvent(event);
				}
			};

			iframe.src = url;
			iframe.style.opacity = "0";
			iframe.style.position = "fixed";
			
			document.body.appendChild(iframe);
		}
	}
})();
