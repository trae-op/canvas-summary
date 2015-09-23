
// Creating view
function ViewKonva(object) {
  var _this = this;
  var layers = [];
  var groups = [];
  var allLayersGroups = function(layersGroups, nameGL){
    for(var i = 0; i < layersGroups.length; i++) {
      var dataLG = layersGroups[i];
      if(dataLG.id() === nameGL) return dataLG;
    }
  };
  var allLayers = function(nameLayer){
    return allLayersGroups(layers, nameLayer);
  };
  var allGroups = function(nameGroup){
    return allLayersGroups(groups, nameGroup);
  };

  _this.all = object(_this);

  // Check Stage
  if(!_this.all.stage) {
    console.log('error: no stage "'+_this.all.stage+'"!');
    return;
  }

  // Check Layers
  if(!_this.all.dataLayers) {
    console.log('error: no layers "'+_this.all.dataLayers+'"!');
    return;
  }

  // Stage
  _this.Stage = _this.all.stage;

  // Groups
  if(_this.all.dataGroups)
    _this.AllElements(_this.all.dataGroups, function(data, index){
      groups.push(new Konva.Group(data));
    });

  // Layers
  _this.AllElements(_this.all.dataLayers, function(data, index){
    layers.push(new Konva.Layer(data));
  });

  // For changes resize screen
  if(_this.all.rubberStage) {
    _this.ResizeScreen.push(function(){
       if(_this.all.rubberStage)
      _this.ScreenCanvas();
    });
    _this.ScreenCanvas();
    _this.Resize(_this.ResizeScreen);
  }

  // initializing canvas, layers, groups
  _this.all.initialize(_this.Stage, allGroups, allLayers);

  // For keyboard events
  _this.StartKeyboard();
}

// data array for Responsive
ViewKonva.prototype.ResizeScreen = [];

//Resize Screen on/off
ViewKonva.prototype.ResizeScreenOnOff = function(value) {
  var _this = this;
  _this.all.rubberStage = value;

  if (value === true) 
    _this.Stage.width(window.innerWidth);
};

// Performs specific actions for each model
ViewKonva.prototype.AllElements = function(array, callback){
  var _this = this;
  array.forEach(callback);
  return _this;
}

// Shapes
ViewKonva.prototype.Shapes = function(object){
  var _this = this;
  var typeShape;

  if(object.numberShapes) {
    for(var i = 0; i < object.numberShapes; i++) object.data.push(object.data[i]);
  }

  if(object.shape === 'Image')
    typeShape = 'LoadImages';
  else
    typeShape = 'AllElements';

    _this[typeShape](object.data, function(data, index){
      object.callBack(new Konva[object.shape](data), index);
    });

  return _this
}

ViewKonva.prototype.DefoultallElements = function(array, callback){
  for(var i = 0; i < array; i++) callback(array[i], i);
}

// Loading one image
ViewKonva.prototype.LoadOneImage = function(image){
  var imageObj = new Image();
  imageObj.onload = function() {
    image.after(this, image.node);
  };
  imageObj.src = image.url;
}

// Loading for all images
ViewKonva.prototype.LoadImages = function(models, callback){
  var index = 0,
      img = [],
      dataImg = [];
  this.AllElements(models, function(data, i){
    dataImg[i] = data;
    img[i] = new Image();
    img[i].onload = function(event){
      dataImg[index].image = this;
      callback(dataImg[index], index);
      index++;
    };
    img[i].src = data.image;
  });
}

// for check screen size
ViewKonva.prototype.Screen = function(value, callBack) {
  var _this = this,
      regScreen = /[^0-9]+/,
      regWidthMax = value.replace(/max-|-|[0-9]/g, ''),
      regWidthMin = value.replace(/min-|-|[0-9]/g, ''),
      upperCase = function(m){
        return 'inner'+m.toUpperCase();
      },
      checkScreen = function() {
        if(window[regWidthMax.replace(/\w/, upperCase)] <= value.replace(regScreen, ''))
          callBack(value);
        if(window[regWidthMin.replace(/\w/, upperCase)] >= value.replace(regScreen, ''))
          callBack(value);
      };
      checkScreen();
      _this.ResizeScreen.push(checkScreen);

  return _this;
};

