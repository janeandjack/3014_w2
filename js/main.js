(() => {
//component will go here

const liveuser = {
    props: ['first_name', 'last_name', 'role'],

    template: "#activeuser",

        methods: {
        logChildMeg(){
            console.log('hello from the child component');
        },
        runParentFunt(){
            this.$emit('passfunccallup', 'dfdafdf')
        }
    },
    created: function () {
        console.log('child components is live');
    }
};

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
        user: liveuser
     }
 })
})();