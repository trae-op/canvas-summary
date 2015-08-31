
// animation hover
ViewKonva.prototype.ItemAnimation = function(object) {
  if (object.flagHoverItem)
    new Konva.Tween({
      node: object.node,
      duration: object.duration,
      points: object.position,
      onFinish: function() {
        new Konva.Tween({
          node: object.node,
          duration: object.duration,
          points: object.lastPosition,
          onFinish: function() {
            if (object.callBack) object.callBack(object.node);
          }
        }).play();
      }
    }).play();
};




ViewKonva.prototype.ActiveItems = function(object) {
  var _this = this;

  if (object.shadowColor === false)
  _this.AllElements(object.layer.children, function(data) {
    if (data.attrs.text) 
      data
      .shadowColor(object.shadowColor)
      .strokeWidth(object.shadowColor)
      .stroke(object.shadowColor);
    else 
      data.shadowColor(object.shadowColor);

  });
  else
    object.node
    .shadowColor(object.shadowColor)
    .strokeWidth(1)
    .stroke(object.shadowColor);

  for (var i = 0; i < object.number; i++) {

    if (object.callBack) object.callBack(object.layer.children[object.startFirst + i], i);

    new Konva.Tween({
      node: object.layer.children[(object.first) + i],
      duration: object.speedItemSubMenu,
      fill: object.colorBackground,
      radius: object.radius
    }).play();

    if (i <= object.number - 2) {
      new Konva.Tween({
        node: object.layer.children[((object.allCercles + (object.first)) + i)],
        duration: object.speedItemSubMenu,
        strokeWidth: object.borderWidth
      }).play();
    }  
 
  }  
};

// open item menu
ViewKonva.prototype.OpenItem = function(object) {
  var _this = this;
  var first = 4;
  var radius = 27;
  var colorBackground = '#888';
  var colorActive = 'blue';
  var borderWidth = (_this.CheckMobile() ? 1 : 3);
  var speedItemSubMenu = 0.1;
  var nameLayer = '';
  var btnClose = document.getElementById('btn-close');

  // off Resize Screen
  _this.ResizeScreenOnOff(false);

  window.location.hash = '/' + object.url;

  btnClose.classList.add('open-close');

  _this.ActiveItems({
    layer: object.layer('layerMain'),
    radius: object.radiusAfter,
    first: first - 1,
    startFirst: first,
    speedItemSubMenu: (_this.CheckMobile() ? 0 : 0.1),
    allCercles: object.allCercles,
    colorBackground: object.colorAfterCercles,
    number: object.afterCercles,
    shadowColor: false,
    borderWidth: object.borderAfterCercle,
    callBack: function(elem, i) {
      var previewContacts = object.layer('layerContactsPreview').children[i];
      var previewSkill = object.layer('layerSkillPreview').children[i];
      var previewCompany = object.layer('layerCompanyPreview').children[i];

      _this.AllElements(object.layer('layerProjects').children, function(data) {
        data.hide();
      });

      if (previewContacts) previewContacts.hide();
      if (previewSkill) previewSkill.hide();
      if (previewCompany) previewCompany.hide();

      object.layer('layerContactsPreview').draw();
      object.layer('layerSkillPreview').draw();
      object.layer('layerCompanyPreview').draw();
      object.layer('layerProjects').draw();
    }
  });

  if (object.node.attrs.url === 'skill') 
    nameLayer = 'layerSkillPreview';
  else if (object.node.attrs.url === 'projects') 
    nameLayer = 'layerCompanyPreview';
  else if (object.node.attrs.url === 'contacts') 
    nameLayer = 'layerContactsPreview';

  _this.ActiveItems({
    layer: object.layer('layerMain'),
    startFirst: first,
    first: first,
    node: object.node,
    allCercles: object.allCercles,
    colorBackground: colorBackground,
    radius: radius,
    borderWidth: borderWidth,
    speedItemSubMenu: (_this.CheckMobile() ? 0 : 0.1),
    shadowColor: colorActive,
    number: object.node.attrs[object.url].length,
    callBack: function(elem, i) {

      var preview = object.layer(nameLayer).children[i];

      preview
      .show()
      .x( (elem.x() - (preview.width()/2)) )
      .y( (elem.y() - (preview.height()/2)) );

      object.layer(nameLayer).draw();

    }
  });
  
  object.layer('layerMain').draw();

};

ViewKonva.prototype.ShowDescription = function(object) {
  var _this = this;
  var text = object.layer(object.nameLayerText).children[object.index];
  object.node
  .width(object.widthHeightPreview)
  .height(object.widthHeightPreview)
  .hide()
  .on('mouseover', function() {

    this.setZIndex(100);

    if (object.nameLayerText === 'layerCompanyText')
      document.body.style.cursor = 'pointer';

    text
    .x(this.x() - (text.width() + (object.widthHeightPreview/3)))
    .y((this.y() - (object.widthHeightPreview/3)) - 5);

    new Konva.Tween({
      node: text,
      duration: (_this.CheckMobile() ? 0 : 0.3),
      y: text.y() + 5,
      opacity: 1
    }).play(); 

    object.layer(object.nameLayerPreview).draw();
  })
  .on('mouseout', function() {

    this.setZIndex(1);

    if (object.nameLayerText === 'layerCompanyText')
      document.body.style.cursor = 'default';

    new Konva.Tween({
      node: text,
      duration: (_this.CheckMobile() ? 0 : 0.3),
      y: text.y() - 5,
      opacity: 0
    }).play(); 
  });

  object.layer(object.nameLayerPreview).add(object.node).draw();
};

ViewKonva.prototype.Font = function(node) {
  var fontSize = 13;
  var fontFamily = 'Arial';
  var shadowColor = '#000';
  var colorText = '#eee';

  node
  .fontSize(fontSize)
  .fontFamily(fontFamily)
  .shadowColor(shadowColor)
  .fill(colorText)
  .opacity(0);

};