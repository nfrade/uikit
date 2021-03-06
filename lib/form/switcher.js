'use strict'
var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')

/**
 * Select element
 * @memberOf UIKit
 */

module.exports = new Element({
  css: 'ui-switcher ui-atom ui-form-element',
  properties: {
    state: new Observable({
      on: {
        data: {
          ui () {
            this.parent.checkbox.node.checked = this.val
          }
        }
      }
    }).Constructor
  },
  checkbox: {
    node: 'input',
    attributes: {
      type: 'checkbox'
    },
    on: {
      change: {
        ui () {
          if (this.parent.state) {
            this.parent.state.origin.val = this.node.checked
          }
          this.parent.setKey('css', {
            addClass: 'ui-dirty'
          })
        }
      }
    }
  },
  circle: {
    node: 'span'
  }
}).Constructor
