
// caching circles for projects
ViewKonva.prototype.PrevProjectsCircles = [];
// caching previews for projects
ViewKonva.prototype.PrevProjectsPreview = [];

// caching active item
ViewKonva.prototype.PrevActiveItemMenu = [];

// caching the line position between menu and content
ViewKonva.prototype.EndPositionConnectingLine = [];

// caching the content Circles
ViewKonva.prototype.PrevCircles = [];
// caching the content Lines
ViewKonva.prototype.PrevLines = [];
// caching the content Preview
ViewKonva.prototype.PrevPreview = [];

ViewKonva.prototype.Settings = function(object) {
    var _this = this;

    _this.Data = object.data;

    _this.Layer = object.layer;
    _this.Group = object.group;

    _this.FontSizeButtonStart = object.fontSizeButtonStart;
    _this.ButtonStartWidth = object.buttonStartWidth;
    _this.ButtonStartHeight = object.buttonStartHeight;
    _this.ButtonStartFill = object.buttonStartFill;
    _this.ButtonStartText = object.buttonStartText;

    _this.ColorOtherCircles = object.colorOtherCircles;
    _this.NumberOtherCircles = object.numberOtherCircles;
    _this.BorderLineOther = object.borderLineOther;
    _this.RadiusOtherCircle = object.radiusOtherCircle;

    _this.BorderLineItemMenu = object.borderLineItemMenu;
    _this.ColorItemMenu = object.colorItemMenu;
    _this.RadiusItemMenu = object.radiusItemMenu;
    _this.BackgroundActiveItemMenu = object.backgroundActiveItemMenu;
    _this.SpeedAllCircles = object.speedAllCircles;

    _this.FontSize = object.fontSize;
    _this.FontFamily = object.fontFamily;
    _this.ShadowColorText = object.shadowColorText;

    _this.SpeedLineItemMenu = object.speedLineItemMenu;

    _this.BorderPreviewMenu = object.borderPreviewMenu;
    _this.ColorPreviewMenu = object.colorPreviewMenu;
    _this.WHpreviewItemMenu = object.whPreviewItemMenu;

    _this.FlagHoverItemMenu = object.flagHoverItemMenu;

    _this.BorderLineContent = object.borderLineContent;
    _this.RadiusCirclesContent = object.radiusCirclesContent;
    _this.HoverTextAnimate = object.hoverTextAnimate;
    _this.BorderProjects = object.borderProjects;

    _this.IdClose = object.idClose;
    _this.AddClass = object.addClass;


/*    _this.MobileTrue(function() {
      _this.NumberOtherCircles = 25;
      _this.WHpreviewItemMenu = 25;
      _this.RadiusCirclesContent = 20;
    });*/


    _this.MobileTrue(function() {
        document.getElementById('for-mobile')
            .classList
                .remove('close-mobile');
  
    }).MobileFalse(function() {
        
        _this.activateApp = true;

        
        _this.RectButtonStart(function(shape) {
          if (_this.activateApp) {
            _this.activateApp = false;

            this.hide();

            _this.CircleItemsMenu()
                .OtherCircles()
                .OtherLines()

            .PreviewProjects()
                .PreviewContent()

            .LineItemsMenu()
                .LineTextItemMenu()
                .TextItemMenu()
                .ShowLineItemMenu()
                .ShowPreviewItemMenu()

            .TextContent()

            .ConnectingLine()

            .UpdatePositionItemMenu()

            .UpdatePositionCircles()

            .ButtonClose();
          }
        }).TextButtonStart();

        

        _this.Events(window, 'hashchange', function() {
          _this.ChangeURL();
        });

        _this.ResizeScreen.push(function(){
          if (!_this.activateApp) {
            _this.UpdatePositionItemMenu()
              .UpdatePositionCircles()
              .UpdateLineTextItemMenu();
          } else {
            _this.UpdateRectTextButtonStart();
          }
        });

        _this.Screen('max-width-1200', function() {
          _this.flagBlockingHover = false;
        })
        .Screen('min-width-1200', function() {
          _this.flagBlockingHover = true;
        });

    });

};
