
    // component will go here
    import LoginComponent from './components/LoginComponent.js';
    import UsersComponent from './components/UsersComponent.js';

    const routes = [
       { path: '/', redirect: { name: "login"} },
       { path: '/login', name: "login", component: LoginComponent },
       // { path: '/users/:id', name: 'users', component: UsersPageComponent, props: true },
        //{ path: '/contact', name: 'contact', component: ContactPageComponent },
        //{ path: '/*', name: 'error', component: ErrorPageComponent }
        { path: '/users', name: "users", component: UsersComponent },
    ];

    const router = new VueRouter({
        routes
    });

    const vm = new Vue({
        el: '#app',

        data: {
            message: "sup from vue!",
            authenticated : false,

            mockAccount: {
                username: "tvr",
                password: "password"
            }
        },

        created: function() {
            console.log('parent is live');
        },

        methods: {
            logParent(message) {
                console.log("from the parent", message);
            },

            logMainMessage(message) {
                console.log("called from inside a child, lives in the parent", message);
            },

            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout(){
                this.authenticated = false;
            }
        },
      

        //components: {
          //  'HomePageComponent': HomePageComponent,
//'UsersPageComponent': UsersPageComponent
//},

        router: router
    }).$mount("#app");

    //make the router check all of the routes and bounce if we are not authenticated

    router.beforeEach((to, from, next) =>{
            console.log("router guard fired!");

                if (vm.authenticated == false) {
                    next("/login");
                 } else {
                        next();
                    }


    });
