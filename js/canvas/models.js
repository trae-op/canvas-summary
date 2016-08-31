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
    id: 'groupButtonStart'
  },

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
    text: 'Companies/Projects',
    image: 'img/projects.jpg',
    x: 10,
    y: 3,
    url: 'company',
    company: [
      {
        text: 'FFW - we engineer \ndigital business solutions \nand create engaging \nonline experiences',
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
        text: 'Placeview - interactive \nvirtual tours it`s a \nnew format for business',
        image: 'img/placeview.png',
        id: 'placeview',
        projects: [
          {
            link: 'http://placeview.in',
            image: 'img/placeview.png'
          }
        ]
      }

    ]
  },
  {
    text: 'Skills',
    image: 'img/skills.jpg',
    x: 12,
    y: 1.8,
    url: 'skills',
    skills: [
      {
        image: 'https://d1dkupr86d302v.cloudfront.net/community/assets/tag-icons/icon-tag-react-a12a9f3cf656135932ae32bbd1df104f891b5f6f9f07c10deef7da173f52fcda.svg',
        text: 'React.js'
      },
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
    text: 'Contacts',
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
    text: 'Update',
    x: 15,
    y: 1.1,
    url: false
  }
];

