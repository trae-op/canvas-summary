App.Models.Layers = [
  {
    id: 'layerMain'
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
    text: 'Компания / Проекты',
    image: 'img/projects.jpg',
    x: 70,
    y: 3,
    url: 'company',
    company: [
      {
        text: 'Placeview.in - \nИнтерактивные \nвиртуальные туры \nновый формат \nдля бизнеса',
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
        text: 'FFW - \nмеждународная \nИТ-компания, \nпредоставляющая \nполный спектр \nуслуг web-агентства.',
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
      }

    ]
  },
  //------------------------------------
  {
    text: 'Опыт работы',
    image: 'img/skills.jpg',
    x: 90,
    y: 1.8,
    url: 'skills',
    skills: [
      {
        image: 'img/sass.png',
        text: 'SASS'
      },
      {
        image: 'img/javascript.png' ,
        text: 'JS'
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
        text: 'CSS3'
      },
      {
        image: 'img/html5.png',
        text: 'HTML5'
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
  //------------------------------------
  {
    text: 'Контакты',
    image: 'img/contacts.jpg',
    x: 70,
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
  }
];

