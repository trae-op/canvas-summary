

ViewKonva.prototype.CircleItemsMenu = function() {
	var _this = this;
	var circle = [];

	for (var i = 0; i < _this.Data.length; i++)
		circle.push({
			radius: _this.RadiusItemMenu,
			x: _this.Stage.width()/6, 
			y: _this.Stage.height()/2,
			fill: _this.ColorItemMenu
		});

  _this.Shapes({
    shape: 'Circle',
    data: circle,
    callBack: function(shape, index) {

    var x = _this.Data[index].x;
    var y = window.innerHeight/_this.Data[index].y;

    if (index === _this.Data.length - 1)
    	_this.EndPositionConnectingLine.push({
    		x: x,
    		y: y
    	});

    _this.Group('groupCircleItemsMenu').add(shape);
		_this.Layer('layerMain').add(
			_this.Group('groupCircleItemsMenu')
		);

        shape
        .on('mouseover', function() {
          _this.AnimationHoverPreviewItemMenu(index, x, y, 'pointer');
        })
        .on('mouseout', function() {
          _this.AnimationHoverPreviewItemMenu(index, x, y, 'default');
        })
        .on('click', function() {
          _this.CirclesLinesContent(index);
        });

			_this.MobileFalse(function() {
        new Konva.Tween({
          node: shape,
          duration: _this.SpeedAllCircles,
          x: x,
          y: y,
          onFinish: function() {
            var url = window.location.hash.replace(/#\//g, '');
          	_this.FlagHoverItemMenu = true;
          	_this.AnimateLineTextItemMenu(index, x, y);

            setTimeout(function() {
              if (url === _this.Data[index].url)
              _this.CirclesLinesContent(index, url);
            }, 100);

          }
        }).play();
			});

    }
  });

  return _this;
};

ViewKonva.prototype.LineItemsMenu = function() {
	var _this = this;
	var lines = [];

	for (var i = 0; i < _this.Data.length - 1; i++)
		lines.push({});


  _this.Shapes({
    shape: 'Line',
    data: lines,
    callBack: function(shape, index) {

    	var groupCircleItemsMenu = _this.Group('groupCircleItemsMenu');

    	_this.LinesItemMenu(shape);

    	shape.points([
    		groupCircleItemsMenu.children[index].x(),
    		groupCircleItemsMenu.children[index].y(),

    		groupCircleItemsMenu.children[index + 1].x(),
    		groupCircleItemsMenu.children[index + 1].y()
    	]);	


	    _this.Group('groupLineItemsMenu').add(shape);
			_this.Layer('layerLines').add(
				_this.Group('groupLineItemsMenu')
			);


			_this.MobileFalse(function() {
        new Konva.Tween({
          node: shape,
          duration: _this.SpeedAllCircles,
          points: [
          	_this.Data[index].x,
          	window.innerHeight/_this.Data[index].y,

          	_this.Data[index+1].x,
          	window.innerHeight/_this.Data[index+1].y
          ]
        }).play();
			});

    }
  });

  return _this;
};

ViewKonva.prototype.LineTextItemMenu = function() {
	var _this = this;	
	var lines = [];

	for (var i = 0; i < _this.Data.length; i++)
		lines.push({});

  _this.Shapes({
    shape: 'Line',
    data: lines,
    callBack: function(shape, index) {
    	_this.LinesItemMenu(shape);
	    _this.Group('groupLineTextItemMenu').add(shape);
			_this.Layer('layerLines').add(
				_this.Group('groupLineTextItemMenu')
			);
    }
  });

  return _this;
};


ViewKonva.prototype.TextItemMenu = function() {
	var _this = this;	
	var text = [];
	for (var i = 0; i < _this.Data.length; i++)
		text.push({
			text: _this.Data[i].text
		});

  _this.Shapes({
    shape: 'Text',
    data: text,
    callBack: function(shape, index) {
      _this.Font(shape);
	    _this.Group('groupTextItemMenu').add(shape);
			_this.Layer('layerText').add(
				_this.Group('groupTextItemMenu')
			);

    }
  }); 

  return _this;

};

ViewKonva.prototype.AnimateLineTextItemMenu = function(index, x, y) {
	var _this = this;	
	var groupLineTextItemMenu = _this.Group('groupLineTextItemMenu').children[index];
	var groupTextItemMenu = _this.Group('groupTextItemMenu').children[index];

		groupLineTextItemMenu.points([x, y,  x, y,  x, y]);

    new Konva.Tween({
      node: groupLineTextItemMenu,
      duration: _this.SpeedLineItemMenu,
      points: [x, y,  x + 25, y - 25,  x + 25, y - 25],
      onFinish: function() {

		    new Konva.Tween({
		      node: groupLineTextItemMenu,
		      duration: _this.SpeedLineItemMenu,
		      points: [x, y,  x + 25, y - 25,  (x + groupTextItemMenu.width() + 28), y - 25],
		      onFinish: function() {

		      	groupTextItemMenu
		      	.x(x + 28)
		      	.y(y - 42)
            .show()
		      	.opacity(1);

            _this.Layer('layerText').draw();

		      }
		    }).play();

      }
    }).play();

};