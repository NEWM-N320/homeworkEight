// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//creating an app to be used and mounted
const app = createApp(App);


//importing all files needed

//input box
import InputBox from './components/InputBox.vue';

//filtered list
import FilteredList from './components/FilteredList.vue';

//member info listed
import MemberListed from './components/MemberListed.vue';

//slotted btn
import SlottedButton from './components/SlottedButton.vue';

//all components needed 
//inputbox
app.component('input-box', InputBox);

//filtered list
app.component('filtered-list', FilteredList);

//member info listed
app.component('member-listed', MemberListed);

//btn that is a slot
app.component('slotted-button', SlottedButton);

//use the router
app.use(router);

//mount the app
app.mount('#app');
