
// Generator
ViewKonva.prototype.GeneratorShapes = function(settings){
  var _this = this;
  var layer = new Konva.Layer();
  var data = {
        btns: {
          width: 70,
          height: 30,
          fill: '#444',
          x: 10
        },
        title: {
          x: 10,
          fontSize: 14,
          fontFamily: 'Calibri',
          fill: '#ccc',
        },
        textCounter: {
          x: 100,
          fontSize: 20,
          fontFamily: 'Calibri',
          fill: '#ccc'
        }
  };
  var group = new Konva.Group({
    x: _this.Stage.width()-170,
    y: 10,
    draggable: true
  });
  var wrapper = new Konva.Rect({
    width: 160,
    height: 190,
    fill: '#000'
  });

  data.title.y = 10;
  data.title.text = 'line with four positions';
  var titleBezier = new Konva.Text(data.title);
  data.btns.y = 25;
  var btnLineBezier = new Konva.Rect(data.btns);
  data.textCounter.y = 28;
  data.textCounter.text = 0;
  var counterBezier = 0;
  var numberBezier = new Konva.Text(data.textCounter);

  data.title.y = 67;
  data.title.text = 'line with three positions';
  var titleQuad = new Konva.Text(data.title);
  data.btns.y = 81;
  var btnLineQuad = new Konva.Rect(data.btns);
  data.textCounter.y = 85;
  data.textCounter.text = 0;
  var counterQuad = 0;
  var numberQuad = new Konva.Text(data.textCounter);

  data.title.y = 126;
  data.title.text = 'Images';
  var titleImages = new Konva.Text(data.title);
  data.btns.y = 141;
  var btnImages = new Konva.Rect(data.btns);
  data.textCounter.y = 145;
  data.textCounter.text = 0;
  var counterImages = 0;
  var numberImages = new Konva.Text(data.textCounter);



  _this.AllElements([btnLineBezier, btnLineQuad, btnImages], function(btn){
    btn.on('mouseover', function() {
      document.body.style.cursor = 'pointer';
      this.fill('#666');
      layer.draw();
    }).on('mouseout', function() {
      document.body.style.cursor = 'default';
      this.fill('#444');
      layer.draw();
    });
  });

  group.add(
    wrapper,
    btnLineBezier,
    btnLineQuad,
    titleBezier,
    titleQuad,
    btnImages,
    titleImages,
    numberBezier,
    numberQuad,
    numberImages
  );
  layer.add(group);
  _this.Stage.add(layer);

  btnLineBezier.on('click', function(){
    counterBezier++;

    if(parseInt(numberBezier.text()) >= 0)
      numberBezier.text(parseInt(numberBezier.text())+1);
    else
      numberBezier.text(counterBezier);

    settings.lines.bezier.typeLine = 'bezier';
    _this.LinesSettings(settings.lines.bezier, 1);
    layer.draw();
  });

  var normalQuad = function(nq) {
    if(parseInt(numberQuad.text()) >= 0)
      numberQuad.text(parseInt(numberQuad.text()) + 1);
    else
      numberQuad.text(counterQuad);

    settings.lines[nq].typeLine = nq;
    _this.LinesSettings(settings.lines[nq], 1);
    layer.draw();
  };

  btnLineQuad.on('click', function(){
    counterQuad++;

   if(settings.lines.quad)
    normalQuad('quad');
   if(settings.lines.normal)
    normalQuad('normal');

  });

  btnImages.on('click', function(){
    counterImages++;

    if(parseInt(numberImages.text()) >= 0)
      numberImages.text(parseInt(numberImages.text()) + 1);
    else
      numberImages.text(counterImages);

    _this.ImagesSettings(settings.images.path, settings.images.stepRotation, 1);
    layer.draw();
  });

};

