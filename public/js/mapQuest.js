function initMap() {
	L.mapquest.key = 'U6zo1mVZF2PL6FCXxqkRIkl3BwT3aV0Z';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88107584701445, -117.23751560987327]).addTo(map);
}
