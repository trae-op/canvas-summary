


// Create new layers and adding new models
App.Views.MyView = new ViewKonva(function(_this) {

  return {
    stage: App.Stage.MyStage,
    dataLayers: App.Models.Layers,
    dataGroups: App.Models.Groups,
    rubberStage: true,
    initialize: function(stage, group, layer) {

    _this.Settings({
    	layer: layer,
    	group: group,
    	data: App.Models.Data,
    	
    	speedAllCircles: 1,
    	
    	colorItemMenu: '#fff',
    	borderLineItemMenu: 1,
    	shadowActiveItemMenu: '#000',
        borderActiveItemMenu: 2,
    	radiusItemMenu: 15,

    	fontSize: 12,
    	fontFamily: 'Verdana',
    	shadowColorText: '#000',

    	speedLineItemMenu: 0.1,
    	borderPreviewMenu: 4,
    	colorPreviewMenu: '#fff',
    	whPreviewItemMenu: 35,
    	flagHoverItemMenu: false,
    	
    	numberOtherCircles: 40,
    	colorOtherCircles: '#888',
    	radiusOtherCircle: 5,
    	borderLineOther: 0.3,

    	borderLineContent: 3,
    	radiusCirclesContent: 27,
    	hoverTextAnimate: 0.3,
        shadowProjects: 'red', 

        idClose: 'btn-close',
        addClass: 'open-close'
    });


    stage.add( 
        layer('layerLines'),
        layer('layerMain'),
        layer('layerText') 
    );

    }
  };

});





