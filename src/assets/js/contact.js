$(document).ready(function() {
	$('#contactFormSubmit').click(function(event) {
		var valid = true;
		$('.required').each(function() {
			var element = $(this);
			var parent = element.closest('.form-group');
			if (element.val().length == 0) {
				valid = false;
				parent.addClass('has-error');
			}
			else {
				parent.removeClass('has-error');
			}
		});

		if (valid) {
			var params = {
				email: $('#email').val(),
				name: $('#name').val(),
				message: $('#message').val()
			};
			var url = '/email.php?' + $.param(params);
			console.log(url);

			$.ajax({
				url: url
			}).done(function(data, textStatus) {
				if (textStatus == 'success') {
					bootbox.alert('Message sent successfully!', function() {
						$('#contactModal').modal('hide');
					});
				}
				else {
					bootbox.alert('Message failed to send, please try again.');
				}
				
			}).fail(function() {
				bootbox.alert('Message failed to send, please try again.');
			});
		}

		return valid;
	});
});