// for settings properties different types lines
ViewKonva.prototype.LinesSettings = function(object, number) {
  var _this = this;
  var all = [];
  if(number) {
    for(var i = 0; i < number; i++) all.push(object);
  } else all = object;
  _this.AllElements(all, function(obj, index){
    var lineLayer, anchorLayer, quad, bezier, quadBezier, normal;
    if(!obj.typeLine) {
      console.log('No type line!');
      return;
    }

    function updateDottedLines() {
      var bq = quadBezier;
      var pointers;
      var quadBezierLine = lineLayer.get('#quadBezierLine'+lineLayer._id)[0];

      if(obj.typeLine === 'bezier')
        pointers = [
          bq.start.attrs.x,
          bq.start.attrs.y,
          bq.control1.attrs.x,
          bq.control1.attrs.y,
          bq.control2.attrs.x,
          bq.control2.attrs.y,
          bq.end.attrs.x,
          bq.end.attrs.y
        ];
      if(obj.typeLine === 'quad')
        pointers = [
          bq.start.attrs.x,
          bq.start.attrs.y,
          bq.control.attrs.x,
          bq.control.attrs.y,
          bq.end.attrs.x,
          bq.end.attrs.y
        ];

      if(obj.typeLine === 'normal')
        pointers = [
          bq.start.attrs.x,
          bq.start.attrs.y,
          bq.control.attrs.x,
          bq.control.attrs.y
        ];

      quadBezierLine.setPoints(pointers);
      lineLayer.draw();
    }

    function buildAnchor(x, y) {
      var anchor = new Konva.Circle({
          x: x,
          y: y,
          radius: 10,
          stroke: '#000',
          opacity: 0.2,
          fill: '#666',
          strokeWidth: 2,
          draggable: true
      });

      group.add(anchor);
      anchorLayer.add(group);

      // add hover styling
      anchor.on('mouseover', function() {
          document.body.style.cursor = 'pointer';
          this.setStrokeWidth(4);
          anchorLayer.draw();

      }).on('mouseout', function() {
          document.body.style.cursor = 'default';
          this.setStrokeWidth(2);
          anchorLayer.draw();
      }).on('dragend', updateDottedLines);
      return anchor;
    }

    anchorLayer = new Konva.Layer();
    lineLayer = new Konva.Layer();

    var group = new Konva.Group({
      x: obj.positionX||0,
      y: obj.positionY||0,
      draggable: true
    });

    var rect = new Konva.Rect({
        x: 10,
        y: 10,
        width: 100,
        height: 50,
        fill: '#000',
        opacity: 0.5
    });

    var rectClose = new Konva.Rect({
        x: 95,
        y: 10,
        width: 15,
        height: 15,
        fill: '#f00',
        opacity: 0.7
    });

    var text = new Konva.Text({
      x: 15,
      y: 15,
      text: 'show points',
      fontSize: 12,
      fontFamily: 'Calibri',
      fill: '#ccc'
    });

    var quadBezierLine = new Konva.Line(obj);
    quadBezierLine.id('quadBezierLine'+lineLayer._id).stroke(obj.fill).dash([0, 0, 0, 0]).lineCap('round');

    rect.on('mouseover', function(){
      document.body.style.cursor = 'pointer';
    }).on('mouseout', function(){
      document.body.style.cursor = 'default';
    }).on('click', function(){
      console.log('points: ['+(quadBezierLine.points())+'],'+
                  '\nx: '+(group.x())+','+
                  '\ny: '+(group.y())+'');
    });

    rectClose.on('click', function(){
      if(obj.typeLine === 'bezier') {
        var counterBezier = _this.Stage.children[0].children[0].children[7];
        counterBezier.text(counterBezier.text()-1);
        lineLayer.remove();
      }
      if(obj.typeLine === 'quad') {
        var counterQuad = _this.Stage.children[0].children[0].children[8];
        counterQuad.text(counterQuad.text()-1);
        lineLayer.remove();
      }
      if(obj.typeLine === 'normal') {
        var counterQuad = _this.Stage.children[0].children[0].children[8];
        counterQuad.text(counterQuad.text()-1);
        lineLayer.remove();
      }
      _this.Stage.children[0].children[0].draw();
    }).on('mouseover', function(){
      this.fill('#EF6464');
      anchorLayer.draw();
    }).on('mouseout', function(){
      this.fill('#f00');
      anchorLayer.draw();
    });

    if(obj.typeLine === 'bezier')
      quadBezier = {
          start: buildAnchor(28, 211),
          control1: buildAnchor(36, 106),
          control2: buildAnchor(76, 106),
          end: buildAnchor(76, 211)

      };

    if(obj.typeLine === 'quad')
      quadBezier = {
          start: buildAnchor(28, 211),
          control: buildAnchor(56, 106),
          end: buildAnchor(76, 211)
      };

    if(obj.typeLine === 'normal')
      quadBezier = {
          start: buildAnchor(28, 211),
          control: buildAnchor(56, 106)
      };

    group.add(quadBezierLine, rect, text, rectClose);
    lineLayer.add(group);

    anchorLayer.on('beforeDraw', updateDottedLines);
    _this.Stage.add(lineLayer, anchorLayer);
    updateDottedLines();

  });
};


