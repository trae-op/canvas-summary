

ViewKonva.prototype.OtherCircles = function() {
	var _this = this;
	var circle = [];
	_this.EndPositionCircles = [];

	for (var i = 0; i < _this.NumberOtherCircles; i++)
		circle.push({
			radius: _this.RadiusOtherCircle,
			fill:_this.ColorOtherCircles,
			x: (Math.random() * _this.Stage.width()), 
			y: (Math.random() * _this.Stage.height())
		});


	_this.Shapes({
	  shape: 'Circle',
	  data: circle,
	  callBack: function(shape, index) {

			var x = (Math.random() * (_this.Stage.width() - (window.innerWidth/4))) + (window.innerWidth/4.5);
      var y = (Math.random() * (_this.Stage.height() - (window.innerHeight/5))) + (window.innerHeight/10);


		  if (index === 0)
	    	_this.EndPositionConnectingLine.push({
	    		x: x,
	    		y: y
	    	});

		  _this.EndPositionCircles.push([x, y]);

		  _this.Group('groupOtherCircles').add(shape);
			_this.Layer('layerMain').add(
				_this.Group('groupOtherCircles')
			);

			_this.MobileFalse(function() {
	      new Konva.Tween({
	        node: shape,
	        duration: _this.SpeedAllCircles,
	        x: x,
	        y: y
	      }).play();
			});

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
			_this.Layer('layerMain').add(
				_this.Group('groupOtherLines')
			);

			_this.MobileFalse(function() {
        new Konva.Tween({
          node: shape,
          duration: _this.SpeedAllCircles,
          points: [
		    		_this.EndPositionCircles[index][0],
		    		_this.EndPositionCircles[index][1],

		    		_this.EndPositionCircles[index + 1][0],
		    		_this.EndPositionCircles[index + 1][1]
          ]
        }).play();
			});

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
			_this.Layer('layerMain').add(
				_this.Group('groupConnectingLine')
			);

			_this.MobileFalse(function() {
        new Konva.Tween({
          node: shape,
          duration: _this.SpeedAllCircles,
          points: [
		    		_this.EndPositionConnectingLine[0].x,
		    		_this.EndPositionConnectingLine[0].y,

		    		_this.EndPositionConnectingLine[1].x,
		    		_this.EndPositionConnectingLine[1].y
          ]
        }).play();
			});

    }
  });

  return _this;
};