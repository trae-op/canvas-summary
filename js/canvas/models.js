
App.Models.Groups = [];
App.Models.Layers = [
  {
    id: 'layerMain'
  },


  {
    id: 'layerItemMenu'
  },
  {
    id: 'layerItemText'
  },


  {
    id: 'layerContactsPreview'
  },
  {
    id: 'layerContactsText'
  },


  {
    id: 'layerSkillPreview'
  },


  {
    id: 'layerCompanyPreview'
  },
  {
    id: 'layerCompanyText'
  },


  {
    id: 'layerProjects'
  }
];

App.Models.ItemsMenu = [
  {
    text: 'Компания / Проекты',
    image: 'img/projects.jpg',
    x: 70,
    y: 3,
    url: 'projects',
    projects: [

      {
        description: 'Placeview.in - \nИнтерактивные \nвиртуальные туры \nновый формат \nдля бизнеса',
        image: 'img/placeview.png',
        name: 'placeview',
        projectsCompany: [
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
        description: 'FFW - \nмеждународная \nИТ-компания, \nпредоставляющая \nполный спектр \nуслуг web-агентства.',
        image: 'img/ffw.png',
        name: 'ffw',
        projectsCompany: [
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
    url: 'skill',
    skill: [
      'img/sass.png',
      'img/javascript.png',
      'img/jquery.png',
      'img/angularjs.png',
      'img/backbonejs.png',
      'img/css3.png',
      'img/html5.png',
      'img/gulp.png',
      'img/konvajs.png'
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

