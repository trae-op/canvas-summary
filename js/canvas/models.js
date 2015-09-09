App.Models.Layers = [
  {
    id: 'layerMain'
  },
  {
    id: 'layerLines'
  },
  {
    id: 'layerText'
  }
];

App.Models.Groups = [
  {
    id: 'groupLineItemsMenu'
  },
  {
    id: 'groupCircleItemsMenu'
  },
  {
    id: 'groupLineTextItemMenu'
  },
  {
    id: 'groupTextItemMenu'
  },
  {
    id: 'groupShowLineItemMenu'
  },
  {
    id: 'groupShowPreviewItemMenu'
  },




  {
    id: 'groupOtherCircles'
  },
  {
    id: 'groupOtherLines'
  },



  {
    id: 'groupConnectingLine'
  },



  {
    id: 'groupPreview-skills'
  },
  {
    id: 'groupPreview-company'
  },
  {
    id: 'groupPreview-contacts'
  },


  {
    id: 'groupProject-ffw'
  },
  {
    id: 'groupProject-placeview'
  },
  {
    id: 'groupProject-palatanaroda'
  },



  {
    id: 'groupTextContent-company'
  },
  {
    id: 'groupTextContent-contacts'
  },
  {
    id: 'groupTextContent-skills'
  }

];


App.Models.Data = [
  {
    text: 'Компания/Проекты',
    image: 'img/projects.jpg',
    x: 10,
    y: 3,
    url: 'company',
    company: [
      {
        text: 'FFW - \nмеждународная \nIТ-компания, \nпредоставляющая \nполный спектр \nуслуг web-агентства.\n09.2014 - 08.2015',
        image: 'img/ffw.png',
        id: 'ffw',
        projects: [
          {
            link: 'http://malmo.se',
            image: 'img/malmo.png'
          },
          {
            link: 'http://www.favrskov.dk',
            image: 'img/favrskov.png'
          },
          {
            link: 'http://pattydoo.de/blog',
            image: 'img/pattydoo.png'
          }
        ]
      },
      {
        text: 'Placeview.in - \nИнтерактивные \nвиртуальные туры \nновый формат \nдля бизнеса.\n05.2013 - 08.2014',
        image: 'img/placeview.png',
        id: 'placeview',
        projects: [
          {
            link: 'http://placeview.in',
            image: 'img/placeview.png'
          },
          {
            link: 'http://rainbowcore.it',
            image: 'img/rainbowcore.png'
          }
        ]
      },
      {
        text: 'Palatanaroda.com\n01.2012 - 04.2013',
        image: 'img/palatanaroda.png',
        id: 'palatanaroda',
        projects: [
          {
            link: 'http://palatanaroda.com',
            image: 'img/palatanaroda.png'
          }
        ]
      }

    ]
  },
  {
    text: 'Опыт работы',
    image: 'img/skills.jpg',
    x: 12,
    y: 1.8,
    url: 'skills',
    skills: [
      {
        image: 'img/sass.png',
        text: 'Sass'
      },
      {
        image: 'img/javascript.png' ,
        text: 'JavaScript'
      },
      {
        image: 'img/jquery.png',
        text: 'jQuery'
      },
      {
        image: 'img/angularjs.png',
        text: 'Angular.js'
      },
      {
        image: 'img/backbonejs.png',
        text: 'Backbone.js'
      },
      {
        image: 'img/css3.png',
        text: 'Css3'
      },
      {
        image: 'img/html5.png',
        text: 'Html5'
      },
      {
        image: 'img/gulp.png',
        text: 'Gulp'
      },
      {
        image: 'img/konvajs.png',
        text: 'Konva.js'
      }   
    ]
  },
  {
    text: 'Контакты',
    image: 'img/contacts.jpg',
    x: 10,
    y: 1.3,
    url: 'contacts',
    contacts: [
      {
        image: 'img/skype.png',
        text: 'southside970'
      },
      {
        image: 'img/phone.png',
        text: '097-560-04-78'
      }
    ]
  },
  {
    text: 'Обновить',
    x: 15,
    y: 1.1,
    url: false
  }
];

