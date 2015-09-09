

ViewKonva.prototype.OtherCircles = function() {
	var _this = this;
	var circle = [];
	_this.EndPositionCircles = [];

	for (var i = 0; i < _this.NumberOtherCircles; i++)
		circle.push({});

	_this.Shapes({
	  shape: 'Circle',
	  data: circle,
	  callBack: function(shape, index) {

	  	shape
	  	.radius(_this.RadiusOtherCircle)
	  	.fill(_this.ColorOtherCircles)
	  	.x(Math.random() * _this.Stage.width())
	  	.y(Math.random() * _this.Stage.height());

		  _this.Group('groupOtherCircles').add(shape);
			_this.Layer('layerMain').add(
				_this.Group('groupOtherCircles')
			);

	  }
	});

	return _this;
};

ViewKonva.prototype.OtherLines = function() {
	var _this = this;
	var lines = [];

	for (var i = 0; i < _this.NumberOtherCircles - 1; i++)
		lines.push({});


  _this.Shapes({
    shape: 'Line',
    data: lines,
    callBack: function(shape, index) {

    	var groupOtherCircles = _this.Group('groupOtherCircles');

    	_this.LinesOther(shape);

    	shape.points([
    		groupOtherCircles.children[index].x(),
    		groupOtherCircles.children[index].y(),

    		groupOtherCircles.children[index + 1].x(),
    		groupOtherCircles.children[index + 1].y()
    	]);	

	    _this.Group('groupOtherLines').add(shape);
			_this.Layer('layerLines').add(
				_this.Group('groupOtherLines')
			);

    }
  });

  return _this;
};


ViewKonva.prototype.ConnectingLine = function() {
	var _this = this;

  _this.Shapes({
    shape: 'Line',
    data: [{}],
    callBack: function(shape, index) {
    	var startXcircleItemsMenu = _this.Group('groupCircleItemsMenu').children[_this.Data.length - 1].x();
    	var startYcircleItemsMenu = _this.Group('groupCircleItemsMenu').children[_this.Data.length - 1].y();

    	var startXotherCircles = _this.Group('groupOtherCircles').children[0].x();
    	var startYotherCircles = _this.Group('groupOtherCircles').children[0].y();

    	_this.LinesOther(shape);

    	shape.points([
    		startXcircleItemsMenu,
    		startYcircleItemsMenu,

    		startXotherCircles,
    		startYotherCircles
    	]);

	    _this.Group('groupConnectingLine').add(shape);
			_this.Layer('layerLines').add(
				_this.Group('groupConnectingLine')
			);

    }
  });

  return _this;
};