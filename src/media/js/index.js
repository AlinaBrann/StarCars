import { TweenMax } from "gsap";
import { Draggable } from "gsap/Draggable";
import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { css, each } from "jquery";
global.TweenMax = TweenMax;
global.$ = global.jQuery = require("jquery");
global.Draggable = Draggable;
require("./utils/jqExtensions");
require("slick-carousel");
require("daterangepicker");
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

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
		Popups: require('./modules/Popups'),
		Timer: require('./modules/Timer'),
		Animations: require('./modules/Animations'),
		Tabs: require('./modules/Tabs'),
		SlickSliders: require('./modules/SlickSliders'),
		Datepicker: require('./modules/Datepicker'),
		Filter: require('./modules/Filter'),
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

		
		
		
		$('.button-time-trigger').on('click', function(){
			$(this).toggleClass('_active')
			$(this).parent('.popup-form-time-block').toggleClass('_active')
		})
		$('.checkbox-time-trigger').on('change', function(){
			$(this).parents('.popup-form-time-block').toggleClass('_active')
		})

		$('.rates-table-col__icon').on('click', function(){
			$(this).toggleClass('_active')
			$(this).parents('.rates-table-row').toggleClass('_active')
		})
	});
}();

if (module.hot) {
	module.hot.accept();
}
