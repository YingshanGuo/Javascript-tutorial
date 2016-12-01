;(function($){
var DmCurl = function(settings){
		var settings = settings || {}
		var defaultSettings = {
			type: "GET", 
			timeout: 10*1000, 
			headers: {}
		}
		this.settings = $.extend(defaultSettings,settings);
	}
	DmCurl.prototype = {
		
		getHtml : function(settings){
			if(!settings.url) return false;
			var sets = $.extend(this.settings,settings);
			sets.type = "GET";
			sets.contentType = "text/html";
			this.request(sets);
		},

		getJson : function(settings){
			if(!settings.url) return false;
			var sets = $.extend(this.settings,settings);
			sets.type = "GET";
			sets.contentType = "applications/json";
			this.request(sets);
		},


		

		request : function(settings){
			$.ajax(settings);
		}
	}
	window.DmCurl = DmCurl;
})(jQuery);