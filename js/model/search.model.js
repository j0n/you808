if(typeof window.y808 != 'undefined'){window.y808 = {}; }
if(typeof window.y808.search != 'undefined'){window.y808.search = {}; }

window.y808.search.Model = Backbone.Model.extends({
	search:function(word){
		this.currentQueryWord = word;
		var start = 0;// this.page * this.maxResult;
		var searchUrl = "http://api.soundcloud.com/tracks.json?limit=" + this.maxResult;
		searchUrl += "&offset=" + start + "&q=" + this.currentQueryWord+"&consumer_key="+this.consumer_key+"&filter=streamable&callback=?";
		$.jsonp({
			url:searchUrl,
			success: function(data){
				if(data.length != 0){ 
					that.feedResult[that.page] = data;
					tuneset.service.sendEvent("SC_SEARCH_RESPONSE", data);
				}   
			},  
			error: function(){
				console.log("error on soundcloud get page");
		       }   
		}); 
	}
});
