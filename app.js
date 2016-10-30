(function(){ 
	"use strict";
	console.log("yeah right")
	var app ={

		timerinseconde:90, 
		intervalId:null,
		active:true, 

		init:function(){
			this.listeners();
			this.launcherinterval(); 
		},
		listeners:function(){
			$("#bttnStart").on("click",this.start.bind(this));
			
		},
		start:function(){
			this.launcherinterval(); 
		},	
		launcherinterval:function(){
			this.intervalId= setInterval(this.interval.bind(this),1000);

		},
		interval:function(){
			this.seconde--; 
			this.updateView(); 

			if(this<1){
				clearInterval(this.intervalId); 
			}
			console.log("décrementation embned")
		},	

		updateView:function(){
			var timeinSeconde = this.timerinseconde%60;
			var timmeinMinutes = Math.floor(.timerinseconde*60);

		}, 	  
	}; 


	app.init();

})(); 	