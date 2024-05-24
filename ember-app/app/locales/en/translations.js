import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProduct_36047CarLForm from './forms/i-i-s-product-36047-car-l';
import IISProduct_36047CarEForm from './forms/i-i-s-product-36047-car-e';
import IISProduct_36047CarModel from './models/i-i-s-product-36047-car';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-product-36047-car': IISProduct_36047CarModel,
  },

  'application-name': 'Product_36047',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...',
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!',
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu',
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings',
          },
          'show-menu': {
            caption: 'Show menu',
          },
          'hide-menu': {
            caption: 'Hide menu',
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language',
          },
        },
        login: {
          caption: 'Login',
        },
        logout: {
          caption: 'Logout',
        },
      },

      footer: {
        'application-name': 'Product_36047',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.',
        },
      },

      sitemap: {
        'application-name': {
          caption: 'Product_36047',
          title: 'Product_36047',
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.',
        },
        index: {
          caption: 'Home',
          title: '',
        },
        'product-36047': {
          caption: 'Product_36047',
          title: 'Product_36047',
          'i-i-s-product-36047-car-l': {
            caption: 'Car',
            title: '',
          },
        },
      },
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed',
    },
    'i-i-s-product-36047-car-l': IISProduct_36047CarLForm,
    'i-i-s-product-36047-car-e': IISProduct_36047CarEForm,
  },

});

export default translations;
