require('./style.less')

var Element = require('vigour-element')
var ui = require('uikit/lib')

module.exports = new Element({
  title: new ui.H5('Buttons:'),
  node: 'section',

  sizes: {
    title: new ui.P('Button sizes:'),
    'ui-large': new ui.Button({
      val: 'Large',
      on: {
        click() {
          app.set({

          })
        }
      }
    }),
    'ui-big': new ui.Button('Big'),
    'ui-medium': new ui.Button('Medium'),
    'ui-small': new ui.Button('Small'),
  },

  colors: {
    title: new ui.P('Button colors:'),

    'ui-primary': new ui.Button(),
    'ui-secondary': new ui.Button('Secondary'),
    'ui-tertiary': new ui.Button('Tertiary'),
    'ui-grayscale-light': new ui.Button('Grayscale Light'),
    'ui-grayscale-dark': new ui.Button('Grayscale Dark'),
    'ui-blackwhite': new ui.Button('Black n White'),
  },

  types: {
    title: new ui.P('Button types:'),

    italic: new ui.Button().set({
      css: {
        addClass: 'ui-big ui-tertiary italic-button'
      }
    }),
    withIcon: new ui.Button('Register').set({
      css: {
        addClass: 'ui-big ui-tertiary'
      },
      text: 'Next',
      icon: new ui.Icon('right')
    }),
    iconic: new ui.Button('Register').set({
      css: {
        addClass: 'ui-big ui-tertiary iconic'
      },
      text: '',
      icon: new ui.Icon('right')
    })
  }
})
