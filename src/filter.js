const filters = {
	nl2br(value) {
		if(!value) return;

		return value.replace(/[\n\r]/g, "<br />");
	},
	escapeHtml(value) {
		if(!value) return;

		var TABLE_FOR_ESCAPE_HTML = {
			"&": "&amp;",
			"\"": "&quot;",
			"<": "&lt;",
			">": "&gt;"
		};
		return value.replace(/[&"<>]/g, function(match) {
			return TABLE_FOR_ESCAPE_HTML[match];
		});
	}
};

export default filters