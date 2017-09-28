var socket = io()
socket.on('connect', function() {
	console.log('Connected to server')
})
socket.on('disconnect', function() {
	console.log('Disconnected from server')
})
socket.on('newMessage', function(message) {
	console.log('New message', message)

	var li = jQuery('<li></li>')
	var msg = message.from + ': ' + message.text
	li.text(msg)
	jQuery('#messages').append(li)
})

jQuery('#message-form').on('submit', function(e) {
	e.preventDefault()
	socket.emit(
		'createMessage',
		{
			from: 'User',
			text: jQuery('[name=message]').val()
		},
		function(data) {
			// console.log(data)
		}
	)
})
