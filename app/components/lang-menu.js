// app/components/lang-menu.js
import Ember from "ember";

const { Component, computed, inject } = Ember;

export default Component.extend({
  tagName: 'select',
  classNames: [ 'language-select' ],
  i18n: inject.service(),
  current: computed.readOnly('i18n.locale'),

  locales: computed('i18n.locales', function() {

    var matchKey = '/locales/';
    var locales = Ember.keys(requirejs.entries).filter(function(module) {
      return module.match(matchKey) && !module.match('/tests/');
    }).map(function(module) {
      return module.substr(module.indexOf(matchKey) + matchKey.length);
    });
    
    var t = this.t;
    return locales.map(function (loc) {
      return { id: loc, text: t('language-select.language.' + loc, 0) };
    });
  }),

  // It would be nice to do this with `{{action "setLocale" on="change"}}`
  // in the template, but the template doesn't include the component's own
  // tag yet. See https://github.com/emberjs/rfcs/pull/60
  change: function() {
    this.get('i18n').set('locale', this.$().val());
  }
});
