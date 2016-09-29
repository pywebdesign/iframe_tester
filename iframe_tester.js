(function(){
	events = {
		failed:  "iframe_failed",
		succeed: "iframe_succeed"
	}

	window.IframeTester = {
		test: function(url, success, failed){
			var iframe = document.createElement('iframe');

			iframe.onload = function() {
				if(iframe.contentWindow.length == 0){
					//It failed
					var event = new Event(events.failed);
					document.dispatchEvent(event);
					if(typeof(failed) == 'function'){
						failed(event, iframe)
					}
				}else{
					//it didn't failed
					var event = new Event(events.succeed);
					document.dispatchEvent(event);
					if(typeof(success) == 'function'){
						success(event, iframe)
					}
				}
			};

			iframe.src = url;
			iframe.style.opacity = "0";
			iframe.style.position = "fixed";
			
			document.body.appendChild(iframe);
		}
	}
})();
