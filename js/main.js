(() => {
//component will go here

const HomePageComponent = {
 

    template: "<h2>your are one the home page</h2>"

      
};
const UserPageComponent = {
    props: ['id'],
    template: "#userList",
    //this alwaus meeds to be a function in a component
    data: function() {
        return {
            users: []
        }
    },

created: function(){
    console.log('user con=mponent created');


    this.fetchUserData(this.id);
},

methods: {
    fetchUserData(user) {
        debugger;

        let url = `./includes/index.php?user=${user}`;

        fetch(url)
        .then(res => res.json())
        .then(data => this.users = data)
        .catch(function(error){
        console.error(error);
        });
    }
  }

};
const ContactPageComponent = {
    template: "<h2>your are one the contact page</h2>"
};

const ErrorPagecomponent = {
    template: "<h2>page not found! plz try again!</h2>"
};
const routes = [
    { path: '/', name:'home', component: HomePageComponent },
    { path: '/users/:id', name: 'users', component: UserPageComponent, props: true },
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