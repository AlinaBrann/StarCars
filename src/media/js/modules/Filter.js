function Filter() {
	$("[data-parameter]").on("click", function() {
		var val = $(this).attr("data-value"),
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
			var actives = $(this)
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
			var actives = $(this)
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
