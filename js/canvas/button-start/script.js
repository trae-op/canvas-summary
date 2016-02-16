

ViewKonva.prototype.RectButtonStart = function(callBack) {
	var _this = this;

  _this.Shapes({
    shape: 'Rect',
    data: [{
    	width: _this.ButtonStartWidth,
    	height: _this.ButtonStartHeight,
    	fill: _this.ButtonStartFill
    }],
    callBack: function(shape, index) {
    	shape
    		.x((window.innerWidth - shape.width()) / 2)
    		.y((window.innerHeight - shape.height()) / 2);

	    _this.Group('groupButtonStart')
		    .add(shape)
		    .on(_this.ValueEvents('click'), callBack)
		    .on(_this.ValueEvents('mouseover'), function(){
		    	document.body.style.cursor = 'pointer';
		    })
		    .on(_this.ValueEvents('mouseout'), function() {
		    	document.body.style.cursor = 'default';
		    });

			_this.Layer('layerMain').add(
				_this.Group('groupButtonStart')
			);
    }
  });

  return _this;
};


ViewKonva.prototype.TextButtonStart = function() {
	var _this = this;	

  _this.Shapes({
    shape: 'Text',
    data: [{
    	text: _this.ButtonStartText
    }],
    callBack: function(shape, index) {
		  shape
			  .fontSize(_this.FontSizeButtonStart)
			  .fontFamily(_this.FontFamily)
			  .shadowColor(_this.ShadowColorText)
			  .x((window.innerWidth - shape.width()) / 2)
			  .y((window.innerHeight - shape.height()) / 2)
			  .fill(_this.ColorItemMenu);

	    _this.Group('groupButtonStart').add(shape);
			_this.Layer('layerMain').add(
				_this.Group('groupButtonStart')
			);

    }
  }); 

  return _this;

};


ViewKonva.prototype.UpdateRectTextButtonStart = function() {
  var _this = this;
  var groupButtonStart = _this.Group('groupButtonStart').children;

  _this.AllElements(groupButtonStart, function(data, index) {
    data.x((window.innerWidth - data.width()) / 2);
    data.y((window.innerHeight - data.height()) / 2);
  });

  _this.Layer('layerMain').draw();

  return _this;
};