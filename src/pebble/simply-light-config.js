$(document).ready(function() {
	console.log('version 1.1');

	var save = $('#save');
	var cancel = $('#cancel');
	var saving = false;

	var fields = {
		temperature_units: $('#temperature_units'),
		refresh_time: $('#refresh_time'),
		wait_time: $('#wait_time'),
		location: $('#location'),
	}

	var data = window.location.hash.replace('#', '');
	if (data) {
		var config = JSON.parse(decodeURIComponent(data));
		console.log(config);
		for (key in config) {
			if (fields[key]) {
				fields[key].val(config[key]);
			}
		}
	}

	save.click(function() {
		if (saving) {
			return;
		}

		saving = true;
		save.find('i').removeClass('fa-save');
		save.find('i').addClass('fa-spin');
		save.find('i').addClass('fa-spinner');
		save.prop('disabled', true);
		cancel.prop('disabled', true);

		var valid = true;

		var refresh_time = fields.refresh_time.val();
		if ($.isNumeric(refresh_time)) {
			refresh_time = parseInt(refresh_time);
			fields.refresh_time.closest('.form-group').removeClass('has-error');
		}
		else {
			valid = false;
			fields.refresh_time.closest('.form-group').addClass('has-error');
		}

		var wait_time = fields.wait_time.val();
		if ($.isNumeric(wait_time)) {
			wait_time = parseInt(wait_time);
			fields.wait_time.closest('.form-group').removeClass('has-error');
		}
		else {
			valid = false;
			fields.wait_time.closest('.form-group').addClass('has-error');
		}

		if (valid) {
			var config = {
				temperature_units: fields.temperature_units.val(),
				refresh_time: refresh_time,
				wait_time: wait_time,
				location: fields.location.val(),//TODO validate location
			};

			console.log(config);
			location.href = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(config));
		}

		saving = false;
		save.find('i').addClass('fa-save');
		save.find('i').removeClass('fa-spin');
		save.find('i').removeClass('fa-spinner');
		save.prop('disabled', false);
		cancel.prop('disabled', false);
	});

	cancel.click(function() {
		if (saving) {
			return;
		}

		location.href = 'pebblejs://close#cancel'
	});
});