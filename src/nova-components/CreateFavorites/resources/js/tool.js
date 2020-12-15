import {CancelButton, SubmitButton} from "./components/buttons";
import {DropdownField, TextField} from "./components/fields";
import {ErrorLabel, LabelText} from "./components/labels";
import createFavorites from "./store/favoritesStore.js";


Nova.booting((Vue, router, store) => {
  store.registerModule(
    'createFavorites', createFavorites
  );
  

  Vue.component('cancel-button', CancelButton);
  Vue.component('submit-button', SubmitButton);
  Vue.component('dropdown-field', DropdownField);
  Vue.component('text-field', TextField);
  Vue.component('error-label', ErrorLabel);
  Vue.component('label-text', LabelText);

  router.addRoutes([
    {
      name: 'create-favorites',
      path: '/create-favorites',
      component: require('./components/Tool'),
    },
  ])
})
