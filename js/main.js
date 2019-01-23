(() => {
//component will go here

const HomePageComponent = {
 

    template: "<h2>your are one the home page</h2>"

      
};
const UserPageComponent = {
    template: "<h2>your are one the users page</h2>"
};
const ContactPageComponent = {
    template: "<h2>your are one the contact page</h2>"
};

const ErrorPagecomponent = {
    template: "<h2>page not found! plz try again!</h2>"
};
const routes = [
    { path: '/', name:'home', component: HomePageComponent },
    { path: '/users', name: 'users', component: UserPageComponent },
    { path: '/contact', name: 'contact', component: ContactPageComponent },
    { path: '/*', name:'error', component: ErrorPagecomponent }
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
        'UserPageComponent': UserPageComponent,
        'ContactPageComponent': ContactPageComponent
     },
     router: router
 })
})();