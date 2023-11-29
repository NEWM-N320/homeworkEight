//router 
import { createRouter, createWebHistory } from "vue-router";

//import the views needed 

//"home view", which is the member view (also default route)
import MemberView from '../views/MemberView.vue';

//team view, has team names and members of teams
import TeamView from '../views/TeamView.vue';


//create the routs
const routes = [

  //default path, which is memberView
  {
    path: '/',
    name: 'home',
    component: MemberView
  },

  //member path, same as home
  {
    path: '/members',
    name: 'members',
    component: MemberView
  },

  //team view
  {
    path: '/teams',
    name: 'teams',
    component: TeamView
  },
]

//create and and export the router


//create router
const router = createRouter({
  history: createWebHistory(),
  routes
});

//export router
export default router;