// for settings properties images
ViewKonva.prototype.ImagesSettings = function(object, stepRotation, number) {
  var _this = this;
  var imgUrl = '';
  if(typeof object === 'string') {
    imgUrl = object;
    object = [];
    for(var i = 0; i < number; i++)
      object.push(i);
  }
  _this.AllElements(object, function(obj, count){
    var width = _this.Stage.width();
    var height = _this.Stage.height();

    function update(activeAnchor) {
      var group = activeAnchor.getParent();
      var image = group.get('Image')[0];
      if(activeAnchor.name() === 'bottomRight') {
        image.width(activeAnchor.x())
             .height(activeAnchor.y())
             .x(image.width()/2).y(image.height()/2)
             .offsetX(image.width()/2)
             .offsetY(image.height()/2);
      }
    }

    function addAnchor(group, x, y, name) {
      var stage = group.getStage();
      var layer = group.getLayer();
      var anchor = new Konva.Circle({
          x: x,
          y: y,
          stroke: '#666',
          fill: '#333',
          strokeWidth: 3,
          radius: 10,
          name: name,
          opacity: 0.5,
          draggable: true,
          dragOnTop: false
      });
      anchor.on('dragmove', function() {
          update(this);
          layer.draw();
      }).on('mousedown touchstart', function() {
          group.setDraggable(false);
          this.moveToTop();
      }).on('dragend', function() {
          group.setDraggable(true);
          layer.draw();
      });

      // add hover styling
      anchor.on('mouseover', function() {
          var layer = this.getLayer();
          document.body.style.cursor = 'pointer';
          this.setStrokeWidth(7);
          layer.draw();
      }).on('mouseout', function() {
          var layer = this.getLayer();
          document.body.style.cursor = 'default';
          this.setStrokeWidth(3);
          layer.draw();
      });

      group.add(anchor);
    }

    var layer = new Konva.Layer();
    _this.Stage.add(layer);

    var imgSet = new Konva.Image({
        width: 80,
        height: 80,
        x: 40,
        y: 40,
        offset: {
          x: 40,
          y: 40
        }
    });

    var imgSetGroup = new Konva.Group({
        x: 25 + (count*20),
        y: 271,
        draggable: true
    });

    var btnSetGroup = new Konva.Group({
        x: 0,
        y: -35,
        width: 50,
        height: 20,
        draggable: true,
        dragBoundFunc: function(pos) {
          if(pos.x > resDrag) countDrag++;
          if(pos.x < resDrag) countDrag--;
          var image = imgSetGroup.children[0];
          image.rotation(countDrag * stepRotation);
          resDrag = pos.x;
          return {
            x: pos.x,
            y: this.getAbsolutePosition().y
          }
        }
    });

    var countDrag = 0;
    var resDrag = 0;
    var btn = new Konva.Rect({
        width: 80,
        height: 20,
        fill: '#000',
        opacity: 0.5
    });

    var rectClose = new Konva.Rect({
        x: 60,
        y: 0,
        width: 20,
        height: 20,
        fill: '#f00',
        opacity: 0.7
    });

    btn.on('mouseover', function(){
      document.body.style.cursor = 'move';
    }).on('mouseout', function(){
      document.body.style.cursor = 'default';
    });

    imgSet.on('mouseover', function(){
      document.body.style.cursor = 'pointer';
    }).on('mouseout', function(){
      document.body.style.cursor = 'default';
    });

    rectClose.on('click', function(){
      var counterImages = _this.Stage.children[0].children[0].children[9];
      counterImages.text(counterImages.text()-1);
      layer.remove();
      _this.Stage.children[0].children[0].draw();
    }).on('mouseover', function(){
      this.fill('#EF6464');
      layer.draw();
    }).on('mouseout', function(){
      this.fill('#f00');
      layer.draw();
    });

    layer.add(imgSetGroup, btnSetGroup);
    imgSetGroup.add(imgSet, btnSetGroup);
    btnSetGroup.add(btn, rectClose);

    addAnchor(imgSetGroup, 80, 80, 'bottomRight');

    var imageObj = new Image();
    imageObj.onload = function() {
      imgSet.image(imageObj);
      layer.draw();
    };

    imageObj.src = (typeof obj === 'number' ? imgUrl : obj);
    var blockingEvent = function(event){
      event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
    };

    imgSetGroup.children[0].on('click', function(event){
      var img = this;
      console.log('x: '+ (imgSetGroup.x()+(img.width()/2)) +','+
                  '\ny: '+ (imgSetGroup.y()+(img.height()/2)) +','+
                  '\nwidth: '+ img.width() +','+
                  '\nheight: '+ img.height() +','+
                  '\nrotation: '+ img.getRotation() +','+
                  '\noffset: {'+
                  '\n  x: '+ img.offsetX() +','+
                  '\n  y: '+ img.offsetY() +
                  '\n}');
      layer.draw();
    });

  });
};
