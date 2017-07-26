console.log('Привет, как дела?');




var format = function (date) {
	var month = (date.getMonth() + 1).toString();
	return date.getUTCFullYear() + "-" + (month.length === 1 ? "0" + month : month) + "-" + date.getUTCDate();
}



$('[id^="cards_"]').each(function() {
		var date = new Date($(this).attr('data')),
		now = new Date();
		day = now.getDay();
		date = new Date(date.setHours(16));
		forecast = $('.tabs__wrapper__online');
		completed = $('.tabs__wrapper__offline');
		col = $('.col-lg-3.col-md-3.col-sm-6.col-xs-15');
		everyday = $('.card-everyday-wrapper');
		console.log(format(now));
		console.log($(this).attr('data'));
			


		if (date < now) {
console.log(format(date), 'прошлое')
		// Это прошлые даты
		// $(this).addClass('card__completed').css("display", "block");
		$(this).addClass('card-completed');
		// $(this).removeClass('card__disable');
		$(this).removeClass('card-active');
		$(this).removeClass('card-default');
		//$(this).removeClass('card__default');
		$(this).append('<div class="card-bottom__link">Завершено</div>');
		$(this).find(".card-bottom__link").html("Завершено");
		$(this).find(".card-middle__promocode").html("");
		forecast.find(col).find('.card-completed').parent().parent().remove();

		//completed.find(col).find('.card__active').parent().parent().remove();
				
		// forecast.find(col).find('.card__completed').addClass('removeClass');
		// $(this).remove();
		
		
		//forecast.find('.removeClass').remove();
		// $('.tabs__wrapper__online').find('.card__active').css("display", "block");

		
		
		
		
		if($($(this)).hasClass('.card__empty')){
			$($(this)).removeClass('card__disable');
		}


		} else if(format(now) !== $(this).attr('data')) {

console.log(format(date), 'будущее')
		$(this).removeClass('card-completed');
		$(this).removeClass('card-active');
		$(this).removeClass('card-disable');
		// $(this).addClass('card-default');
		$(this).addClass('card-disable');
		// $(this).addClass('card-active');
		$(this).find(".card-middle__promocode").html("");
		$(this).find(".card-bottom__link").html("Ожидается");

		completed.find(col).find('.card-default').parent().parent().remove();

		// var everyDays = everyday.find('.col-lg-18').find('.card-wrapper').find('.card-disable').addClass('card-active');
		// everyDays.addClass(function(index) {
		// 	return "item-" + index;
		// });

		var every = everyday.find('.card-default:first').addClass('card-everyday').addClass('card-active').removeClass('card-disable');
		var nextEvery = everyday.find('.card-disable').addClass('active1');
		if ($(this).hasClass('active1')) {
			$(this).parent().parent().remove();
		}
		// if (every.hasClass('bla')) {
		// 	$(this).addClass('card-active');
		// }

		//completed.find('.card-completed').css("display", "none");
		// completed.find('.card-default').css("display", "none");
		

		}

if(format(now) === $(this).attr('data')) {
console.log(format(date), 'сегодня')
		$(this).removeClass('card-completed');
		$(this).removeClass('card-default');
		$(this).removeClass('card-disable');
		$(this).addClass('card-active');
		$(this).find(".card-bottom__link").html("Перейти к покупке>");
		$(this).find(".completed").remove();
		$(this).find(".card-middle__promocode").css("display", "block");
		//$(this).find(".card__link").css("fontSize", 14 );



	}

})


var wrapper = $('.layout_center_wrapper-project');
var linkOnline = $('#tab-nav-2');
var linkOffline = $('#tab-nav-1');
var tabWrapper = $('.tabs__wrapper');

// var item = forecast.find('.card__default').map(function(index, elem) {
// 	return $(elem).attr('data');
// })
// var arr = item.get();
// var arrParse = parseIntar(arr);

// function sum(arr){
// 	if(arr[i] > arr[i]+1){
// 		return console.log('больше');
// 	}
	
// }
// console.log(sum);

// console.log(item);

linkOnline.click(function(){
	console.log('click online');
	completed.css('display', 'none');
	forecast.css('display', 'block');
});
linkOffline.click(function(){
	console.log('click offline');
	forecast.css('display', 'none');
	completed.css('display', 'block');
});

