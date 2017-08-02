// console.log('Карточки в хедере');

var format1 = function (date1) {
	var month1 = (date1.getMonth() + 1).toString();
	return date1.getUTCFullYear() + "-" + (month1.length === 1 ? "0" + month1 : month1) + "-" + date1.getUTCDate();
}

$('[id^="cards-item-"]').each(function() {
	var date1 = new Date($(this).attr('datahead')),
	now1 = new Date();
	day1 = now1.getDay();
	date1 = new Date(date1.setHours(24)); //16
	everyday = $('.card-everyday-wrapper');

	if (date1 < now1) {
		// console.log(format1(date1), 'прошлое в хедер');
		$(this).removeClass('card-active');
		$(this).addClass('card-completed');
		$(this).parent().parent().remove();
	} else if(format1(now1) !== $(this).attr('datahead')) {
		// console.log(format1(date1), 'будущее хедер');
		$(this).removeClass('card-active');
		$(this).removeClass('card-completed');
		$(this).addClass('card-disable');
	}

// if ($(".card-completed")) {
// 	$(this).parent().parent().remove();
// }

if(format1(now1) === $(this).attr('datahead')) {
	// console.log(format1(date1), 'сегодня хедер');
	$(this).removeClass('card-completed');
	$(this).addClass('card-active');
	$(this).find(".card-bottom__link").html("Перейти к покупке");
	$(this).find(".card-middle__promocode").css("display", "block");
}

});


var everydays = everyday.find('.col-lg-18').find('.card-wrapper').find('.card-default');
		// everyday1s.removeClass('card-completed');

		//everyday1s.find(".card-middle__promocode").css("display", "block");
		// everyday1s.removeClass('card-default');
		// everyday1s.removeClass('card-disable');


		// everyday1s.addClass(function(index) {
		// 	return "card-item-" + index;
		// });

		// var every = everyday1.find('.card-default:first').addClass('card-everyday1').addClass('card-active').removeClass('card-disable');
		// var nextEvery = everyday1.find('.card-disable').addClass('active1');
		// if ($(this).hasClass('active1')) {
		// 	$(this).parent().parent().remove();
		// }
		// if (every.hasClass('bla')) {
		// 	$(this).addClass('card-active');
		// }


