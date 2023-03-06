import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import ToggleButton from 'primevue/togglebutton';
import Slider from 'primevue/slider';
import Rating from 'primevue/rating';
import ColorPicker from 'primevue/colorpicker';
import InputSwitch from 'primevue/inputswitch';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';




import 'primevue/resources/themes/lara-light-indigo/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'

const app = createApp(App);

app.use(PrimeVue);

app.component('p_button', Button);
app.component('p_InputText', InputText);
app.component('Check-box', Checkbox);
app.component('ToggleButton', ToggleButton);
app.component('Slider-i', Slider);
app.component('Rat-ing', Rating);
app.component('ColorPicker', ColorPicker);
app.component('InputSwitch', InputSwitch);
app.component('Text-area', Textarea);

app.mount('#app')