// for event 'resize'
ViewKonva.prototype.Events = function(element, event, anons){
  var _this = this

  if(element.addEventListener) element.addEventListener(event, anons, false);
  else element.attachEvent(event, anons);

  return _this
}

// event 'resize' for Responsive
ViewKonva.prototype.Resize = function(methods) {
  var _this = this;
  _this.Events(window, 'resize', function(){
    for(var i = 0; i < methods.length; i++) methods[i](i);
  });
}

// calculating for Responsive
ViewKonva.prototype.Responsive = function(elementWidth, reletiveWidth) {
  return (elementWidth - (this.Stage.getWidth() - reletiveWidth));
}

// for return style
ViewKonva.prototype.StyleElement = function(element, property){
  if(window.getComputedStyle(element) !== undefined)
  return window.getComputedStyle(element).getPropertyValue(property);
}

// replace width of the Canvas on the width of the Container
ViewKonva.prototype.ScreenCanvas = function() {
  var _this = this;
  var conteinerWidth = window.innerWidth;
  var conteinerHeight = window.innerHeight;
  _this.Stage.width(conteinerWidth);
  _this.Stage.height(conteinerHeight);
}

// Set interval
ViewKonva.prototype.AllIntervals = [];
ViewKonva.prototype.SetInt = function(array) {
  var _this = this;
  _this.allIntervals = array;
  _this.AllElements(_this.allIntervals, function(all, index){
    all.counter = 0;
    all.nextPrev = function(check) {
      if(check === 'next')
        all.counter = all.counter + all.countInterval;
      if(check === 'prev')
        all.counter = all.counter - all.countInterval;
      if(all.startInterval)
        all.startInterval({
          counter: all.counter
        });
    };
    all.play = function() {
      if(all.autoplay)
      all.interval = setInterval(function(){
        all.nextPrev('next');
      }, all.step);
    };
    all.pause = function() {
      if(all.autoplay)
      clearInterval(all.interval);
    };
  });
};

// keyboard events
ViewKonva.prototype.Keyboard = [];
ViewKonva.prototype.StartKeyboard = function() {
  var _this = this;

  document.onkeydown = function checkKeycode(event) {
    // check number keys
    if(_this.Keyboard.length <= 0) return;
    var keycode;
    if(!event) var event = window.event;
    if (event.keyCode) keycode = event.keyCode;
    else if(event.which) keycode = event.which;
    _this.AllElements(_this.Keyboard, function(data, index){
      var dataCode = data.code;
      // check the key code
      if(data.checkCode) console.log('keycode: '+keycode);
      for (k in dataCode) {
        if (keycode === dataCode[k]) data.allKeys(k, dataCode);
      }
    });
  };
};

ViewKonva.prototype.MobileTrue = function(callBack) {
  var _this = this;
  _this.CheckMobile = ( 
        device.android()
  );

  if (_this.CheckMobile) callBack(_this.CheckMobile);

  return _this;
};

ViewKonva.prototype.MobileFalse = function(callBack) {
  var _this = this;

  if (!_this.CheckMobile) callBack(_this.CheckMobile);

  return _this;
};


//--------------------------------------------------
// Custom prototypes

ViewKonva.prototype.Font = function(node) {
  var _this = this;
  node
  .fontSize(_this.FontSize)
  .fontFamily(_this.FontFamily)
  .shadowColor(_this.ShadowColorText)
  .fill(_this.ColorItemMenu)
  .hide()
  .opacity(0);

  return _this;
};

ViewKonva.prototype.LinesItemMenu = function(node) {
  var _this = this;
  node
  .stroke(_this.ColorItemMenu)
  .strokeWidth(_this.BorderLineItemMenu);

  return _this;
};

ViewKonva.prototype.LinesOther = function(node) {
  var _this = this;
  node
  .stroke(_this.ColorOtherCircles)
  .strokeWidth(_this.BorderLineOther);

  return _this;
};


ViewKonva.prototype.ValueEvents = function(oneEvent) {
  var _this = this;
  var result = '';

  // _this.MobileTrue(function() {
  //   if (oneEvent === 'click' || oneEvent === 'mouseover')
  //     result = 'touchstart';
  //   if (oneEvent === 'mouseout')
  //     result = 'touchend';

  // }).MobileFalse(function() {
    result = oneEvent;
  //});

  return result;
  
};