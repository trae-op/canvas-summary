

ViewKonva.prototype.TextContent = function() {
	var _this = this;	
	var text = [];

	_this.AllElements(_this.Data, function(data, indexData) {

		if (_this.BlockingURL(indexData))
	  _this.AllElements(data[data.url], function(dataUrl, indexUrl) {
	  	text.push({
	  		text: dataUrl.text,
	  		name: data.url
	  	});
	  });
	 });

  _this.Shapes({
    shape: 'Text',
    data: text,
    callBack: function(shape, index) {
      
      _this.Font(shape);

      var checkGroup = _this.Group('groupTextContent-' + shape.name());
      if (!checkGroup) {
      	console.warn('Error groupTextContent-' + shape.name() + '!');
      	return;
      }
      
	    checkGroup.add(shape);
			_this.Layer('layerText').add(
				checkGroup
			);

    }
  });
  
  return _this;
};


ViewKonva.prototype.HoverTextContent = function(thisPreview, index, data, cursor) {
	var _this = this;
	var groupTextContent = _this.Group('groupTextContent-' + data.url).children[index];
	var endPosition;
	var opacity;

	if (data.url === 'company')
	document.body.style.cursor = cursor;

	if (cursor === 'pointer') {
		thisPreview.setZIndex(100);
		endPosition = thisPreview.y() - ((groupTextContent.height()/2) - 20);
		opacity = 1;
		groupTextContent
		.show()
		.x(  (thisPreview.x() - groupTextContent.width()) - 15  )
		.y(thisPreview.y() - ((groupTextContent.height()/2) - 15));

	} else if (cursor === 'default') {
		thisPreview.setZIndex(1);
		endPosition = thisPreview.y() - ((groupTextContent.height()/2) - 15);
		opacity = 0;
	}

	new Konva.Tween({
    node: groupTextContent,
    duration: _this.HoverTextAnimate,
    y: endPosition,
    opacity: opacity,
    onFinish: function() {
    	if (cursor === 'default')
    	groupTextContent.hide();
    }
  }).play(); 

	_this.Layer('layerText').draw();
	_this.Layer('layerMain').draw();
};