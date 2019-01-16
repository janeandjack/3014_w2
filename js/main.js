(() => {
//component will go here

const HomePageComponent = {
 

    template: "<h2>your are one the home page</h2>"

      
};
const UserPagecomponent = {
    template: "<h2>your are one the users page</h2>"
};

const routes = [
    { path: '/', name:'home', component: HomePageComponent },
    {path: '/users', name: 'users', component: UserPagecomponent }
];

const router = new VueRouter({
    routes
});
 const vm = new Vue ({
     el: '#app',

     data: {
         message: "sup from vue!"
     },
     created: function () {
        console.log('parents components is live');
     },
     methods: {
         logParent(message) {
             console.log("from the parent", message);
         },
     
     logMainMessage(message){
        console.log("called from inside a child, lives in the parents", message);
     }
    },
     components: {
        'HomePageComponent': HomePageComponent,
        'UserPageComponent': UserPagecomponent
     },
     router: router
 })
})();