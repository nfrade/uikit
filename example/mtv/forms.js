'use strict'

require('./less/style.less')

var Element = require('vigour-element')
var ui = require('uikit/lib')

var App = require('vigour-element/lib/app')
var app = new App({
  node: document.body
})

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/size'),
  require('vigour-element/lib/property/scroll/top'),
  require('vigour-element/lib/property/scroll/left'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/events/click')
)

app.set({
  header: require('./components/header'),
  container: {
    css: 'main',

    forms: {
      title: new ui.H3('Forms:'),
      node: 'section',

      inputs: require('./components/forms/inputs'),
      selects: require('./components/forms/selects'),
      labels: require('./components/forms/labels'),
      buttons: require('./components/forms/buttons'),
      switchers: require('./components/forms/switchers'),
      groups: require('./components/forms/groups')
    }
  },

  hr: new ui.Hr()
})
