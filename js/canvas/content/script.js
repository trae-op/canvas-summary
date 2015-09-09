

ViewKonva.prototype.CirclesLinesContent = function(index) {
	var _this = this;
	var thisData = _this.Data[index];
	var randomPosition = 0|(Math.random() * 10);
	var groupOtherCircles = _this.Group('groupOtherCircles').children;
	var groupOtherLines = _this.Group('groupOtherLines').children;
	var groupCircleItemsMenu = _this.Group('groupCircleItemsMenu').children;

	if (!_this.BlockingURL(index)) {
		// update other circles
		_this.UpdatePositionCircles();
		return;
	}

	document.getElementById(_this.IdClose).classList.add(_this.AddClass);

	// Nulling array
	_this.Nulling()
	// open content
	.AllElements(thisData[thisData.url], function(data, indexData) {
		// othe circles
		groupOtherCircles[indexData + randomPosition]
			.radius(_this.RadiusCirclesContent);

		// previews
		_this.Group('groupPreview-' + thisData.url).children[indexData]
			.x(groupOtherCircles[indexData + randomPosition].x() - (_this.WHpreviewItemMenu/2))
			.y(groupOtherCircles[indexData + randomPosition].y() - (_this.WHpreviewItemMenu/2))
			.show();

		_this.PrevPreview.push([indexData, thisData.url]);
		_this.PrevCircles.push(indexData + randomPosition);

		// other lines
		if (indexData <= thisData[thisData.url].length - 2) {
			groupOtherLines[indexData + randomPosition]
				.strokeWidth(_this.BorderLineContent);
				_this.PrevLines.push(indexData + randomPosition);
		}
			
	});

	// shadow active
	groupCircleItemsMenu[index]
		.fill(_this.BackgroundActiveItemMenu);

	_this.PrevActiveItemMenu.push(groupCircleItemsMenu[index]);

	_this.Layer('layerMain').draw();
	_this.Layer('layerLines').draw();
	

};

ViewKonva.prototype.PreviewProjects = function() {
	var _this = this;	

	_this.AllElements(_this.Data, function(data, indexData) {

	  if (!_this.BlockingURL(indexData)) return;
	  _this.AllElements(data[data.url], function(dataUrl, indexUrl) {

	  	if (dataUrl.projects) {
		  	_this.AllElements(dataUrl.projects, function(dataProjects, indexProjects) {
				  _this.Shapes({
				    shape: 'Image',
				    data: [{
				    	image: dataProjects.image, 
				    	width: _this.WHpreviewItemMenu,
				    	height: _this.WHpreviewItemMenu,
				    	name: dataUrl.id
				    }],
				    callBack: function(shape, index) {

				    	shape
				    	.hide()
				    	.on(_this.ValueEvents('mouseover'), function() {
				    		this.setZIndex(100);
				    		document.body.style.cursor = 'pointer';
				    		_this.Layer('layerMain').draw();
				    	})
				    	.on(_this.ValueEvents('mouseout'), function() {
				    		this.setZIndex(1);
				    		document.body.style.cursor = 'default';
				    		_this.Layer('layerMain').draw();
				    	})
				    	.on(_this.ValueEvents('click'), function() {
				    		window.open(dataProjects.link);
				    	});

				    	var checkGroup = _this.Group('groupProject-' + dataUrl.id);
				    	if (!checkGroup) {
				    		console.warn('Error groupProject-' + dataUrl.id + '!');
				    		return;
				    	}

					    checkGroup.add(shape);
							_this.Layer('layerMain').add(
								checkGroup
							);

				    }
				  });
		  	});
		  }

	  });


	});

  return _this;
};


ViewKonva.prototype.ShowProjectContent = function(thisPreview, data) {
	var _this = this;
	var randomPosition = 0|(Math.random() * 10);
	var groupOtherCircles = _this.Group('groupOtherCircles').children;

	if (!thisPreview.id()) return;

	// Nulling project content
	_this.NullingProjectContent(groupOtherCircles)

	.AllElements(_this.Group('groupProject-' + thisPreview.id()).children, function(dataProjects, indexProjects) {
		var position = _this.PrevCircles[1] + randomPosition + indexProjects + data[data.url].length;
		//console.log(position);
		groupOtherCircles[position]
			.stroke(_this.BorderProjects)
			.radius(_this.RadiusCirclesContent);

		dataProjects
			.x(groupOtherCircles[position].x() - (_this.WHpreviewItemMenu/2))
			.y(groupOtherCircles[position].y() - (_this.WHpreviewItemMenu/2))
			.show();

		_this.PrevProjectsPreview.push(dataProjects);
		_this.PrevProjectsCircles.push(position);
	});

	_this.Layer('layerMain').draw();

	return _this;
};


