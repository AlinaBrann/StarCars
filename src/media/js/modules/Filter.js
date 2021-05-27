function Filter() {
	const slisedItem = 3;
	const limit = 6;
	let fixedFilter = $(".filter-fixed"),
		filter = fixedFilter.find(".filter-parameters"),
		filterText = fixedFilter.find(".filter-parameters._text-type"),
		filterImage = fixedFilter.find(".filter-parameters._image-type"),
		filterItemImage = filterImage.find(".filter-parameters-list__item"),
		filterItemText = filterText.find(".filter-parameters-list__item");
	if (filterItemText.length >= limit && $(window).width() >= 869) {
		filterText.find(".show-more").hide();
		filterItemImage.slice(slisedItem).addClass("_hidden");
		filterItemText.slice(slisedItem).addClass("_hidden");
		filterText.find(".show-more").show();
	}
	if (filterItemImage.length >= limit && $(window).width() >= 869) {
		filterImage.find(".show-more").hide();
		filterItemText.slice(slisedItem).addClass("_hidden");
		filterItemImage.slice(slisedItem).addClass("_hidden");
		filterImage.find(".show-more").show();
	}
	if (
		(filterItemText.length >= limit && $(window).width() >= 869) ||
		(filterItemImage.length >= limit && $(window).width() >= 869)
	) {
		filter.each(function() {
			var childs = $(this).find(".filter-parameters-list__item._hidden"),
				length = childs.length;
			console.log(length);
			$(this)
				.find(".show-more span")
				.text(length);
		});
	}

	$(".show-more").on("click", function() {
		let items = $(this)
			.parents(".filter-parameters")
			.find(".filter-parameters-list__item").length;
		if (items >= limit) {
			$(this)
				.hide()
				.parents(".filter-parameters")
				.find(".filter-parameters-list__item")
				.slice(slisedItem)
				.toggleClass("_hidden");
			$(this)
				.parent(".filter-parameters")
				.siblings(".filter-parameters")
				.find(".filter-parameters-list__item")
				.slice(slisedItem)
				.addClass("_hidden");
			$(
				`.filter-parameters-list__item:not(._hidden):nth-of-type(${slisedItem})`
			).toggleClass("_nobullet");
		} else {
			$(this)
				.hide()
				.parents(".filter-parameters")
				.find(".filter-parameters-list__item")
				.slice(2)
				.toggleClass("_hidden");
			$(this)
				.parent(".filter-parameters")
				.siblings(".filter-parameters")
				.find(".filter-parameters-list__item")
				.slice(2)
				.addClass("_hidden");
			$(
				".filter-parameters-list__item:not(._hidden):nth-of-type(2)"
			).toggleClass("_nobullet");
		}

		let otherItem = $(this)
				.parent(".filter-parameters")
				.siblings(".filter-parameters")
				.find(".filter-parameters-list__item._hidden"),
			otherItemLength = otherItem.length;
		$(this)
			.parent(".filter-parameters")
			.siblings(".filter-parameters")
			.find(".show-more")
			.show()
			.find("span")
			.text(otherItemLength);
	});

	$(".filter-trigger").on("click", function() {
		$(".filter-fixed").toggleClass("_open");
	});
	$(".filter-backdrop").on("click", function() {
		$(".filter-fixed").removeClass("_open");
	});
	$("[data-parameter]").on("click", function() {
		let val = $(this).attr("data-value"),
			container = $("[data-catalog]"),
			cardWrapper = container.find(".card-wrapper");
		$("[data-parameter]").removeClass("_active");

		$(this).addClass("_active");
		if (val === "all") {
			cardWrapper.removeClass("_hide").addClass("_show");
		} else {
			cardWrapper.addClass("_hide").removeClass("_show");
			cardWrapper.each(function() {
				if (
					$(this)
						.find(".card")
						.attr("data-type") == val ||
					$(this)
						.find(".card")
						.attr("data-brand") == val
				) {
					$(this)
						.removeClass("_hide")
						.addClass("_show");

					console.log(val);
				}
			});
			// if (cardWrapper.find('.card').attr('data-type') == val || cardWrapper.find('.card').attr('data-brand')) {
			// 	console.log(val);
			// }
			// cardWrapper.find("[data-type=" + val + "]").parent(cardWrapper).removeClass('_hide').addClass('_show');
			// cardWrapper.find("[data-brand=" + val + "]").parent(cardWrapper).removeClass('_hide').addClass('_show');
		}
		if ($(".card-wrapper._show").length == 0) {
			container.find(".no-result").show();
		} else {
			container.find(".no-result").hide();
		}
	});
	$(".filter-main")
		.find("[data-parameter]")
		.on("click", function() {
			let actives = $(this)
				.parents(".filter-main")
				.find("[data-parameter]._active");
			$(".filter-fixed")
				.find("[data-parameter]")
				.removeClass("_active");
			actives.each(function() {
				var activeVal = $(this).attr("data-value");
				$(".filter-fixed")
					.find("[data-value=" + activeVal + "]")
					.addClass("_active");
			});
		});
	$(".filter-fixed")
		.find("[data-parameter]")
		.on("click", function() {
			let actives = $(this)
				.parents(".filter-main")
				.find("[data-parameter]._active");
			$(".filter-main")
				.find("[data-parameter]")
				.removeClass("_active");
			actives.each(function() {
				var activeVal = $(this).attr("data-value");
				$(".filter-main")
					.find("[data-value=" + activeVal + "]")
					.addClass("_active");
			});
		});
}
module.exports = new Filter();
