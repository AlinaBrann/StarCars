import { TweenMax } from "gsap";
import { Draggable } from "gsap/Draggable";
global.TweenMax = TweenMax;
global.$ = global.jQuery = require("jquery");
global.Draggable = Draggable;
require("./utils/jqExtensions");

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
	};

	// Startup
	$(() => {
		// Remove _loading modificator
		this.dom.$html.removeClass('_loading');
		
		let copyright = new Date().getFullYear();

		$('.footer-copyright__year').text(copyright);
		$(function() {
			var lastElement = false;
			$("._text-type .filter-parameters-list__item").each(function() {
				if (lastElement && lastElement.offset().top != $(this).offset().top) {
					$(lastElement).addClass("_nobullet");
				}
				lastElement = $(this);
			}).last().addClass("_nobullet");
		});
	});
}();

if (module.hot) {
	module.hot.accept();
}
