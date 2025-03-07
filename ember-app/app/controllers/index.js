import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.product-36047.caption'),
          title: i18n.t('forms.application.sitemap.product-36047.title'),
          children: [{
            link: 'i-i-s-product-36047-car-l',
            caption: i18n.t('forms.application.sitemap.product-36047.i-i-s-product-36047-car-l.caption'),
            title: i18n.t('forms.application.sitemap.product-36047.i-i-s-product-36047-car-l.title'),
            icon: 'chart line',
            children: null
          }]
        }
      ]
    };
  }),
})