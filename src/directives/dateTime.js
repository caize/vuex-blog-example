Vue.directive('date-time', {
	update(value) {
		this.el.innerHTML = new Date(value).toDateString();
	}
});