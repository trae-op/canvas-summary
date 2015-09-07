

ViewKonva.prototype.ShowLineItemMenu = function() {
	var _this = this;	
	var lines = [];

	for (var i = 0; i < _this.Data.length; i++)
		lines.push({});

  _this.Shapes({
    shape: 'Line',
    data: lines,
    callBack: function(shape, index) {
    	_this.LinesItemMenu(shape);
	    _this.Group('groupShowLineItemMenu').add(shape);
			_this.Layer('layerLines').add(
				_this.Group('groupShowLineItemMenu')
			);
    }
  });

  return _this;

};

ViewKonva.prototype.ShowPreviewItemMenu = function() {
	var _this = this;	

	for (var i = 0; i < _this.Data.length; i++) {
	  _this.Shapes({
	    shape: 'Image',
	    data: [{
	    	image: _this.Data[i].image,
	    	strokeWidth: _this.BorderPreviewMenu,
	    	stroke: _this.ColorPreviewMenu,
	    	width: _this.WHpreviewItemMenu,
	    	height: _this.WHpreviewItemMenu
	    }],
	    callBack: function(shape, index) {

	    	shape.hide();

		    _this.Group('groupShowPreviewItemMenu').add(shape);
				_this.Layer('layerMain').add(
					_this.Group('groupShowPreviewItemMenu')
				);

	    }
	  });
	}

  return _this;
};


ViewKonva.prototype.AnimationHoverPreviewItemMenu = function(index, x, y, cursor) {
	var _this = this;	

	if (!_this.FlagHoverItemMenu) return;

	var groupShowLineItemMenu = _this.Group('groupShowLineItemMenu').children[index];
	var groupShowPreviewItemMenu = _this.Group('groupShowPreviewItemMenu').children[index];
	var startValueLineItemMenu;
	var endValueLineItemMenu;
	var showHide = '';

	if (cursor === 'pointer') {
		startValueLineItemMenu = [x, y, x, y, x, y];
		endValueLineItemMenu = [x, y, x, y - 40,  x - 20, y - 40];
		showHide = 'show';
		groupShowPreviewItemMenu
			.x( ((x - (_this.WHpreviewItemMenu/2)) - (18 + _this.BorderPreviewMenu)) - (_this.WHpreviewItemMenu/2) )
			.y( (y - (_this.WHpreviewItemMenu/2)) - 40 );
	} else if (cursor === 'default') {
		startValueLineItemMenu = [x, y, x, y - 40,  x - 20, y - 40];
		endValueLineItemMenu = [x, y, x, y, x, y];
		showHide = 'hide';
		groupShowPreviewItemMenu[showHide]();
		_this.Layer('layerMain').draw();
	}

	document.body.style.cursor = cursor;

	groupShowLineItemMenu.points(startValueLineItemMenu);

  new Konva.Tween({
    node: groupShowLineItemMenu,
    duration: _this.SpeedLineItemMenu,
    points: [x, y, x, y - 40,  x, y - 40],
    onFinish: function() {
      new Konva.Tween({
        node: groupShowLineItemMenu,
        duration: _this.SpeedLineItemMenu,
        points: endValueLineItemMenu,
        onFinish: function() {
        	groupShowPreviewItemMenu[showHide]();
        	_this.Layer('layerMain').draw();
        }
      }).play();
    }
  }).play();

  return _this;
};