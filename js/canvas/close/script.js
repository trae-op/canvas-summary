
ViewKonva.prototype.ButtonClose = function() {
	var _this = this;
	
	_this.Events(document.getElementById(_this.IdClose), 'click', function() {
		window.location.hash = '/';
		document.getElementById(_this.IdClose).classList.remove(_this.AddClass);
		_this.Nulling();
		_this.Layer('layerMain').draw();
		_this.Layer('layerLines').draw();												
	});

	return _this;
};


ViewKonva.prototype.NullingProjectContent = function(groupOtherCircles) {
	var _this = this;
	_this.AllElements(_this.PrevProjectsCircles, function(dataClose, indexClose) {
		// othe circles projects close
		groupOtherCircles[dataClose]
		.stroke(false)
		.radius(_this.RadiusOtherCircle);
	})
	.AllElements(_this.PrevProjectsPreview, function(dataClose, indexClose) {
		// othe preview projects close
		dataClose.hide();
	});	

	return _this;
};

ViewKonva.prototype.Nulling = function() {
	var _this = this;
	var groupOtherCircles = _this.Group('groupOtherCircles').children;
	var groupOtherLines = _this.Group('groupOtherLines').children;

	_this.AllElements(_this.PrevCircles, function(data, indexData) {
		// othe circles close
		groupOtherCircles[data]
		.radius(_this.RadiusOtherCircle);

		// other lines close
		if (indexData <= groupOtherCircles.length - 2)
		groupOtherLines[data]
			.strokeWidth(_this.BorderLineOther);

	})
	// previews close
	.AllElements(_this.PrevPreview, function(data, indexData) {
		_this.Group('groupPreview-' + data[1]).children[data[0]]
			.hide();
	})
	// Nulling project content
	.NullingProjectContent(groupOtherCircles);	

	// shadow active close
	if (_this.PrevActiveItemMenu[0])
	_this.PrevActiveItemMenu[0]
		.fill(_this.ColorItemMenu);

	// nulling array
	_this.PrevCircles.splice(0, _this.PrevCircles.length);
	_this.PrevLines.splice(0, _this.PrevLines.length);
	_this.PrevPreview.splice(0, _this.PrevPreview.length);
	_this.PrevProjectsCircles.splice(0, _this.PrevProjectsCircles.length);
	_this.PrevProjectsPreview.splice(0, _this.PrevProjectsPreview.length);
	_this.PrevActiveItemMenu.splice(0, _this.PrevActiveItemMenu.length);

	return _this;
};