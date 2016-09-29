# Iframe Tester

A simple way to verify if a user's provided link can be embedded in an iframe. It simply try in the background and report on it's failure as an event and soon in a promise.

#Installation

```
npm install iframe_tester
```

#Usage

```
    //simply test for an iframe
    IframeTester.test("http://reddit.com", function(){
            console.log("success");
        }, function(){
            console.log("failure")
        }
    );

    //catch an iframe_failed event
    document.addEventListener('iframe_failed', function(){
        console.log("We received the fail event");
    })

```

#Lisence
See LICENSE file