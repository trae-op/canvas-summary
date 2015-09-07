

ViewKonva.prototype.CirclesLinesContent = function(index, urlAdress) {
	var _this = this;
	var thisData = _this.Data[index];
	var randomPosition = 0|(Math.random() * 15);
	var groupOtherCircles = _this.Group('groupOtherCircles').children;
	var groupOtherLines = _this.Group('groupOtherLines').children;
	var groupCircleItemsMenu = _this.Group('groupCircleItemsMenu').children;

	window.location.hash = '/' + (urlAdress ? urlAdress : thisData.url);

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
				    	.on('mouseover', function() {
				    		this.setZIndex(100);
				    		document.body.style.cursor = 'pointer';
				    		_this.Layer('layerMain').draw();
				    	})
				    	.on('mouseout', function() {
				    		this.setZIndex(1);
				    		document.body.style.cursor = 'default';
				    		_this.Layer('layerMain').draw();
				    	})
				    	.on('click', function() {
				    		window.open(dataProjects.link);
				    	});

					    _this.Group('groupProject-' + dataUrl.id).add(shape);
							_this.Layer('layerMain').add(
								_this.Group('groupProject-' + dataUrl.id)
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
	var randomPosition = 0|(Math.random() * 15);
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
		    	.on('mouseover', function() {
		    		_this.HoverTextContent(this, indexUrl, data, 'pointer');
		    	})
		    	.on('mouseout', function() {
		    		_this.HoverTextContent(this, indexUrl, data, 'default');
		    	});

		    	shape.on('click', function() {
		    		_this.ShowProjectContent(this, data);
		    	});

			    _this.Group('groupPreview-' + data.url).add(shape);
					_this.Layer('layerMain').add(
						_this.Group('groupPreview-' + data.url)
					);
		    }
		  }); 
	  });

	});

  return _this;
};