import { TweenMax } from "gsap";
import { Draggable } from "gsap/Draggable";
global.TweenMax = TweenMax;
global.$ = global.jQuery = require("jquery");
global.Draggable = Draggable;
require("./utils/jqExtensions");

// prettier-ignore
global.ProjectName = new function ProjectName() { // eslint-disable-line
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
	

		var menu = $('.header-menu-button');
		var players = $('.header-players-button');
		var close = $('.header-menu-close')
		menu.on('click', function(){
			$(this).parents('.header').toggleClass('_menu-opened');
		});
		players.on('click', function(){
			$(this).parents('.header').toggleClass('_players-opened');
		});
		close.on('click', function(){
			$(this).parents('.header').removeClass('_menu-opened _players-opened');
		});
		
		
	});
}();

if (module.hot) {
	module.hot.accept();
}
