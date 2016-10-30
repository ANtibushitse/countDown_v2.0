(function(){
	"use strict";
	
	var app ={


		secondes:90, 
		intervalId:null,
		active:true, 

		init:function(){
			this.listeners();
	
		},

		listeners:function(){
			$("#bttnStart").on("click",this.start.bind(this));
			$("#bttnStop").on("click", this.stop.bind(this));
			$("#bttnReset").on("click", this.resr.bind(this));  
		},


		start:function(){
			this.timerOn(); 
			this.launcherinterval(); 
		},


		launcherinterval:function(){
			this.intervalId= setInterval(this.interval.bind(this),1000)
		},


		interval:function() {
			this.seconde--; 
			this.updateView(); 

			if(this<1){
				clearInterval(this.intervalId); 
			}
		},	

		updateView:function(){
			var Secondes = this.seconde%60;
			var Minutes = Math.floor(this.Secondes/60); 
			if (Secondes < 10 ) {
				Secondes="0"+ Secondes
			}
			if (Minutes <10 ){
				Minutes="0" +Minutes
			}
			$("#Min").html(Minutes); 
			$("Sec").html(Secondes); 

		}, 	

		timerOn:function(){

			var min = $("#Min").val(); 
			var sec = $("#Sec").val(); 
			this.Secondes = parseInt(sec, 10)+parseInt(min, 10)*60;
		} ,

		reset:function(){
			this.start(); 
		}, 

		app.init();

	})(); 
