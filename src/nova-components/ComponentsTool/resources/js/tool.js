import {CancelButton, SubmitButton} from "./components/buttons";
import {ErrorLabel, LabelText} from "./components/labels";
import {TextInput, DropdownInput} from "./components/inputs";
import {Grid} from "./components/grids";

Nova.booting((Vue, router, store) => {

  Vue.component('cancel-button', CancelButton);
  Vue.component('submit-button', SubmitButton);
  Vue.component('error-label', ErrorLabel);
  Vue.component('label-text', LabelText);
  Vue.component('text-input', TextInput);
  Vue.component('dropdown-input', DropdownInput);
  Vue.component('grid', Grid);

  Vue.component('components-tool', require('./components/Tool'))
})
