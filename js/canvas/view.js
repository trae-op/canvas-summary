


// Create new layers and adding new models
App.Views.MyView = new ViewKonva(function(_this) {

  return {
      stage: App.Stage.MyStage,
      dataLayers: App.Models.Layers,
      dataGroups: App.Models.Groups,
      rubberStage: true,
      initialize: function(stage, group, layer) {

      var cercles = App.Models.ItemsMenu;
      var allItemMenu = cercles.length;

      var radiusItem = 15;
      var radiusAfter = 5;
      var afterCercles = 35;
      var borderItem = 1;
      var borderAfterCercle = (_this.CheckMobile() ? 0.1 : 0.3);
      var sizeImage = 40;
      var speed = (_this.CheckMobile() ? 0 : 1);

      var colorItem = '#fff';
      var colorAfterCercles = '#888';
      var shadowColor = '#000';
      
      var lastPosition = [];
      var lines = [];

      var itemShow = [];

      var linesShowText = [];
      var showItemText = [];

      var contactsPreview = [];
      var contactsText = [];

      var skillPreview = [];

      var companyPreview = [];
      var companyText = [];

      var projects = [];
      var companyProjects = [];

      var flagHoverItem = false;

      var flagResize = false;

      var widthHeightPreview = 38;

      var widthDescription = stage.width() - 400;
      var heightDescription = stage.height() - 200;

      var btnClose = document.getElementById('btn-close');

      for (var i = 0; i < afterCercles; i++) cercles.push({});
      for (var j = 0; j < cercles.length - 1; j++) lines.push({});


      // checked mobile device
      var eventClickTouch = '';
      if (_this.CheckMobile())
        eventClickTouch = 'touchstart';
      else 
        eventClickTouch = 'click';

      _this.Shapes({
        shape: 'Circle',
        data: cercles,
        callBack: function(shape, index){ 

          shape.radius(radiusAfter).fill(colorItem);

          if (shape.attrs.text) {
            var x = shape.attrs.x;
            var y = window.innerHeight/shape.attrs.y;

            if (_this.CheckMobile()) {
              x = x - 50;
              y = y + 20;
            }

            shape
            .radius(radiusItem)
            .x(Math.random() * (stage.width()/3))
            .y(Math.random() * (stage.height()/1.5))
            .on('mouseover', function(event) {
              var lineThis = layer('layerItemMenu').children[0];
              lineThis.points([x, y, x, y, x, y]);
              document.body.style.cursor = 'pointer';

                _this.ItemAnimation({
                  flagHoverItem: flagHoverItem,
                  node: lineThis,
                  position: [
                    shape.x(), 
                    shape.y() - sizeImage,
                    shape.x(), 
                    shape.y() - sizeImage, 
                    shape.x(), 
                    shape.y()
                  ],
                  lastPosition: [
                    shape.x() - (sizeImage / 2), 
                    shape.y() - sizeImage, 
                    shape.x(), 
                    shape.y() - sizeImage, 
                    shape.x(), 
                    shape.y()
                  ],
                  duration: (_this.CheckMobile() ? 0 : 0.1),
                  callBack: function() {
                    layer('layerItemMenu').children[index + 1]
                    .x( x - (sizeImage + (sizeImage / 2)))
                    .y( y - (sizeImage + (sizeImage / 2)))
                    .show();
                  }
                });

            }).on('mouseout', function() {
                var lineThis = layer('layerItemMenu').children[0];
                document.body.style.cursor = 'default';
                layer('layerItemMenu').children[index + 1].hide();

                _this.ItemAnimation({
                  flagHoverItem: flagHoverItem,
                  node: lineThis,
                  position: [
                    shape.x(), 
                    shape.y() - sizeImage,
                    shape.x(), 
                    shape.y() - sizeImage, 
                    shape.x(), 
                    shape.y()
                  ],
                  lastPosition: [
                    shape.x(), 
                    shape.y(), 
                    shape.x(), 
                    shape.y(), 
                    shape.x(), 
                    shape.y()
                  ],
                  duration: (_this.CheckMobile() ? 0 : 0.1),
                  callBack: function() {
                    layer('layerItemMenu').children[index + 1].hide();
                  }
                }); 

            }).on(eventClickTouch, function() {
              _this.OpenItem({
                node: this,
                layer: layer,
                allCercles: cercles.length,
                radiusAfter: radiusAfter,
                colorAfterCercles: colorAfterCercles,
                afterCercles: afterCercles,
                borderAfterCercle: borderAfterCercle,
                url: this.attrs.url
              });

              //console.log(index)

            });

            itemShow.push({
              image: shape.attrs.image
            });

            showItemText.push({
              x: x + 20,
              y: y - 45,
              text: shape.attrs.text
            });
            
            linesShowText.push({
              points: [x, y, x, y, x, y]
            });

            // item projects
            if (shape.attrs.url === 'projects') {
              _this.AllElements(shape.attrs.projects, function(data, indexProjects) {
                
                companyPreview.push({
                  image: data.image,
                  id: data.name
                });

                companyText.push({
                  text: data.description
                });

                companyProjects.push(data.projectsCompany);

                _this.AllElements(data.projectsCompany, function(dataProjects, indexProjects) {
                  projects.push({
                    image: dataProjects.image,
                    link: dataProjects.link,
                    name: data.name
                  }); 
                });
              });
            }


            // item skill
            if (shape.attrs.url === 'skill') {
              _this.AllElements(shape.attrs.skill, function(data, indexSkill) {
                skillPreview.push({
                  image: data
                });
              });
            }

            // item contact
           if (shape.attrs.url === 'contacts') {
              _this.AllElements(shape.attrs.contacts, function(data, indexContacts) {
                contactsPreview.push({
                  image: data.image
                });

                contactsText.push({
                  text: data.text
                });
              });
           }


            layer('layerMain').add(shape);

            new Konva.Tween({
              node: shape,
              duration: speed,
              x: x,
              y: y,
              onFinish: function() {
                flagHoverItem = true;

                var text = layer('layerItemText').children[allItemMenu + index];
                var url = window.location.hash.replace(/#\//g, '');

                _this.ItemAnimation({
                  flagHoverItem: flagHoverItem,
                  node: layer('layerItemText').children[index],
                  position: [
                    x, y, x + 15, y - 28, x + 15, y - 28
                  ],
                  lastPosition: [
                    x, y, x + 15, y - 28, x + text.width() + 28, y - 28
                  ],
                  duration: (_this.CheckMobile() ? 0 : 0.2),
                  callBack: function() {
                    text.opacity(1);

                    if (url === shape.attrs.url)
                      _this.OpenItem({
                        node: shape,
                        layer: layer,
                        allCercles: cercles.length,
                        radiusAfter: radiusAfter,
                        colorAfterCercles: colorAfterCercles,
                        afterCercles: afterCercles,
                        borderAfterCercle: borderAfterCercle,
                        url: url
                      });

                  }
                }); 

                layer('layerItemText').draw();

              }
            }).play();

          } else {
            shape
            .fill(colorAfterCercles)
            .x(Math.random() * stage.width())
            .y(Math.random() * stage.height());

            layer('layerMain').add(shape);

            var x = (Math.random() * (stage.width() - (window.innerWidth/4))) + (window.innerWidth/4.5);
            var y = (Math.random() * (stage.height() - (window.innerHeight/5))) + (window.innerHeight/10);

            new Konva.Tween({
              node: shape,
              duration: speed,
              x: x,
              y: y
            }).play();
           
            var valueX = window.innerWidth/x;
            var valueY = window.innerHeight/y;

            _this.ResizeScreen.push(function() {
              shape.x(window.innerWidth/valueX)
              .y(window.innerHeight/valueY);
            });

          } 

          lastPosition.push([
            x,
            y
          ]);

        }

      });
      
      var positionXY = function(index) {
        return layer('layerMain').children[index];
      };

      _this.Shapes({
        shape: 'Line',
        data: lines,
        callBack: function(shape, index){

          shape
          .points([
            positionXY(index).x(), 
            positionXY(index).y(), 
            positionXY(index + 1).x(), 
            positionXY(index + 1).y()
          ])
          .stroke(colorAfterCercles)
          .strokeWidth(borderAfterCercle);

          if (index <= allItemMenu - 2) { 

           shape.stroke(colorItem).strokeWidth(borderItem);
           layer('layerMain').add(shape);


           if (!_this.CheckMobile())
            new Konva.Tween({
              node: shape,
              duration: speed,
              points: [
                lastPosition[index][0], 
                lastPosition[index][1], 
                lastPosition[index + 1][0], 
                lastPosition[index + 1][1]
              ]
            }).play();
          else 
            shape.points([
                lastPosition[index][0], 
                lastPosition[index][1], 
                lastPosition[index + 1][0], 
                lastPosition[index + 1][1]
            ]);

          } else {
            layer('layerMain').add(shape);

            new Konva.Tween({
              node: shape,
              duration: speed,
              points: [
                lastPosition[index][0], 
                lastPosition[index][1], 
                lastPosition[index + 1][0], 
                lastPosition[index + 1][1]
              ]
            }).play();            

            var valueFirstX = window.innerWidth/lastPosition[index][0];
            var valueFirstY = window.innerHeight/lastPosition[index][1];

            var valueLastX = window.innerWidth/lastPosition[index + 1][0];
            var valueLastY = window.innerHeight/lastPosition[index + 1][1];

            var checkFirstAfterLine = (index === allItemMenu - 1);

            _this.ResizeScreen.push(function() {
              shape.points([
                checkFirstAfterLine ? lastPosition[index][0] : (window.innerWidth/valueFirstX),
                checkFirstAfterLine ? lastPosition[index][1] : (window.innerHeight/valueFirstY),

                window.innerWidth/valueLastX,
                window.innerHeight/valueLastY               
              ]);
            }); 
          }  


        }
      });



      _this.Shapes({
        shape: 'Image',
        data: itemShow,
        callBack: function(shape, index) {
          shape.hide()
          .strokeWidth(4)
          .stroke(colorItem)
          .width(sizeImage)
          .height(sizeImage);

          layer('layerItemMenu').add(shape).draw();
        }
      });



      _this.Shapes({
        shape: 'Line',
        data: [{
          strokeWidth: borderItem,
          stroke: colorItem
        }],
        callBack: function(shape, index) {
          layer('layerItemMenu').add(shape);
        }
      });


      _this.Shapes({
        shape: 'Line',
        data: linesShowText,
        callBack: function(shape, index) {
          shape.stroke(colorItem).strokeWidth(borderItem);
          layer('layerItemText').add(shape);
        }
      });


      _this.Shapes({
        shape: 'Text',
        data: showItemText,
        callBack: function(shape, index) {
          _this.Font(shape);
          layer('layerItemText').add(shape);
        }
      });

      // item contacts preview
      _this.Shapes({
        shape: 'Image',
        data: contactsPreview,
        callBack: function(shape, index) {
          _this.ShowDescription({
            node: shape,
            nameLayerText: 'layerContactsText',
            nameLayerPreview: 'layerContactsPreview',
            layer: layer,
            widthHeightPreview: widthHeightPreview,
            index: index
          });
        }
      });

      // item contacts text
      _this.Shapes({
        shape: 'Text',
        data: contactsText,
        callBack: function(shape, index) {
          _this.Font(shape);
          layer('layerContactsText').add(shape).draw();
        }
      });

      
      // item skill
      _this.Shapes({
        shape: 'Image',
        data: skillPreview,
        callBack: function(shape, index) {
          shape
          .width(widthHeightPreview)
          .height(widthHeightPreview)
          .hide()
          .on('mouseover', function() {
            this.setZIndex(100);
            layer('layerSkillPreview').draw();
          })
          .on('mouseout', function() {
            this.setZIndex(0);
            layer('layerSkillPreview').draw();
          });

          layer('layerSkillPreview').add(shape).draw();
        }
      }); 


      // item projects
      _this.Shapes({
        shape: 'Image',
        data: companyPreview,
        callBack: function(shape, index) {

          _this.ShowDescription({
            node: shape,
            nameLayerText: 'layerCompanyText',
            nameLayerPreview: 'layerCompanyPreview',
            layer: layer,
            widthHeightPreview: widthHeightPreview,
            index: index
          });

          shape.on(eventClickTouch, function() {
            var numberCompany = companyPreview.length;
            var first = 4;
            var radius = 25;
            var colorBackground = colorAfterCercles;
            var speedItemSubMenu = (_this.CheckMobile() ? 0 : 0.1);

            for (var i = 0; i < afterCercles; i++) {
              var prevCercle = layer('layerMain').children[(allItemMenu + 4) + i];
              new Konva.Tween({
                node: layer('layerMain').children[(allItemMenu + 4) + i],
                duration: speedItemSubMenu,
                radius: radiusAfter,
                fill: colorAfterCercles
              }).play();
              prevCercle.shadowColor(false);
            }

            _this.AllElements(layer('layerProjects').children, function(data) {
              data.hide();
            });

            _this.AllElements(layer('layerProjects').children, function(img, iImg) {
              if (img.name() === shape.id()) {

                var cercleImg = layer('layerMain').children[(allItemMenu + numberCompany + first) + iImg];
                
                img
                .show()
                 .x( (cercleImg.x() - (widthHeightPreview/2)) )
                 .y( (cercleImg.y() - (widthHeightPreview/2)) );

                layer('layerProjects').draw();

                new Konva.Tween({
                  node: cercleImg,
                  duration: speedItemSubMenu,
                  radius: radius,
                  shadowColor: 'red',
                  fill: colorBackground
                }).play();

              }
            });

            });

          
        }
      }); 

      // item projects text
      _this.Shapes({
        shape: 'Text',
        data: companyText,
        callBack: function(shape, index) {
          _this.Font(shape);
          layer('layerCompanyText').add(shape).draw();
        }
      });            

      _this.Shapes({
        shape: 'Image',
        data: projects,
        callBack: function(shape, index) {
          shape
          .hide()
          .width(widthHeightPreview)
          .height(widthHeightPreview)
          .on('mouseover', function() {
            this.setZIndex(100);
            document.body.style.cursor = 'pointer';
            layer('layerProjects').draw();
          })
          .on('mouseout', function() {
            this.setZIndex(1);
            document.body.style.cursor = 'default';
            layer('layerProjects').draw();
          })
          .on(eventClickTouch, function() {
            window.open(this.attrs.link);
          });

          layer('layerProjects').add(shape).draw();
        }
      });


      // close all menu items
      _this.Events(btnClose, eventClickTouch, function() {
        
        // on Resize Screen
        _this.ResizeScreenOnOff(true);

        btnClose.classList.remove('open-close');
        window.location.hash = '/';

        _this.ActiveItems({
          layer: layer('layerMain'),
          radius: radiusAfter,
          startFirst: 4,
          first: 4 - 1,
          allCercles: cercles.length,
          speedItemSubMenu: (_this.CheckMobile() ? 0 : 0.1),
          colorBackground: colorAfterCercles,
          number: afterCercles,
          shadowColor: false,
          borderWidth: borderAfterCercle,
          callBack: function(elem, i) {
            var previewContacts = layer('layerContactsPreview').children[i];
            var previewSkill = layer('layerSkillPreview').children[i];
            var previewCompany = layer('layerCompanyPreview').children[i];

            _this.AllElements(layer('layerProjects').children, function(data) {
              data.hide();
            });

            if (previewContacts) previewContacts.hide();
            if (previewSkill) previewSkill.hide();
            if (previewCompany) previewCompany.hide();

            layer('layerContactsPreview').draw();
            layer('layerSkillPreview').draw();
            layer('layerCompanyPreview').draw();
            layer('layerProjects').draw();
          }
        });
      });





      stage.add(
        layer('layerMain'),  

        layer('layerContactsPreview'),
        layer('layerContactsText'),

        layer('layerSkillPreview'),

        layer('layerCompanyPreview'),
        layer('layerCompanyText'),

        layer('layerProjects'),

        layer('layerItemText'), 
        layer('layerItemMenu')
      );

      }
  };

});





