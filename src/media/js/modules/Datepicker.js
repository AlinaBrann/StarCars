// var date = new Date(2020, 6, 12);
var $start = $("[data-start]"),
	$startDay = $start.find(".day"),
	$startDayName = $start.find(".day-name"),
	$startMonth = $start.find(".month"),
	$end = $("[data-end]"),
	$endDay = $end.find(".day"),
	$endDayName = $end.find(".day-name"),
	$endMonth = $end.find(".month"),
	$total = $("[data-datepicker-total]"),
	$lang = document.documentElement.lang,
	$ru = {
		daysOfWeek: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
		monthNames: [
			"январь",
			"февраль",
			"март",
			"апрель",
			"май",
			"июнь",
			"июль",
			"август",
			"сентябрь",
			"октябрь",
			"ноябрь",
			"декабрь"
		],
		firstDay: 1,
		cancelLabel: "Закрыть"
	};
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

$startDay.text(today.getDate());
$startDayName.text($ru.daysOfWeek[today.getDay()]);
$startMonth.text($ru.monthNames[today.getMonth()]);

$endDay.text(tomorrow.getDate());
$endDayName.text($ru.daysOfWeek[tomorrow.getDay()]);
$endMonth.text($ru.monthNames[tomorrow.getMonth()]);
$(".datepicker").daterangepicker(
	{
		locale: $ru,
		autoApply: true,
		minDate: today,
		opens: "left"
	},
	function(start, end, label) {
		var a = new Date(start);
		var b = new Date(end);

		$('input[name="datefilter-start"]').val(start.format("MM/DD/YYYY"));
		$('input[name="datefilter-end"]').val(end.format("MM/DD/YYYY"));
		let days = $(".in-range");
		$total.text(days.length + 1);
		$startDay.text(start.format("DD"));
		$startDayName.text($ru.daysOfWeek[a.getDay()]);
		$startMonth.text($ru.monthNames[a.getMonth()]);

		$endDay.text(end.format("DD"));
		$endDayName.text($ru.daysOfWeek[b.getDay()]);
		$endMonth.text($ru.monthNames[b.getMonth()]);
	}
);
