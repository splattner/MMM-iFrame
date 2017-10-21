/* global Module */

/* Magic Mirror
 * Module: iFrame
 *
 * By Ben Williams http://desertblade.com
 * MIT Licensed.
 */

Module.register("MMM-iFrame",{
		// Default module config.
		defaults: {
				height:"300px",
				width:"100%",
                updateInterval: 0.5 * 60 * 1000,
                url: ["http://magicmirror.builders/"],
                scrolling: "no",
                forceUpdateInterval: 1000 * 60 * 60,
                noCacheStringDelimiter: "?",
		},

        start: function () {
                self = this;
                var count = 0;
                if (this.config.url.length > 1 ) {
                      setInterval( function () { 
                         self.updateDom(1000);
                         console.log('update' + count++)
                         }, this.config.updateInterval);
                } else {
                	setInterval( function () { 
                         self.updateDom(1000);
                         }, this.config.forceUpdateInterval);
                }


	},

	getRandomInt: function (min, max) {
    	return Math.floor(Math.random() * (max - min)) + min;
	},

	resume: function() {
		console.log("Resuming");
		return this.getDom();
	},

        // Override dom generator.
	getDom: function() {
		var iframe = document.createElement("IFRAME");
		iframe.style = "border:0"
		iframe.width = this.config.width;
		iframe.height = this.config.height;
        iframe.scrolling = this.config.scrolling;
        var url_index = 0;
		futureURL = this.config.url[url_index] + this.config.noCacheStringDelimiter + "date=" + Date.now();
        console.log("Reload IFrame: " + futureURL);
		iframe.src = futureURL;
		return iframe;
	}

});
