import Ember from 'ember';

const { Component, computed } = Ember;

export default Ember.Component.extend({
  tagName: 'ul',
  menuItems: computed('menu.items', function() {

    var items = ['home', 'products', 'contact'];
    var t = this.t;

    return items.map(function (item) {
      return {id: item, text: t(item, 0)};
    });

  })

});
