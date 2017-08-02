function pushStateToDataLayerCLNDR2017GoToUlmart(event) {
		return function(label, location) {
			dataLayer.push({
							'event':'OWOX',
							'eventCategory': 'Interactions',
							'eventAction': 'click',
							'eventLabel': label,
							'eventContent': event.target.innerHTML.trim(),
							'eventLocation': location
			});
			// console.log('click logo');
		}
};

function pushStateToDataLayerCLNDR2017Category(event) {
		return function(label, location, category, sale) {
			dataLayer.push({
							'event':'OWOX',
							'eventCategory': 'Interactions',
							'eventAction': 'click',
							'eventLabel': label,
							'eventContent': sale,
							'eventLocation': location,
							'eventContext': category
			});
			// console.log('click card');
		}
};

function pushStateToDataLayerCLNDR2017Tabs(event) {
		return function(label, location) {
			dataLayer.push({
							'event':'OWOX',
							'eventCategory': 'Interactions',
							'eventAction': 'click',
							'eventLabel': label,
							'eventContent': event.target.innerHTML.trim(),
							'eventLocation': location
			});
			// console.log('click tabs');
		}
};