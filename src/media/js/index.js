import { TweenMax } from "gsap";
import { Draggable } from "gsap/Draggable";
global.TweenMax = TweenMax;
global.$ = global.jQuery = require("jquery");
global.Draggable = Draggable;
require("./utils/jqExtensions");
require("slick-carousel");
require("daterangepicker");

// prettier-ignore
global.ProjectName = new function StarCars() { // eslint-disable-line
	this.env = require('./utils/ENV');
	this.dom = require('./utils/DOM');
	this.utils = require('./utils/Utils');

	this.classes = {
		Callback: require('./classes/Callback')
	};

	this.helpers = {};
	this.modules = {
		Select: require('./modules/Select'),
		Popups: require('./modules/Popups'),
		Inputs: require('./modules/Inputs'),
		Tabs: require('./modules/Tabs'),
		SlickSliders: require('./modules/SlickSliders'),
		Datepicker: require('./modules/Datepicker'),
		
		// Filter: require('./modules/Filter'),
	};

	// Startup
	
	$(() => {
		// Remove _loading modificator
		this.dom.$html.removeClass('_loading');
		

		let copyright = new Date().getFullYear();

		$('.footer-copyright__year').text(copyright);

		$('[data-marker-list]').each(function() {
			$(function() {
				var lastElement = false,
				child = $(this).find('[data-marker-item]');
				child.each(function() {
					if (lastElement && lastElement.offset().top != $(this).offset().top) {
						$(lastElement).addClass('_nobullet');
					}
					lastElement = $(this);
				}).last().addClass('_nobullet');
			});
		});
		var fActive;
		function filterColor(value){
			if(fActive != value){
				var container = $('[data-catalog]'),
				car = container.find('.card');
				car.parent('.card-wrapper').hide()
				.filter(function(elem){
					return $(this).attr("data-type") === value || $(this).attr("data-brand") === value
				}).parent('.card-wrapper').show();
				
				fActive = value;
			}
		   }
		//    $('[data-parameter]').each(function(){
		// 		$(this).on('click', function(){
		// 			var attr = $(this).attr('data-value')
		// 			console.log(attr);
		// 			filterColor(attr);
		// 		} )
		//    })
		   $('[data-parameter]').on('click', function(){
			   	var val = $(this).attr('data-value'),
				   container = $('[data-catalog]'),
				   cardWrapper = container.find('.card-wrapper');
				$(this).siblings('[data-parameter]').removeClass('_active')
				$(this).addClass('_active')
				if (val === 'all') {
					cardWrapper.removeClass('_hide').addClass('_show');
				} else {
					cardWrapper.addClass('_hide').removeClass('_show');
					cardWrapper.find("[data-type=" + val +"]").parent(cardWrapper).removeClass('_hide').addClass('_show');
					cardWrapper.find("[data-brand=" + val +"]").parent(cardWrapper).removeClass('_hide').addClass('_show');
				}
				if ($('.card-wrapper._show').length == 0) {
					container.find('.no-result').text('No results')
				}
		  	});
			  
			
	});
}();

if (module.hot) {
	module.hot.accept();
}
