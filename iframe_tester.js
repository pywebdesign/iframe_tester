
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
							//It failed, do something
							var event = new Event(events.failed);
							document.dispatchEvent(event);
						}else{
							//it didn't failed
							var event = new Event(events.succeed);
							document.dispatchEvent(event);
						}
					}; // before setting 'src'

					iframe.src = url;
					iframe.style.opacity = "0";
					iframe.style.position = "fixed";
					//it seams we really need to append the iframe sadly
					document.body.appendChild(iframe);
				}
			}
		})();