ViewKonva.prototype.PreviewContent = function() {
	var _this = this;	

	_this.AllElements(_this.Data, function(data, indexData) {

		if (!_this.BlockingURL(indexData)) return;
	  _this.AllElements(data[data.url], function(dataUrl, indexUrl) {

		  _this.Shapes({
		    shape: 'Image',
		    data: [{
		    	image: dataUrl.image, 
		    	width: _this.WHpreviewItemMenu,
		    	height: _this.WHpreviewItemMenu,
		    	id: dataUrl.id
		    }],
		    callBack: function(shape, index) {
		    	shape
		    	.hide()
		    	.on(_this.ValueEvents('mouseover'), function() {
		    		_this.HoverTextContent(this, indexUrl, data, 'pointer');
		    	})
		    	.on(_this.ValueEvents('mouseout'), function() {
		    		_this.HoverTextContent(this, indexUrl, data, 'default');
		    	});

		    	shape.on(_this.ValueEvents('click'), function() {
		    		_this.ShowProjectContent(this, data);
		    	});

		    	var checkGroup = _this.Group('groupPreview-' + data.url);
		    	if (!checkGroup) {
		    		console.warn('Error groupPreview-' + data.url + '!');
		    		return;	
		    	}

				    checkGroup.add(shape);
						_this.Layer('layerMain').add(
							checkGroup
						);
		    }
		  }); 
	  });

	});

  return _this;
};

ViewKonva.prototype.UpdatePositionCircles = function() {
	var _this = this;

	var groupOtherCircles = _this.Group('groupOtherCircles').children;
	var groupOtherLines = _this.Group('groupOtherLines').children;

	var groupConnectingLine = _this.Group('groupConnectingLine').children[0];
	
	_this.Nulling()
	.AllElements(groupOtherCircles, function(data, indexCircles) {

		var x = (Math.random() * (_this.Stage.width() - (window.innerWidth/4))) + (window.innerWidth/4.5);
    var y = (Math.random() * (_this.Stage.height() - (window.innerHeight/5))) + (window.innerHeight/10);

    // end position first circle
    _this.EndPositionCircles.push([x, y]);
  	
  	if (indexCircles === 0)
  	_this.EndPositionConnectingLine.push({
  		x: x,
  		y: y
  	});
  
    new Konva.Tween({
      node: data,
      duration: _this.SpeedAllCircles,
      x: x,
      y: y
    }).play();

	});

	for (var i = 0; i < _this.NumberOtherCircles - 1; i++)
    new Konva.Tween({
      node: groupOtherLines[i],
      duration: _this.SpeedAllCircles,
      points: [
    		_this.EndPositionCircles[i][0],
    		_this.EndPositionCircles[i][1],

    		_this.EndPositionCircles[i + 1][0],
    		_this.EndPositionCircles[i + 1][1]
      ]
    }).play();

  new Konva.Tween({
    node: groupConnectingLine,
    duration: _this.SpeedAllCircles,
    points: [
  		window.innerWidth/_this.Data[_this.Data.length - 1].x,
  		window.innerHeight/_this.Data[_this.Data.length - 1].y,

  		_this.EndPositionConnectingLine[0].x,
  		_this.EndPositionConnectingLine[0].y
    ],
    onFinish: function() {
	    setTimeout(function() {
	    	_this.ChangeURL();
    	}, 100);
    }
  }).play();

  return _this;
};



ViewKonva.prototype.ChangeURL = function() {
  var _this = this;
  var url = window.location.hash.replace(/#\//g, '');
  _this.AllElements(_this.Data, function(dataUrl, indexUrl) {
    if (url === dataUrl.url)
    _this.CirclesLinesContent(indexUrl);       
  });
};