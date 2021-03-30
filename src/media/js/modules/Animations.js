const dom = require("../utils/DOM");
import ShowHelper2 from "../helpers/ShowHelper2";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
function Animations() {
	var anchor = "[data-anchor]",
		headerHeight = $("header").outerHeight() + 10,
		delay = 0.6;
	dom.$body.on("click", anchor, function(event) {
		event.preventDefault();
		var $this = $(this),
			href = "#" + $this.data("anchor");
		gsap.to(window, {
			duration: 1,
			scrollTo: {
				y: href,
				offsetY: headerHeight,
				toggleClass: "_active"
			}
		});
		return false;
	});
	$(".header-nav__link:after").css("top", headerHeight);
	const navLinks = $(".rent-terms-nav__item");
	navLinks.each(function() {
		$(this).on("click", e => {
			e.preventDefault();

			var activeSection = "#" + $(this).attr("data-anchor");
			console.log(activeSection);
			gsap.to(window, {
				scrollTo: { duration: 0.5, y: activeSection, offsetY: headerHeight }
			});
		});
	});
	const panels = gsap.utils.toArray("[data-section]");
	panels.forEach((panel, i) => {
		var ancor = panel.id,
			link = $('[data-anchor="' + ancor + '"]');
		ScrollTrigger.create({
			trigger: panel,
			start: '"top ' + (headerHeight + 3) + '"', // when the top of the trigger hits the top of the viewport
			end: "bottom 19%",
			markers: false,
			onLeave: () => {
				navLinks.removeClass("_active");
			},
			onLeaveBack: () => {
				navLinks.removeClass("_active");
			},
			onEnterBack: () => {
				link.addClass("_active");
				console.log(link);
			},
			onEnter: () => {
				link.addClass("_active");
			}
		});
	});
	ShowHelper2.setViewpostScale(1);
	ScrollTrigger.create({
		trigger: ".rent-terms-nav",
		start: "top top+=" + headerHeight,
		endTrigger: ".rent-terms",
		end: "bottom bottom",
		pin: true,
		pinSpacing: false,
		scrub: 1
	});
	const $targets = $("[data-auto-show]");

	if ($targets.length) {
		TweenMax.set($targets, {
			alpha: 0
		});

		ShowHelper2.staggerWatch(
			$targets,
			function(state, target) {
				if (state) {
					target.removeAttribute("data-auto-show");

					ShowHelper2.unwatch(target);
					TweenMax.fromTo(
						target,
						0.855,
						{
							y: 15,
							alpha: 0
						},
						{
							y: 0,
							alpha: 1,
							force3D: true,
							delay: delay,
							clearProps: "all"
						}
					);
				}
			},
			true,
			false,
			55
		);
	}

	const $targetsRight = $("[data-auto-show-right]");
	if ($targetsRight.length) {
		TweenMax.set($targetsRight, {
			alpha: 0
		});
		ShowHelper2.staggerWatch(
			$targetsRight,
			function(state, target) {
				if (state) {
					target.removeAttribute("data-auto-show-right");
					ShowHelper2.unwatch(target);
					TweenMax.fromTo(
						target,
						0.855,
						{
							x: 15,
							alpha: 0
						},
						{
							x: 0,
							alpha: 1,
							force3D: true,
							delay: delay,
							clearProps: "all"
						}
					);
				}
			},
			true,
			false,
			55
		);
	}
	const $targetsLeft = $("[data-auto-show-left]");

	if ($targetsLeft.length) {
		TweenMax.set($targetsLeft, {
			alpha: 0
		});
		ShowHelper2.staggerWatch(
			$targetsLeft,
			function(state, target) {
				if (state) {
					target.removeAttribute("data-auto-show-left");
					ShowHelper2.unwatch(target);
					TweenMax.fromTo(
						target,
						0.855,
						{
							x: -15,
							alpha: 0
						},
						{
							x: 0,
							alpha: 1,
							force3D: true,
							delay: delay,
							clearProps: "all"
						}
					);
				}
			},
			true,
			false,
			55
		);
	}
	ShowHelper2.start();
}

export default new Animations();
