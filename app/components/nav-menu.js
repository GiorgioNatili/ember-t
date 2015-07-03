// app/components/nav-menu.js
import Ember from "ember";
const { Component, computed, inject } = Ember;

export default Component.extend({
  tagName: 'select',
  classNames: [ 'language-select' ],
  i18n: inject.service(),
  current: computed.readOnly('i18n.locale'),

  locales: computed('i18n.locales', function() {
    const i18n = this.get('i18n');
    return this.get('i18n.locales').map(function (loc) {
      return { id: loc, text: i18n.t('language-select.language.' + loc) };
    });
  }),

  // It would be nice to do this with `{{action "setLocale" on="change"}}`
  // in the template, but the template doesn't include the component's own
  // tag yet. See https://github.com/emberjs/rfcs/pull/60
  change: function() {
    this.get('i18n').set('locale', this.$().val());
  }
});
